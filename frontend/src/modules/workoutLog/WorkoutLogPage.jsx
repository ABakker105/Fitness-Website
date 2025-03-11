import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import WorkoutList from './WorkoutList';
import { Link } from 'react-router-dom';
import { IoMdAddCircle } from "react-icons/io";

function WorkoutLogPage( { setWorkout }) {
    const redirect = useNavigate();

    const [workouts, setWorkouts] = useState([]);

    // Retrieves all workout logs
    const loadWorkouts = async () => {
        const response = await fetch('/workouts');
        const workouts = await response.json();
        setWorkouts(workouts);
    }

    const onEditWorkout = async workout => {
        setWorkout(workout);
        redirect("/workouts/update");
    }

    // Deletes a workout log
    const onDeleteWorkout = async _id => {
        const confirmDeletion = window.confirm("Are you sure you want to permanently delete this workout session?");
        if (confirmDeletion) {
            const response = await fetch(`/workouts/${_id}`, { method: 'DELETE' });
            if (response.status === 200) {
                const getResponse = await fetch('/workouts');
                const workouts = await getResponse.json();
                setWorkouts(workouts);
            } else {
                console.error(`Failed to delete the workout session with ID: ${_id}, and status code: 
                ${response.status}`)
            }
          }
      };

      useEffect(() => {
        loadWorkouts();
     }, []);

    return (
    <>
     <h2>Workout Log Page</h2>
    <article>
        <p>Welcome to the Workout Log Page! Here you can add, edit, and delete your workout sessions.</p>

        <Link to="/workouts/create"><i><IoMdAddCircle /></i>Add Workout</Link>

        <WorkoutList
            workouts={workouts}
            onEdit={onEditWorkout}
            onDelete={onDeleteWorkout}
            />
        </article>
        </>
        );
    }
    export default WorkoutLogPage;   