const sampleWorkouts = [
  {
    bodyPart: "Chest",
    exercises: [
      {
        name: "Bench Press",
        description: "A compound exercise for chest using a barbell.",
        equipment: "Barbell",
        sets: 4,
        reps: 10,
        image: "",
      },
      {
        name: "Push-Ups",
        description: "Bodyweight exercise for chest and triceps.",
        equipment: "Bodyweight",
        sets: 3,
        reps: 15,
        image: "https://example.com/images/push-ups.jpg",
      },
    ],
  },
  {
    bodyPart: "Back",
    exercises: [
      {
        name: "Pull-Ups",
        description: "Great for lats and upper back strength.",
        equipment: "Bodyweight",
        sets: 3,
        reps: 8,
        image: "https://example.com/images/pull-ups.jpg",
      },
      {
        name: "Barbell Row",
        description: "Targets lats and traps.",
        equipment: "Barbell",
        sets: 4,
        reps: 12,
        image: "https://example.com/images/barbell-row.jpg",
      },
    ],
  },
  {
    bodyPart: "Legs",
    exercises: [
      {
        name: "Squats",
        description: "Basic leg exercise for strength and size.",
        equipment: "Barbell",
        sets: 4,
        reps: 12,
        image: "https://example.com/images/squats.jpg",
      },
      {
        name: "Lunges",
        description: "Works quads, glutes, and hamstrings.",
        equipment: "Bodyweight",
        sets: 3,
        reps: 10,
        image: "https://example.com/images/lunges.jpg",
      },
    ],
  },
  {
    bodyPart: "Shoulders",
    exercises: [
      {
        name: "Overhead Press",
        description: "Builds shoulder strength and size.",
        equipment: "Barbell",
        sets: 4,
        reps: 8,
        image: "https://example.com/images/overhead-press.jpg",
      },
      {
        name: "Lateral Raises",
        description: "Isolates the lateral delts.",
        equipment: "Dumbbell",
        sets: 3,
        reps: 15,
        image: "https://example.com/images/lateral-raises.jpg",
      },
    ],
  },
  {
    bodyPart: "Biceps",
    exercises: [
      {
        name: "Barbell Curl",
        description: "Classic bicep-building exercise.",
        equipment: "Barbell",
        sets: 3,
        reps: 12,
        image: "https://example.com/images/barbell-curl.jpg",
      },
      {
        name: "Hammer Curl",
        description: "Targets brachialis and forearms.",
        equipment: "Dumbbell",
        sets: 3,
        reps: 12,
        image: "https://example.com/images/hammer-curl.jpg",
      },
    ],
  },
  {
    bodyPart: "Triceps",
    exercises: [
      {
        name: "Tricep Dips",
        description: "Bodyweight exercise for triceps.",
        equipment: "Bodyweight",
        sets: 3,
        reps: 12,
        image: "https://example.com/images/tricep-dips.jpg",
      },
      {
        name: "Skull Crushers",
        description: "Isolates triceps using an EZ bar.",
        equipment: "EZ Bar",
        sets: 3,
        reps: 10,
        image: "https://example.com/images/skull-crushers.jpg",
      },
    ],
  },
  {
    bodyPart: "Abs",
    exercises: [
      {
        name: "Crunches",
        description: "Basic ab exercise for core strength.",
        equipment: "Bodyweight",
        sets: 3,
        reps: 20,
        image: "https://example.com/images/crunches.jpg",
      },
      {
        name: "Plank",
        description: "Isometric hold for core stability.",
        equipment: "Bodyweight",
        sets: 3,
        reps: 60, // seconds
        image: "https://example.com/images/plank.jpg",
      },
    ],
  },
  {
    bodyPart: "Forearms",
    exercises: [
      {
        name: "Wrist Curls",
        description: "Strengthens forearm flexors.",
        equipment: "Dumbbell",
        sets: 3,
        reps: 15,
        image: "https://example.com/images/wrist-curls.jpg",
      },
      {
        name: "Reverse Wrist Curls",
        description: "Strengthens forearm extensors.",
        equipment: "Barbell",
        sets: 3,
        reps: 15,
        image: "https://example.com/images/reverse-wrist-curls.jpg",
      },
    ],
  },
  {
    bodyPart: "Calves",
    exercises: [
      {
        name: "Standing Calf Raise",
        description: "Targets calf muscles.",
        equipment: "Bodyweight",
        sets: 4,
        reps: 20,
        image: "https://example.com/images/standing-calf-raise.jpg",
      },
      {
        name: "Seated Calf Raise",
        description: "Focuses on soleus muscle.",
        equipment: "Machine",
        sets: 4,
        reps: 15,
        image: "https://example.com/images/seated-calf-raise.jpg",
      },
    ],
  },
  {
    bodyPart: "Glutes",
    exercises: [
      {
        name: "Hip Thrusts",
        description: "Builds strong glutes and hamstrings.",
        equipment: "Barbell",
        sets: 4,
        reps: 12,
        image: "https://example.com/images/hip-thrusts.jpg",
      },
      {
        name: "Glute Bridge",
        description: "Bodyweight variation for glutes.",
        equipment: "Bodyweight",
        sets: 3,
        reps: 15,
        image: "https://example.com/images/glute-bridge.jpg",
      },
    ],
  },
];

module.exports = sampleWorkouts;
