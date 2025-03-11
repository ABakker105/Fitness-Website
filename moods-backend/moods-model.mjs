// Models for the Moods Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.set('strictQuery', true);

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'Internal Server Error: A coding error occurred while connecting to the MongoDB server.' });
    } else  {
        console.log('Connection to the Moods database collection was successful.');
    }
});

// SCHEMA: Define the collection's schema.
const moodSchema = mongoose.Schema({
    moodDate:    { type: Date, required: true },
    moodType:     { type: String, required: true },
    moodDuration: { type: Number, required: true },
    moodDiary: { type: String, required: true }
});

// Compile the model from the schema 
// by defining the collection name "workouts".
const moods = mongoose.model('Mood', moodSchema);


// CREATE model *****************************************
const createMood = async (moodDate, moodType, moodDuration, moodDiary) => {
    const mood = new moods({ 
        moodDate: moodDate, 
        moodType: moodType, 
        moodDuration: moodDuration,
        moodDiary: moodDiary
    });
    return mood.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveMoods = async () => {
    const query = moods.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveMoodByID = async (_id) => {
    const query = moods.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteMoodById = async (_id) => {
    const result = await moods.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateMood = async (_id, moodDate, moodType, moodDuration, moodDiary) => {
    const result = await moods.replaceOne({_id: _id }, {
        moodDate: moodDate,
        moodType: moodType,
        moodDuration: moodDuration,
        moodDiary: moodDiary
    });
    return { 
        _id: _id, 
        moodDate: moodDate,
        moodType: moodType,
        moodDuration: moodDuration,
        moodDiary: moodDiary
    }
}

// EXPORT the variables for use in the controller file.
export { createMood, retrieveMoods, retrieveMoodByID, updateMood, deleteMoodById }