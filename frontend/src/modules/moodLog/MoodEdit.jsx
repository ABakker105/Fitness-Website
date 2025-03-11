import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const MoodEdit = ( { MoodToEdit } ) => {
    const [moodDate, setMoodDate] = useState(MoodToEdit.moodDate);
    const [moodType, setMoodType] = useState(MoodToEdit.moodType);
    const [moodDuration, setMoodDuration] = useState(MoodToEdit.moodDuration);
    const [moodDiary, setMoodDiary] = useState(MoodToEdit.moodDiary);

    const redirect = useNavigate();

    const editMood = async () => {
        const response = await fetch(`/moods/${MoodToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                moodDate: moodDate, 
                moodType: moodType, 
                moodDuration: moodDuration,
                moodDiary: moodDiary
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Your mood was successfully updated!`);
        } else {
            const errMessage = await response.json();
            alert(`Failed to update mood: ${response.status}. ${errMessage.Error}`);
        }
        redirect("/moodLogPage");
    };

    return (
        <>
            <h2>Edit Mood</h2>
            <article>
                <p>This form is used to edit a mood log. Please click in the text boxes below to edit the mood. When you are done, click the "Save Edit" button to save your changes.</p>
                <table>
                    <caption>Edit this Mood:</caption>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Mood Type</th>
                            <th>Duration (Mins)</th>
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
                                    required 
                                />
                            </td>
                            <td>
                                <label htmlFor="moodType">Mood Type:</label>
                                    <input 
                                        type="text"
                                        value={moodType}
                                        placeholder="What type of mood were you experiencing?"
                                        onChange={e => setMoodType(e.target.value)}
                                        id="MoodType"
                                        required 
                                />
                            </td>
                            <td>
                            <label htmlFor="moodDuration">Duration (Mins):</label>
                                    <input 
                                        type="number"
                                        value={moodDuration}
                                        placeholder="How long did you feel like this?"
                                        onChange={e => setMoodDuration(e.target.value)}
                                        id="moodDuration"
                                        required 
                                />      
                            </td>
                            <td>
                            <label htmlFor="moodDiary">Journal:</label>
                                    <input
                                        type="text"
                                        value={moodDiary}
                                        placeholder="Explain why you felt this way..."
                                        onChange={e => setMoodDiary(e.target.value)}
                                        id="moodDiary"
                                        required 
                                />
                            </td>
                            <td>
                                <label htmlFor="submit">
                                    <button type="submit" id="submit" onClick={editMood}>Save Edit</button>
                                </label>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </>
    );
};

export default MoodEdit;