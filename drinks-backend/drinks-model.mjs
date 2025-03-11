// Models for the Drinks Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'Internal Server Error: A coding error occurred while connecting to the MongoDB server.' });
    } else  {
        console.log('Connection to the Drinks database collection was successful.');
    }
});

// SCHEMA: Define the collection's schema.
const drinkSchema = mongoose.Schema({
    drinkDate:    { type: Date, required: true },
    beverageType: { type: String, required: true },
    numGlasses: { type: Number, required: true},
    caloriesDrank: { type: Number, required: true}
});

// Compile the model from the schema 
// by defining the collection name "drinks".
const drinks = mongoose.model('Drink', drinkSchema);


// CREATE model *****************************************
const createDrink = async (drinkDate, beverageType, numGlasses, caloriesDrank) => {
    const drink = new drinks({ 
        drinkDate: drinkDate, 
        beverageType: beverageType, 
        numGlasses: numGlasses,
        caloriesDrank: caloriesDrank
    });
    return drink.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveDrinks = async () => {
    const query = drinks.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveDrinkByID = async (_id) => {
    const query = drinks.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteDrinkById = async (_id) => {
    const result = await drinks.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateDrink = async (_id, drinkDate, beverageType, numGlasses, caloriesDrank) => {
    const result = await drinks.replaceOne({_id: _id }, {
        drinkDate: drinkDate,
        beverageType: beverageType,
        numGlasses: numGlasses,
        caloriesDrank: caloriesDrank
    });
    return { 
        _id: _id, 
        drinkDate: drinkDate,
        beverageType: beverageType,
        numGlasses: numGlasses,
        caloriesDrank: caloriesDrank
    }
}

// EXPORT the variables for use in the controller file.
export { createDrink, retrieveDrinks, retrieveDrinkByID, updateDrink, deleteDrinkById }