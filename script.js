require("dotenv").config()
const mongoose=require("mongoose")
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
  });
const express=require('express')//for using express
const app=express()//everything that express can do now app can do
const bcrypt=require('bcrypt')//for encrypting password or for saftey purpose
const cookieParser=require ('cookie-parser')//for generating cookies so that the server could recognise who are we
const jwt = require('jsonwebtoken')//
const path=require('path')//for joinging to the pages like public etc


const usermodel=require('./models/usermodel')//requiring the user model that we created using mongoose
const WorkoutModel=require('./models/workoutModels')//requiring the workout model that we created using mongoose
const { log } = require('console')
app.set("view engine","ejs")//setting up the ejs so that instead of going to multiple pages we can be on one pages
app.use(express.json())
app.use(express.static(path.join(__dirname,"public")))//we have created multiple pictures snow to connect them we use path.join
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())//for using cookies parser


app.get("/",function(req,res){
    res.render("login.ejs")//login page for user
})
app.get("/test",function(req,res){
    res.render("test.ejs")//for testing
})
app.get("/progress",isloggedin,async function(req,res){
    const user = await usermodel.findById(req.user.userid);
    res.render("progress.ejs",{workout:user.workouts});
})
app.post("/progress/delete", isloggedin, async function (req, res) {
    try {
        const userid = req.user.userid;
        const exerciseid = req.body.exerciseId;

        // check if exercise exists in user workouts
        const user = await usermodel.findById(userid);

        const exists = user.workouts.some(
            (w) => w._id.toString() === exerciseid.toString()
        );

        if (exists) {
            await usermodel.findByIdAndUpdate(
                userid,
                { $pull: { workouts: { _id: exerciseid } } }
            );
        }

        res.redirect("/progress"); // or send a success response
    } catch (err) {
        console.error(err);
        res.status(500).send("Something went wrong");
    }
});
app.get("/nutrition",isloggedin,function(req,res){
    res.render("nutrition.ejs")
})







app.post("/progress",isloggedin,async function(req,res){
    try {
    const userId = req.user.userid; // logged-in user// since we have jwt session therefore to get user id we use req.user.user.id req.user
    //fixed from the islogged in session that we created
    const exerciseId = req.body.exerciseId;//req.body is something that we post or send through the front end we just have to make sure that the name given to it should be same
    //like in the workoutbodypart we have given name execise id

    // find exercise in WorkoutModel
    const workoutDoc = await WorkoutModel.findOne(//this one is used to find the workout from my workout model on the basis of id by matching exercise id from the front end
      { "exercises._id": exerciseId },
      { "exercises.$": 1 }//dollar is the special mongo db operator used to find only one or the first element from the search
    );

    if (!workoutDoc) return res.status(404).send("Exercise not found");//if there is no workout document it will return exercise not found

    const exercise = workoutDoc.exercises[0];//using[0] because mongodb still give matched array so just to be sure

    // check if user already has this workout
    const user = await usermodel.findById(userId);//this is used to find the user from usermodel with the help of user id
    
    const exists = user.workouts.some(w => w._id.toString() === exercise._id.toString());//since we got the user we can get anything user.workouts user.name anything
//some is the feature of javascript returns true if any one condition matches otherwise return false
//this w is traversing each workout present in user convertin the id of that workout to string and checking with the exercise we want to add
    if (exists) {
        //if thers value showing true it will return back tot that page
      return res.redirect("/progress"); // or flash message: already added
    }

    // add workout to user
    await usermodel.findByIdAndUpdate(userId, { $push: { workouts: exercise } });//mongodb update operator used to update the array and push workouts
    //else it will find the model by id and update it

    res.redirect("/workouts");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding workout");
  }
});


app.get("/workouts",isloggedin,async function(req,res){//is logged in function to check user is logged in or not
    const user=await usermodel.findById(req.user.userid);//finding the user by user id
    res.render("workouts.ejs",{user})//passing or rendering workout page as well as the information about user
})

app.get("/workouts/:bodypart",isloggedin,async function(req,res){ //req.paramsis something that will give what do we want from the given url like here its bodyparts so after workouts well get bodypart
    try{//try is something that will work if theres no error and if theres error automatically catch will work
        const bodyPart=req.params.bodypart;//after the: we can get what is written over there
        const workout=await WorkoutModel.findOne({bodyPart:{ $regex: new RegExp("^" + bodyPart + "$", "i") }});
        if(!workout){
            return res.status(400).send("workout not found")//if by clicking theres no wrokout we can go back
        }
        res.render("workoutbodypart.ejs",{workout});//same rendering the workoutbody part page that is passed with workout to get information
    }catch(err){//for catching the error
        console.log(err);
        res.status(500).send("something went wrong")
    }

})


app.get("/profile",isloggedin,async function(req,res){//to get the profile page
    const user=await usermodel.findById(req.user.userid);
    if(!user){
        return res.redirect("login")
    }

    res.render("profile.ejs",{user});
})

app.post("/logout",async function(req,res){
res.clearCookie("token"); // this removes the JWT cookie from the browser because it remembers the user therfeore clearing the cookie will remove it
  return res.redirect("/login");   
  
})
app.get("/login",redirectIfLoggedin,function(req,res){
    res.render("login.ejs")
})

app.post("/login", async function(req,res){
    let{email,password}=req.body
    let user=await usermodel.findOne({email:req.body.email})
    if(!user){
        return res.send("something went wrong")
    }
    const isMatch=await bcrypt.compare(password,user.password)
    if(!isMatch){
        return res.send("invalid credentials")
    }
    const payload={
        userid:user._id,
        email:email
    };

    let token=jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:"1d"})
    res.cookie("token",token,{
        httpOnly:true,
        secure:process.env.NODE_ENV=="production",
        sameSite:"strict"
    })
    res.status(200).redirect("./profile");

})


function isloggedin(req,res,next){
    const token=req.cookies.token
    if(!token){
        return res.redirect("/login")
    }
    try{
        const data=jwt.verify(token,process.env.JWT_SECRET)
        req.user=data
        next()
    }
    catch(err){
        res.clearCookie("token");
        return res.redirect("/login")

    }

}







app.get("/create",function(req,res){
    res.render("login.ejs")
})
app.get("/signup",function(req,res){
    res.render("signup.ejs")
})


app.post("/signup",async function(req,res){
    let user=await usermodel.findOne({email:req.body.email})
    if(user){
        return res.send("user is already created")
    }
    let{name,email,username,age,password}=req.body
    const salt=await bcrypt.genSalt(10)
    const hashedPassword=await bcrypt.hash(password,salt)
    let createduser=await usermodel.create({
        name,
        email,
        username,
        age,
        password:hashedPassword,
    })
    res.redirect("./")

})
function redirectIfLoggedin(req,res,next){
    const token=req.cookies.token
    if(!token){
        return next()
    }
    try{
        jwt.verify(token,process.env.JWT_SECRET);
        return res.redirect("/profile")
    }
    catch(err){
        return next()
    }
}


const PORT=process.env.PORT|| 3000;
app.listen(PORT,()=>{
    console.log(`Server runnin on ${PORT}`)
})
