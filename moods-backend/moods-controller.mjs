// Controllers for the Moods Collection

import 'dotenv/config';
import express from 'express';
import * as moods from './moods-model.mjs';

const PORT = process.env.PORT || 3002;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/moods', (req,res) => { 
    moods.createMood(
        req.body.moodDate, 
        req.body.moodType, 
        req.body.moodDuration,
        req.body.moodDiary
        )
        .then(mood => {
            console.log(`"${mood.moodType}" was added to the moods collection.`);
            res.status(201).json(mood);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Bad Request: Failed to retrieve mood.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/moods', (req, res) => {
    moods.retrieveMoods()
        .then(moods => { 
            if (moods !== null) {
                console.log(`All moods were retrieved from the collection.`);
                res.json(moods);
            } else {
                res.status(404).json({ Error: 'Not Found: Moods were not found on the server.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Bad Request: Failed to retrieve Mood.' });
        });
});


// RETRIEVE by ID controller
app.get('/moods/:_id', (req, res) => {
    moods.retrieveMoodByID(req.params._id)
    .then(mood => { 
        if (mood !== null) {
            console.log(`"${mood.moodType}" was retrieved, based on its ID.`);
            res.json(mood);
        } else {
            res.status(404).json({ Error: 'Not Found: Moods were not found on the server.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Bad Request: Failed to retrieve mood.' });
    });

});


// UPDATE controller ************************************
app.put('/moods/:_id', (req, res) => {
    moods.updateMood(
        req.params._id, 
        req.body.moodDate, 
        req.body.moodType, 
        req.body.moodDuration,
        req.body.moodDiary
    )
    .then(mood => {
        console.log(`"${mood.moodType}" was updated.`);
        res.json(mood);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Bad Request: Failed to retrieve mood log.' });
    });
});


// DELETE Controller ******************************
app.delete('/moods/:_id', (req, res) => {
    moods.deleteMoodById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`A mood was deleted based on its ID.`);
                res.status(200).send({ Success: 'The mood has been deleted successfully.' });
            } else {
                res.status(404).json({ Error: 'Not Found: Moods were not found on the server.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Failed to delete workout.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});