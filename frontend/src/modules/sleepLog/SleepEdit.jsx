import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const SleepEdit = ( { SleepToEdit } ) => {
    const [sleepDate, setSleepDate] = useState(SleepToEdit.sleepDate);
    const [bedTime, setBedTime] = useState(SleepToEdit.bedTime);
    const [wakeTime, setWakeTime] = useState(SleepToEdit.wakeTime);
    const [hoursSlept, setHoursSlept] = useState(SleepToEdit.hoursSlept);
    const [sleepDiary, setSleepDiary] = useState(SleepToEdit.sleepDiary);

    const redirect = useNavigate();

    const editSleep = async () => {
        const response = await fetch(`/sleeps/${SleepToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                sleepDate: sleepDate, 
                bedTime: bedTime, 
                wakeTime: wakeTime,
                hoursSlept: hoursSlept,
                sleepDiary: sleepDiary
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Your sleep log was successfully updated!`);
        } else {
            const errMessage = await response.json();
            alert(`Failed to update sleep log: ${response.status}. ${errMessage.Error}`);
        }
        redirect("/sleepLogPage");
    };

    return (
        <>
            <h2>Edit Sleep</h2>
            <article>
                <p>This form is used to edit a sleep log. Please click in the text boxes below to edit the sleep log. When you are done, click the "Save Edit" button to save your changes.</p>
                <table>
                    <caption>Edit this Sleep Log:</caption>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Bed Time</th>
                            <th>Wake Time</th>
                            <th>Hours Slept</th>
                            <th>(OPTIONAL) Journal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="sleepDate">Date:</label>
                                <input
                                    type="date"
                                    value={sleepDate}
                                    placeholder="What was the date of this rest?"
                                    onChange={e => setSleepDate(e.target.value)}
                                    id="sleepDate"
                                    required 
                                />
                            </td>
                            <td>
                                <label htmlFor="bedTime">Bed Time:</label>
                                    <input 
                                        type="text"
                                        value={bedTime}
                                        placeholder="What time did you go to bed?"
                                        onChange={e => setBedTime(e.target.value)}
                                        id="bedTime"
                                        required 
                                />
                            </td>
                            <td>
                            <label htmlFor="wakeTime">Wake Time:</label>
                                    <input 
                                        type="text"
                                        value={wakeTime}
                                        placeholder="What time did you wake up?"
                                        onChange={e => setWakeTime(e.target.value)}
                                        id="wakeTime"
                                        required 
                                />      
                            </td>
                            <td>
                            <label htmlFor="hoursSlept">Hours Slept:</label>
                                    <input 
                                        type="number"
                                        value={hoursSlept}
                                        placeholder="How many hrs of sleep did you get?"
                                        onChange={e => setHoursSlept(e.target.value)}
                                        id="hoursSlept"
                                        required 
                                />      
                            </td>
                            <td>
                            <label htmlFor="sleepDiary">Journal:</label>
                                    <input
                                        type="text"
                                        value={sleepDiary}
                                        placeholder="(OPTIONAL) You can explain the quality of your sleep here..."
                                        onChange={e => setSleepDiary(e.target.value)}
                                        id="sleepDiary"
                                        
                                />
                            </td>
                            <td>
                                <label htmlFor="submit">
                                    <button type="submit" id="submit" onClick={editSleep}>Save Edit</button>
                                </label>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </>
    );
};

export default SleepEdit;