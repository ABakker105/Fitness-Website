import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MoodList from './MoodList';
import { Link } from 'react-router-dom';
import { IoMdAddCircle } from "react-icons/io";

function MoodLogPage( { setMood }) {
    const redirect = useNavigate();

    const [moods, setMoods] = useState([]);

    // Retrieves all mood logs
    const loadMoods = async () => {
        const response = await fetch('/moods');
        const moods = await response.json();
        setMoods(moods);
    }

    const onEditMood = async mood => {
        setMood(mood);
        redirect("/moods/update");
    }

    // Deletes a mood log
    const onDeleteMood = async _id => {
        const confirmDeletion = window.confirm("Are you sure you want to permanently delete this mood log?");
        if (confirmDeletion) {
            const response = await fetch(`/moods/${_id}`, { method: 'DELETE' });
            if (response.status === 200) {
                const getResponse = await fetch('/moods');
                const moods = await getResponse.json();
                setMoods(moods);
            } else {
                console.error(`Failed to delete the mood log with ID: ${_id}, and status code: 
                ${response.status}`)
            }
          }
      };

      useEffect(() => {
        loadMoods();
     }, []);

    return (
    <>
     <h2>Mood Log Page</h2>
    <article>
        <p>Welcome to the Mood Log Page! Here you can add, edit, and delete your moods.</p>

        <Link to="/moods/create"><i><IoMdAddCircle /></i>Add Mood</Link>

        <MoodList
            moods={moods}
            onEdit={onEditMood}
            onDelete={onDeleteMood}
            />
        </article>
        </>
        );
    }
    export default MoodLogPage;   