const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  bodyPart: {
    type: String,
    required: true, // Body part name is mandatory (e.g., Chest, Back, Legs)
    trim: true,
  },
  exercises: [
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
});

const WorkoutModel = mongoose.model("Workout", workoutSchema);

module.exports = WorkoutModel;
