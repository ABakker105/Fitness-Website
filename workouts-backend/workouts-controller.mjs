// Controllers for the Workouts Collection

import 'dotenv/config';
import express from 'express';
import * as workouts from './workouts-model.mjs';

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/workouts', (req,res) => { 
    workouts.createWorkout(
        req.body.date, 
        req.body.exerciseType, 
        req.body.duration,
        req.body.weight,
        req.body.caloriesBurned
        )
        .then(workout => {
            console.log(`"${workout.exerciseType}" was added to the workouts collection.`);
            res.status(201).json(workout);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Bad Request: Failed to retrieve workout.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/workouts', (req, res) => {
    workouts.retrieveWorkouts()
        .then(workouts => { 
            if (workouts !== null) {
                console.log(`All workouts were retrieved from the collection.`);
                res.json(workouts);
            } else {
                res.status(404).json({ Error: 'Not Found: Workouts were not found on the server.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Bad Request: Failed to retrieve workout.' });
        });
});


// RETRIEVE by ID controller
app.get('/workouts/:_id', (req, res) => {
    workouts.retrieveWorkoutByID(req.params._id)
    .then(workout => { 
        if (workout !== null) {
            console.log(`"${workout.exerciseType}" was retrieved, based on its ID.`);
            res.json(workout);
        } else {
            res.status(404).json({ Error: 'Not Found: Workouts were not found on the server.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Bad Request: Failed to retrieve workout.' });
    });

});


// UPDATE controller ************************************
app.put('/workouts/:_id', (req, res) => {
    workouts.updateWorkout(
        req.params._id, 
        req.body.date, 
        req.body.exerciseType, 
        req.body.duration,
        req.body.weight,
        req.body.caloriesBurned
    )
    .then(workout => {
        console.log(`"${workout.exerciseType}" was updated.`);
        res.json(workout);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Bad Request: Failed to retrieve workout.' });
    });
});


// DELETE Controller ******************************
app.delete('/workouts/:_id', (req, res) => {
    workouts.deleteWorkoutById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`A workout was deleted based on its ID.`);
                res.status(200).send({ Success: 'The workout has been deleted successfully.' });
            } else {
                res.status(404).json({ Error: 'Not Found: Workouts were not found on the server.' });
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