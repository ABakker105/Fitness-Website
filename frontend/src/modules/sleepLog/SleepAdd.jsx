import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const SleepAdd = () => {
    const [sleepDate, setSleepDate] = useState('');
    const [bedTime, setBedTime] = useState('');
    const [wakeTime, setWakeTime] = useState('');
    const [hoursSlept, setHoursSlept] = useState('');
    const [sleepDiary, setSleepDiary] = useState('');

    const redirect = useNavigate();

    const addSleep = async (event) => {
        event.preventDefault();
        const newSleep = { sleepDate, bedTime, wakeTime, hoursSlept, sleepDiary };
        try {
            const response = await fetch('/sleeps', {
                method: 'post',
                body: JSON.stringify(newSleep),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.status === 201) {
                alert(`Sleep was successfully added!`);
                redirect("/sleepsPage");
            } else {
                alert(`Failed to add sleep: ${response.status}`);
            }
        } catch (error) {
            alert(`Error adding sleep: ${response.status}`);
        }
    };

    return (
        <>
            <h2>Log your sleeps here!</h2>
            <article>
                <p>This form is used to add your sleeps over time. Please fill in the text boxes below to log your sleep. When you are done, click the "Add Sleep" button to add your rests to your sleep collection.</p>
                <form id="" onSubmit={addSleep} >
                    <table>
                        <caption>Add Sleep:</caption>
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
                                        required />
                                </td>
                                <td>
                                    <label htmlFor="bedTime">Bed Time:</label>
                                    <input 
                                        type="text"
                                        value={bedTime}
                                        placeholder="What time did you go to bed?"
                                        onChange={e => setBedTime(e.target.value)}
                                        id="bedTime"
                                        required />
                                </td>
                                <td>
                                    <label htmlFor="wakeTime">Wake Time:</label>
                                    <input 
                                        type="text"
                                        value={wakeTime}
                                        placeholder="What time did you wake up?"
                                        onChange={e => setWakeTime(e.target.value)}
                                        id="wakeTime"
                                        required />
                                </td>
                                <td>
                                    <label htmlFor="hoursSlept">Hours Slept:</label>
                                    <input 
                                        type="number"
                                        value={hoursSlept}
                                        placeholder="How many hrs of sleep did you get?"
                                        onChange={e => setHoursSlept(e.target.value)}
                                        id="hoursSlept"
                                        required />
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
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="submit">
                                        <button type="submit" id="submit">Add Sleep</button>
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

export default SleepAdd;