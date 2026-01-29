const mongoose = require("mongoose");
const WorkoutModel = require("../models/workoutModels"); // adjust path if needed

async function seedWorkouts() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/fitness");

    const workouts = [
      {
        bodyPart: "Back",
        exercises: [
          {
            name: "Pull Ups",
            description: "Bodyweight pulling exercise targeting lats, traps, and core for strength, posture, and endurance.",
            equipment: "Pull-up Bar",
            sets: 3,
            reps: 12,
            image: "../images/pullup.jpg"
          },
          {
            name: "Deadlift",
            description: "Compound lift engaging lower back, traps, glutes, hamstrings, and grip, improving strength and posture.",
            equipment: "Barbell",
            sets: 4,
            reps: 8,
            image: "/images/deadlift.jpg"
          },
          {
            name: "Barbell Row",
            description: "Strengthens middle back muscles including lats and rhomboids, enhancing pulling power and posture control.",
            equipment: "Barbell",
            sets: 3,
            reps: 10,
            image: "/images/barbellrow.jpg"
          },
          {
            name: "Seated Cable Row",
            description: "Targets mid-back using controlled pulling motion, building muscular endurance, balance, and spinal alignment.",
            equipment: "Cable Machine",
            sets: 3,
            reps: 12,
            image: "/images/cablelrow.jpg"
          },
          {
            name: "Lat Pulldown",
            description: "Mimics pull-up movement, widening lats and strengthening back muscles for upper body pulling power.",
            equipment: "Lat Pulldown Machine",
            sets: 3,
            reps: 12,
            image: "/images/latpulldown.jpg"
          },
          {
            name: "Single Arm Dumbbell Row",
            description: "Isolates one side of back, enhancing lats, rhomboids, and stabilizing muscles for better symmetry.",
            equipment: "Dumbbell",
            sets: 3,
            reps: 12,
            image: "/images/singlearmdumbellrow.jpg"
          },
          {
            name: "T-Bar Row",
            description: "Builds mid-back thickness while strengthening traps, rhomboids, and lats, improving posture and stability.",
            equipment: "T-Bar Machine",
            sets: 3,
            reps: 10,
            image: "/images/tbarrow.jog.jpg"
          },
          {
            name: "Face Pulls",
            description: "Strengthens rear delts, traps, and rhomboids, promoting shoulder health and improving overall posture alignment.",
            equipment: "Cable Machine",
            sets: 3,
            reps: 15,
            image: "/images/facepulls.jpg"
          }
        ]
      },
      {
        bodyPart: "Chest",
        exercises: [
          {
            name: "Bench Press",
            description: "Classic chest builder strengthening pecs, shoulders, and triceps, improving pushing strength and muscle mass.",
            equipment: "Barbell",
            sets: 4,
            reps: 8,
            image: "/images/benchpress.jpg"
          },
          {
            name: "Incline Dumbbell Press",
            description: "Targets upper chest while also engaging shoulders and triceps, improving aesthetics and pressing strength.",
            equipment: "Dumbbells",
            sets: 3,
            reps: 10,
            image: "/images/inclinedumbellpress.jpg"
          },
          {
            name: "Push Ups",
            description: "Bodyweight exercise targeting chest, shoulders, and triceps, improving muscular endurance and overall core stability.",
            equipment: "Bodyweight",
            sets: 3,
            reps: 20,
            image: "/images/pushups.jpg"
          },
          {
            name: "Chest Fly",
            description: "Isolates chest muscles using wide arc movement, improving definition, flexibility, and pectoral muscle activation.",
            equipment: "Dumbbells",
            sets: 3,
            reps: 12,
            image: "/images/chestfly.jpg"
          },
          {
            name: "Incline Bench Press",
            description: "Targets upper chest muscles and shoulders, promoting balanced growth and stronger upper pressing power.",
            equipment: "Barbell",
            sets: 3,
            reps: 8,
            image: "/images/inclinebenchpress.jpg"
          },
          {
            name: "Cable Crossover",
            description: "Provides constant tension on chest muscles, enhancing definition, endurance, and muscle activation throughout movement.",
            equipment: "Cable Machine",
            sets: 3,
            reps: 15,
            image: "/images/cablecrossover.jog.jpg"
          },
          {
            name: "Decline Bench Press",
            description: "Targets lower chest muscles, improving strength, size, and balance in overall pectoral development efficiently.",
            equipment: "Barbell",
            sets: 3,
            reps: 8,
            image: "/images/declinebenchpress.jpg"
          },
          {
            name: "Dips",
            description: "Strengthens lower chest and triceps, improving pressing strength and endurance using bodyweight resistance training.",
            equipment: "Parallel Bars",
            sets: 3,
            reps: 12,
            image: "/images/dips.jpg"
          }
        ]
      },
      {
        bodyPart: "Shoulder",
        exercises: [
          {
            name: "Overhead Press",
            description: "Builds strong shoulders and triceps, engaging deltoids, traps, and core for stability and strength.",
            equipment: "Barbell",
            sets: 3,
            reps: 8,
            image: "/images/overheadpress.jog.jpg"
          },
          {
            name: "Dumbbell Shoulder Press",
            description: "Strengthens deltoids and stabilizers, building balanced shoulder muscles with independent arm pressing motion.",
            equipment: "Dumbbells",
            sets: 3,
            reps: 10,
            image: "/images/shoulderdumbellpress.jpg"
          },
          {
            name: "Lateral Raises",
            description: "Isolates side deltoids, creating wider shoulders and enhancing aesthetics by targeting smaller stabilizing muscles.",
            equipment: "Dumbbells",
            sets: 3,
            reps: 15,
            image: "/images/lateralraises.jpg"
          },
          {
            name: "Front Raises",
            description: "Strengthens anterior deltoids, enhancing shoulder definition and improving performance in pressing exercises effectively.",
            equipment: "Dumbbells",
            sets: 3,
            reps: 12,
            image: "/images/frontraises.jpg"
          },
          {
            name: "Arnold Press",
            description: "Variation of dumbbell press engaging all deltoid heads, improving shoulder growth, strength, and stability.",
            equipment: "Dumbbells",
            sets: 3,
            reps: 10,
            image: "/images/arnoldpress.jpg"
          },
          {
            name: "Face Pulls",
            description: "Strengthens rear delts and traps, improving posture and reducing risk of shoulder injuries effectively.",
            equipment: "Cable Machine",
            sets: 3,
            reps: 15,
            image: "/images/facepulls.jpg"
          },
          {
            name: "Upright Rows",
            description: "Builds traps and deltoids, improving upper body strength and enhancing aesthetics with barbell pulling.",
            equipment: "Barbell",
            sets: 3,
            reps: 12,
            image: "/images/uprightrows.jpg"
          },
          {
            name: "Shrugs",
            description: "Targets trapezius muscles, building neck and shoulder strength, improving posture and carrying power efficiently.",
            equipment: "Dumbbells",
            sets: 3,
            reps: 15,
            image: "/images/shrugs.jpg"
          }
        ]
      },
      {
        bodyPart: "Biceps",
        exercises: [
          {
            name: "Barbell Curl",
            description: "Classic mass builder targeting biceps, improving arm size, strength, and overall pulling power effectively.",
            equipment: "Barbell",
            sets: 3,
            reps: 12,
            image: "/images/barbell.jpg"
          },
          {
            name: "Dumbbell Curl",
            description: "Strengthens biceps with alternating arm curls, enhancing symmetry and control in arm development effectively.",
            equipment: "Dumbbells",
            sets: 3,
            reps: 12,
            image: "/images/dumbellcurl.png"
          },
          {
            name: "Hammer Curl",
            description: "Targets brachialis and forearms along with biceps, improving grip and overall arm thickness development.",
            equipment: "Dumbbells",
            sets: 3,
            reps: 12,
            image: "/images/hammercurl.png"
          },
          {
            name: "Preacher Curl",
            description: "Isolates biceps with strict form, eliminating momentum, and building peak contraction for muscle growth.",
            equipment: "Preacher Bench",
            sets: 3,
            reps: 10,
            image: "/images/preachercurl.jpg"
          },
          {
            name: "Concentration Curl",
            description: "Focuses on one arm at a time, maximizing isolation, contraction, and balanced bicep muscle growth.",
            equipment: "Dumbbell",
            sets: 3,
            reps: 12,
            image: "/images/concentrationcurl.jpg"
          },
          {
            name: "Cable Curl",
            description: "Provides constant resistance on biceps, improving endurance, muscle definition, and full-range contraction effectively.",
            equipment: "Cable Machine",
            sets: 3,
            reps: 15,
            image: "/images/cablecurl.png"
          },
          {
            name: "Incline Dumbbell Curl",
            description: "Stretches biceps under tension, increasing muscle activation and strength through controlled curling movement effectively.",
            equipment: "Dumbbells",
            sets: 3,
            reps: 12,
            image: "/images/inclinedumbellcurl.jpg"
          },
          {
            name: "Zottman Curl",
            description: "Works biceps and forearms simultaneously, combining supination and pronation for balanced arm development effectively.",
            equipment: "Dumbbells",
            sets: 3,
            reps: 12,
            image: "/images/zottmancurl.png"
          }
        ]
      },
      {
        bodyPart: "Triceps",
        exercises: [
          {
            name: "Close Grip Bench Press",
            description: "Compound press emphasizing triceps strength while also engaging chest and shoulders for balanced growth.",
            equipment: "Barbell",
            sets: 3,
            reps: 10,
            image: "/images/closegripbenchpress.jpg"
          },
          {
            name: "Tricep Dips",
            description: "Bodyweight movement targeting triceps, improving strength and endurance with progressive overload options available.",
            equipment: "Parallel Bars",
            sets: 3,
            reps: 12,
            image: "/images/tricepsdips.png"
          },
          {
            name: "Overhead Tricep Extension",
            description: "Stretches triceps fully, strengthening long head and building size with controlled extension and contraction.",
            equipment: "Dumbbell",
            sets: 3,
            reps: 12,
            image: "/images/overheadextension.jpg"
          },
          {
            name: "Skull Crushers",
            description: "Lying extension exercise isolating triceps, improving arm size, strength, and definition effectively over time.",
            equipment: "EZ Bar",
            sets: 3,
            reps: 12,
            image: "/images/skullcrushers.jpg"
          },
          {
            name: "Rope Pushdown",
            description: "Provides constant cable resistance on triceps, enhancing strength, endurance, and arm muscle tone effectively.",
            equipment: "Cable Machine",
            sets: 3,
            reps: 15,
            image: "/images/ropepushdown.jpg"
          },
          {
            name: "Diamond Push Ups",
            description: "Bodyweight push-up variation focusing on triceps, enhancing endurance, arm strength, and muscle definition effectively.",
            equipment: "Bodyweight",
            sets: 3,
            reps: 15,
            image: "/images/diamondpushups.jpg"
          },
          {
            name: "Kickbacks",
            description: "Isolates triceps with controlled backward extension, strengthening arms and improving muscle shape effectively.",
            equipment: "Dumbbell",
            sets: 3,
            reps: 12,
            image: "/images/kickbacks.jpg"
          },
          {
            name: "Bench Dips",
            description: "Simple bodyweight movement for triceps development, improving endurance and strength with minimal equipment requirements.",
            equipment: "Bench",
            sets: 3,
            reps: 15,
            image: "/images/benchdips.jpg"
          }
        ]
      },
      {
        bodyPart: "Legs",
        exercises: [
          {
            name: "Squats",
            description: "King of leg exercises, building quads, hamstrings, glutes, and overall lower body strength effectively.",
            equipment: "Barbell",
            sets: 4,
            reps: 10,
            image: "/images/squats.jpg"
          },
          {
            name: "Lunges",
            description: "Targets quads, hamstrings, and glutes, improving balance, strength, and muscle symmetry across both legs.",
            equipment: "Dumbbells",
            sets: 3,
            reps: 12,
            image: "/images/lunges.jpg"
          },
          {
            name: "Leg Press",
            description: "Builds quad and glute strength safely, providing controlled heavy load training with reduced injury risk.",
            equipment: "Leg Press Machine",
            sets: 3,
            reps: 12,
            image: "/images/legpress.jpg"
          },
          {
            name: "Romanian Deadlift",
            description: "Strengthens hamstrings and glutes, improving hip mobility, flexibility, and lower back stability efficiently.",
            equipment: "Barbell",
            sets: 3,
            reps: 10,
            image: "/images/romaniandeadlift.jpg"
          },
          {
            name: "Calf Raises",
            description: "Targets calf muscles, improving ankle stability, lower leg strength, and overall balance for functional movement.",
            equipment: "Bodyweight/Dumbbells",
            sets: 3,
            reps: 20,
            image: "/images/calfraises.jpg"
          },
          {
            name: "Bulgarian Split Squats",
            description: "Single-leg squat variation developing quads, hamstrings, and glutes while improving balance and lower body stability.",
            equipment: "Dumbbells",
            sets: 3,
            reps: 12,
            image: "/images/bulgariansplitsquats.jpg"
          },
          {
            name: "Step Ups",
            description: "Functional movement strengthening legs, improving coordination, balance, and endurance with simple step platform exercise.",
            equipment: "Bench",
            sets: 3,
            reps: 12,
            image: "/images/stepsup.jpg"
          },
          {
            name: "Leg Curls",
            description: "Isolation exercise targeting hamstrings, enhancing strength, flexibility, and balance for lower body performance.",
            equipment: "Leg Curl Machine",
            sets: 3,
            reps: 12,
            image: "/images/legcurl.jpg"
          }
        ]
      }
    ];

    // Clear old data before inserting new
    await WorkoutModel.deleteMany({});
    console.log("Old workouts removed.");

    // Insert new workouts
    await WorkoutModel.insertMany(workouts);
    console.log("New workout data seeded!");
  } catch (error) {
    console.error("Error seeding workouts:", error);
  } finally {
    mongoose.connection.close();
  }
}

seedWorkouts();
