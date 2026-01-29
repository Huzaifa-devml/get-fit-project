const mongoose=require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/fitness")

const userSchema=mongoose.Schema({
    name:String,
    username:String,
    email:String,
    password:String,
    age:Number,
    workouts:[
        {
            name: {
        type: String,
        required: true, // Exercise name (e.g., Bench Press, Squats)
        trim: true,
      },
      description: {
        type: String,
        default: "", // Optional description of the exercise
      },
      equipment: {
        type: String,
        default: "Bodyweight", // Equipment required (e.g., Dumbbell, Barbell, Machine)
      },
      sets: {
        type: Number,
        default: 3, // Default number of sets
      },
      reps: {
        type: Number,
        default: 12, // Default number of reps
      },
      image: {
        type: String,
        default: "", // Optional image for each exercise
      },

        },
    ],
})

module.exports=mongoose.model("user",userSchema);