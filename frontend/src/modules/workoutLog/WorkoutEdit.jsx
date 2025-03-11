import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const WorkoutEdit = ( { WorkoutToEdit } ) => {
    const [date, setDate] = useState(WorkoutToEdit.date);
    const [exerciseType, setExerciseType] = useState(WorkoutToEdit.exerciseType);
    const [duration, setDuration] = useState(WorkoutToEdit.duration);
    const [weight, setWeight] = useState(WorkoutToEdit.weight);
    const [caloriesBurned, setCaloriesBurned] = useState(WorkoutToEdit.caloriesBurned);

    const redirect = useNavigate();

    const editWorkout = async () => {
        const response = await fetch(`/workouts/${WorkoutToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                date: date, 
                exerciseType: exerciseType, 
                duration: duration,
                weight: weight,
                caloriesBurned: caloriesBurned
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Workout session was successfully updated!`);
        } else {
            const errMessage = await response.json();
            alert(`Failed to update workout session: ${response.status}. ${errMessage.Error}`);
        }
        redirect("/workoutLogPage");
    };

    return (
        <>
            <h2>Edit Workout Session</h2>
            <article>
                <p>This form is used to edit a workout session. Please click in the text boxes below to edit the workout session. When you are done, click the "Save Edit" button to save your changes.</p>
                <table>
                    <caption>Edit this Workout Session:</caption>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Exercise Type</th>
                            <th>Duration (Mins)</th>
                            <th>Weight (lbs)</th>
                            <th># Calories Burned</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="date">Date:</label>
                                <input
                                    type="date"
                                    value={date}
                                    placeholder="What day did you workout?"
                                    onChange={e => setDate(e.target.value)}
                                    id="date"
                                    required 
                                />
                            </td>
                            <td>
                                <label htmlFor="exerciseType">Exercise Type:</label>
                                    <input 
                                        type="text"
                                        value={exerciseType}
                                        placeholder="What type of exercise did you do?"
                                        onChange={e => setExerciseType(e.target.value)}
                                        id="exerciseType"
                                        required 
                                />
                            </td>
                            <td>
                            <label htmlFor="duration">Duration:</label>
                                    <input 
                                        type="number"
                                        value={duration}
                                        placeholder="How long was your workout?"
                                        onChange={e => setDuration(e.target.value)}
                                        id="duration"
                                        required 
                                />      
                            </td>
                            <td>
                            <label htmlFor="weight">Weight:</label>
                                    <input
                                        type="number"
                                        value={weight}
                                        placeholder="How much do you weigh?"
                                        onChange={e => setWeight(e.target.value)}
                                        id="weight"
                                        required 
                                />
                            </td>
                            <td>
                            <label htmlFor="caloriesBurned"># Calories Burned:</label>
                                    <input 
                                        type="number"
                                        value={caloriesBurned}
                                        placeholder="How many calories did you burn?"
                                        onChange={e => setCaloriesBurned(e.target.value)}
                                        id="caloriesBurned"
                                        required />
                                </td>
                            <td>
                                <label htmlFor="submit">
                                    <button type="submit" id="submit" onClick={editWorkout}>Save Edit</button>
                                </label>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </>
    );
};

export default WorkoutEdit;