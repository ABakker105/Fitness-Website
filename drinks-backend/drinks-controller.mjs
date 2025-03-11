// Controllers for the Drinks Collection

import 'dotenv/config';
import express from 'express';
import * as drinks from './drinks-model.mjs';

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/drinks', (req,res) => { 
    drinks.createDrink(
        req.body.drinkDate, 
        req.body.beverageType,
        req.body.numGlasses,
        req.body.caloriesDrank
        )
        .then(drink => {
            console.log(`"${drink.beverageType}" was added to the daily beverage intake collection.`);
            res.status(201).json(drink);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Bad Request: Failed to retrieve beverage.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/drinks', (req, res) => {
    drinks.retrieveDrinks()
        .then(drinks => { 
            if (drinks !== null) {
                console.log(`All beverages were retrieved from the collection.`);
                res.json(drinks);
            } else {
                res.status(404).json({ Error: 'Not Found: Beverages were not found on the server.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Bad Request: Failed to retrieve beverage.' });
        });
});


// RETRIEVE by ID controller
app.get('/drinks/:_id', (req, res) => {
    drinks.retrieveDrinkByID(req.params._id)
    .then(drink => { 
        if (drink !== null) {
            console.log(`"${drink.beverageType}" was retrieved, based on its ID.`);
            res.json(drink);
        } else {
            res.status(404).json({ Error: 'Not Found: Beverages were not found on the server.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Bad Request: Failed to retrieve beverage.' });
    });

});


// UPDATE controller ************************************
app.put('/drinks/:_id', (req, res) => {
    drinks.updateDrink(
        req.params._id, 
        req.body.drinkDate, 
        req.body.beverageType,
        req.body.numGlasses,
        req.body.caloriesDrank
    )
    .then(drink => {
        console.log(`"${drink.beverageType}" was updated.`);
        res.json(drink);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Bad Request: Failed to retrieve beverage.' });
    });
});


// DELETE Controller ******************************
app.delete('/drinks/:_id', (req, res) => {
    drinks.deleteDrinkById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`A beverage was deleted based on its ID.`);
                res.status(200).send({ Success: 'The beverage has been deleted successfully.' });
            } else {
                res.status(404).json({ Error: 'Not Found: Beverages were not found on the server.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Failed to delete beverage.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});