import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const MoodAdd = () => {
    const [moodDate, setMoodDate] = useState('');
    const [moodType, setMoodType] = useState('');
    const [moodDuration, setMoodDuration] = useState('');
    const [moodDiary, setMoodDiary] = useState('');

    const redirect = useNavigate();

    const addMood = async (event) => {
        event.preventDefault();
        const newMood = { moodDate, moodType, moodDuration, moodDiary };
        try {
            const response = await fetch('/moods', {
                method: 'post',
                body: JSON.stringify(newMood),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.status === 201) {
                alert(`Mood was successfully added!`);
                redirect("/moodsPage");
            } else {
                alert(`Failed to add mood: ${response.status}`);
            }
        } catch (error) {
            alert(`Error adding mood: ${response.status}`);
        }
    };

    return (
        <>
            <h2>Log your moods here!</h2>
            <article>
                <p>This form is used to add your moods over time. Please fill in the text boxes below to log your mood. When you are done, click the "Add Mood" button to add your current mood to your collection.</p>
                <form id="" onSubmit={addMood} >
                    <table>
                        <caption>Add Mood:</caption>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Mood Type</th>
                                <th>Duration (mins)</th>
                                <th>Journal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <label htmlFor="moodDate">Date:</label>
                                    <input
                                        type="date"
                                        value={moodDate}
                                        placeholder="What day did you experience this mood?"
                                        onChange={e => setMoodDate(e.target.value)}
                                        id="moodDate"
                                        required />
                                </td>
                                <td>
                                    <label htmlFor="moodType">Mood Type:</label>
                                    <input 
                                        type="text"
                                        value={moodType}
                                        placeholder="What type of mood were you experiencing?"
                                        onChange={e => setMoodType(e.target.value)}
                                        id="moodType"
                                        required />
                                </td>
                                <td>
                                    <label htmlFor="MoodDuration">Duration (Mins):</label>
                                    <input 
                                        type="number"
                                        value={moodDuration}
                                        placeholder="How long did you feel like this?"
                                        onChange={e => setMoodDuration(e.target.value)}
                                        id="moodDuration"
                                        required />
                                </td>
                                <td>
                                    <label htmlFor="moodDiary">Journal:</label>
                                    <input
                                        type="text"
                                        value={moodDiary}
                                        placeholder="Explain why you felt this way..."
                                        onChange={e => setMoodDiary(e.target.value)}
                                        id="moodDiary"
                                        required />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="submit">
                                        <button type="submit" id="submit">Add Mood</button>
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

export default MoodAdd;