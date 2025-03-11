// Models for the Sleeps Collection

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
        console.log('Connection to the Sleeps database collection was successful.');
    }
});

// SCHEMA: Define the collection's schema.
const sleepSchema = mongoose.Schema({
    sleepDate:    { type: Date, required: true },
    bedTime:     { type: String, required: true },
    wakeTime: { type: String, required: true },
    hoursSlept: { type: Number, required: true},
    sleepDiary: { type: String, required: false}
});

// Compile the model from the schema 
// by defining the collection name "sleeps".
const sleeps = mongoose.model('Sleep', sleepSchema);


// CREATE model *****************************************
const createSleep = async (sleepDate, bedTime, wakeTime, hoursSlept, sleepDiary) => {
    const sleep = new sleeps({ 
        sleepDate: sleepDate, 
        bedTime: bedTime, 
        wakeTime: wakeTime, 
        hoursSlept: hoursSlept,
        sleepDiary: sleepDiary
    });
    return sleep.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveSleeps = async () => {
    const query = sleeps.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveSleepByID = async (_id) => {
    const query = sleeps.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteSleepById = async (_id) => {
    const result = await sleeps.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateSleep = async (_id, sleepDate, bedTime, wakeTime, hoursSlept, sleepDiary) => {
    const result = await sleeps.replaceOne({_id: _id }, {
        sleepDate: sleepDate,
        bedTime: bedTime,
        wakeTime: wakeTime,
        hoursSlept: hoursSlept,
        sleepDiary: sleepDiary
    });
    return { 
        _id: _id, 
        sleepDate: sleepDate,
        bedTime: bedTime,
        wakeTime: wakeTime,
        hoursSlept: hoursSlept,
        sleepDiary: sleepDiary
    }
}

// EXPORT the variables for use in the controller file.
export { createSleep, retrieveSleeps, retrieveSleepByID, updateSleep, deleteSleepById }