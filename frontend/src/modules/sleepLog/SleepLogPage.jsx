import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SleepList from './SleepList';
import { Link } from 'react-router-dom';
import { IoMdAddCircle } from "react-icons/io";

function SleepLogPage( { setSleep }) {
    const redirect = useNavigate();

    const [sleeps, setSleeps] = useState([]);

    // Retrieves all sleeps logs
    const loadSleeps = async () => {
        const response = await fetch('/sleeps');
        const sleeps = await response.json();
        setSleeps(sleeps);
    }

    const onEditSleep = async sleep => {
        setSleep(sleep);
        redirect("/sleeps/update");
    }

    // Deletes a sleep log.
    const onDeleteSleep = async _id => {
        const confirmDeletion = window.confirm("Are you sure you want to permanently delete this sleep log?");
        if (confirmDeletion) {
            const response = await fetch(`/sleeps/${_id}`, { method: 'DELETE' });
            if (response.status === 200) {
                const getResponse = await fetch('/sleeps');
                const sleeps = await getResponse.json();
                setSleeps(sleeps);
            } else {
                console.error(`Failed to delete the sleep log with ID: ${_id}, and status code: 
                ${response.status}`)
            }
          }
      };

      useEffect(() => {
        loadSleeps();
     }, []);

    return (
    <>
     <h2>Sleep Log Page</h2>
    <article>
        <p>Welcome to the Sleep Log Page! Here you can add, edit, and delete your sleep logs.</p>

        <Link to="/sleeps/create"><i><IoMdAddCircle /></i>Add Sleep</Link>

        <SleepList
            sleeps={sleeps}
            onEdit={onEditSleep}
            onDelete={onDeleteSleep}
            />
        </article>
        </>
        );
    }
    export default SleepLogPage;   