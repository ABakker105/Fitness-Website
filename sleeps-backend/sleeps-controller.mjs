// Controllers for the Sleeps Collection

import 'dotenv/config';
import express from 'express';
import * as sleeps from './sleeps-model.mjs';

const PORT = process.env.PORT || 3003;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/sleeps', (req,res) => { 
    sleeps.createSleep(
        req.body.sleepDate, 
        req.body.bedTime, 
        req.body.wakeTime,
        req.body.hoursSlept,
        req.body.sleepDiary
        )
        .then(sleep => {
            console.log(`"${sleep.sleepDate}" was added to the sleeps collection.`);
            res.status(201).json(sleep);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Bad Request: Failed to retrieve sleep.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/sleeps', (req, res) => {
    sleeps.retrieveSleeps()
        .then(sleeps => { 
            if (sleeps !== null) {
                console.log(`All sleeps were retrieved from the collection.`);
                res.json(sleeps);
            } else {
                res.status(404).json({ Error: 'Not Found: Sleeps were not found on the server.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Bad Request: Failed to retrieve sleep.' });
        });
});


// RETRIEVE by ID controller
app.get('/sleeps/:_id', (req, res) => {
    sleeps.retrieveSleepByID(req.params._id)
    .then(sleep => { 
        if (sleep !== null) {
            console.log(`"${sleep.sleepDate}" was retrieved, based on its ID.`);
            res.json(sleep);
        } else {
            res.status(404).json({ Error: 'Not Found: Sleeps were not found on the server.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Bad Request: Failed to retrieve sleep.' });
    });

});


// UPDATE controller ************************************
app.put('/sleeps/:_id', (req, res) => {
    sleeps.updateSleep(
        req.params._id, 
        req.body.sleepDate, 
        req.body.bedTime, 
        req.body.wakeTime,
        req.body.hoursSlept,
        req.body.sleepDiary
    )
    .then(sleep => {
        console.log(`"${sleep.sleepDate}" was updated.`);
        res.json(sleep);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Bad Request: Failed to retrieve sleep.' });
    });
});


// DELETE Controller ******************************
app.delete('/sleeps/:_id', (req, res) => {
    sleeps.deleteSleepById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`A sleep was deleted based on its ID.`);
                res.status(200).send({ Success: 'The sleep log has been deleted successfully.' });
            } else {
                res.status(404).json({ Error: 'Not Found: Sleep logs were not found on the server.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Failed to delete sleep.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});