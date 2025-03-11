// Models for the Workouts Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.set('strictQuery', true);

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true, useUnifiedTopology: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'Internal Server Error: A coding error occurred while connecting to the MongoDB server.' });
    } else  {
        console.log('Connection to the Workouts database collection was successful.');
    }
});

// SCHEMA: Define the collection's schema.
const workoutSchema = mongoose.Schema({
	date:    { type: Date, required: true },
	exerciseType:     { type: String, required: true },
	duration: { type: Number, required: true },
    weight: { type: Number, required: true},
    caloriesBurned: { type: Number, required: true}
});

// Compile the model from the schema 
// by defining the collection name "workouts".
const workouts = mongoose.model('Workout', workoutSchema);


// CREATE model *****************************************
const createWorkout = async (date, exerciseType, duration, weight, caloriesBurned) => {
    const workout = new workouts({ 
        date: date, 
        exerciseType: exerciseType, 
        duration: duration, 
        weight: weight,
        caloriesBurned: caloriesBurned
    });
    return workout.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveWorkouts = async () => {
    const query = workouts.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveWorkoutByID = async (_id) => {
    const query = workouts.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteWorkoutById = async (_id) => {
    const result = await workouts.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateWorkout = async (_id, date, exerciseType, duration, weight, caloriesBurned) => {
    const result = await workouts.replaceOne({_id: _id }, {
        date: date,
        exerciseType: exerciseType,
        duration: duration,
        weight: weight,
        caloriesBurned: caloriesBurned
    });
    return { 
        _id: _id, 
        date: date,
        exerciseType: exerciseType,
        duration: duration,
        weight: weight,
        caloriesBurned: caloriesBurned
    }
}

// EXPORT the variables for use in the controller file.
export { createWorkout, retrieveWorkouts, retrieveWorkoutByID, updateWorkout, deleteWorkoutById }