import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const DrinkEdit = ( { DrinkToEdit } ) => {
    const [drinkDate, setDrinkDate] = useState(DrinkToEdit.drinkDate);
    const [beverageType, setBeverageType] = useState(DrinkToEdit.beverageType);
    const [numGlasses, setNumGlasses] = useState(DrinkToEdit.numGlasses);
    const [caloriesDrank, setCaloriesDrank] = useState(DrinkToEdit.caloriesDrank);

    const redirect = useNavigate();

    const editDrink = async () => {
        const response = await fetch(`/drinks/${DrinkToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                drinkDate: drinkDate, 
                beverageType: beverageType, 
                numGlasses: numGlasses,
                caloriesDrank: caloriesDrank,
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Beverage was successfully updated!`);
        } else {
            const errMessage = await response.json();
            alert(`Failed to update beverage: ${response.status}. ${errMessage.Error}`);
        }
        redirect("/drinkLogPage");
    };

    return (
        <>
            <h2>Edit Drink</h2>
            <article>
                <p>This form is used to edit a beverage log. Please click in the text boxes below to edit the beverage log. When you are done, click the "Save Edit" button to save your changes.</p>
                <table>
                    <caption>Edit this Drink:</caption>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Beverage Type</th>
                            <th># Cups</th>
                            <th># Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="drinkDate">Date:</label>
                                <input
                                    type="date"
                                    value={drinkDate}
                                    placeholder="What day did you have this beverage?"
                                    onChange={e => setDrinkDate(e.target.value)}
                                    id="drinkDate"
                                    required 
                                />
                            </td>
                            <td>
                                <label htmlFor="beverageType">Beverage Type:</label>
                                    <input 
                                        type="text"
                                        value={beverageType}
                                        placeholder="What type of beverage did you have?"
                                        onChange={e => setBeverageType(e.target.value)}
                                        id="beverageType"
                                        required 
                                />
                            </td>
                            <td>
                            <label htmlFor="numGlasses"># Cups:</label>
                                    <input 
                                        type="number"
                                        value={numGlasses}
                                        placeholder="How many cups of this beverage did you have?"
                                        onChange={e => setNumGlasses(e.target.value)}
                                        id="numGlasses"
                                        required 
                                />      
                            </td>
                            <td>
                            <label htmlFor="caloriesDrank"># Calories:</label>
                                    <input
                                        type="number"
                                        value={caloriesDrank}
                                        placeholder="How many calories was it?"
                                        onChange={e => setCaloriesDrank(e.target.value)}
                                        id="caloriesDrank"
                                        required 
                                />
                            </td>
                            <td>
                                <label htmlFor="submit">
                                    <button type="submit" id="submit" onClick={editDrink}>Save Edit</button>
                                </label>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </>
    );
};

export default DrinkEdit;