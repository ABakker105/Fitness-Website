import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const WorkoutAdd = () => {
    const [date, setDate] = useState('');
    const [exerciseType, setExerciseType] = useState('');
    const [duration, setDuration] = useState('');
    const [weight, setWeight] = useState('');
    const [caloriesBurned, setCaloriesBurned] = useState('');

    const redirect = useNavigate();

    const addWorkout = async (event) => {
        event.preventDefault();
        const newWorkout = { date, exerciseType, duration, weight, caloriesBurned };
        try {
            const response = await fetch('/workouts', {
                method: 'post',
                body: JSON.stringify(newWorkout),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.status === 201) {
                alert(`Workout was successfully added!`);
                redirect("/workoutsPage");
            } else {
                alert(`Failed to add workout: ${response.status}`);
            }
        } catch (error) {
            alert(`Error adding workout: ${response.status}`);
        }
    };

    return (
        <>
            <h2>Log your workout sessions here!</h2>
            <article>
                <p>This form is used to add workout sessions. Please fill in the text boxes below to log your workout session. When you are done, click the "Add workout session" button to add the workout session to your collection.</p>
                <form id="" onSubmit={addWorkout} >
                    <table>
                        <caption>Add Workout Session:</caption>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Exercise Type</th>
                                <th>Duration (Mins)</th>
                                <th>weight (lbs)</th>
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
                                        required />
                                </td>
                                <td>
                                    <label htmlFor="exerciseType">Exercise Type:</label>
                                    <input 
                                        type="text"
                                        value={exerciseType}
                                        placeholder="What type of exercise did you do?"
                                        onChange={e => setExerciseType(e.target.value)}
                                        id="exerciseType"
                                        required />
                                </td>
                                <td>
                                    <label htmlFor="duration">Duration (Mins):</label>
                                    <input 
                                        type="number"
                                        value={duration}
                                        placeholder="How long was your workout?"
                                        onChange={e => setDuration(e.target.value)}
                                        id="duration"
                                        required />
                                </td>
                                <td>
                                    <label htmlFor="weight">Weight (lbs):</label>
                                    <input
                                        type="number"
                                        value={weight}
                                        placeholder="How much do you weigh?"
                                        onChange={e => setWeight(e.target.value)}
                                        id="weight"
                                        required />
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
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="submit">
                                        <button type="submit" id="submit">Add workout session</button>
                                    </label>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </article>
        </>
    );
}

export default WorkoutAdd;