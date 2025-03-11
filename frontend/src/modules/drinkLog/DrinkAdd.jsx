import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const DrinkAdd = () => {
    const [drinkDate, setDrinkDate] = useState('');
    const [beverageType, setBeverageType] = useState('');
    const [numGlasses, setNumGlasses] = useState('');
    const [caloriesDrank, setCaloriesDrank] = useState('');

    const redirect = useNavigate();

    const addDrink = async (event) => {
        event.preventDefault();
        const newDrink = { drinkDate, beverageType, numGlasses, caloriesDrank };
        try {
            const response = await fetch('/drinks', {
                method: 'post',
                body: JSON.stringify(newDrink),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.status === 201) {
                alert(`Beverage was successfully added!`);
                redirect("/drinksPage");
            } else {
                alert(`Failed to add beverage: ${response.status}`);
            }
        } catch (error) {
            alert(`Error adding beverage: ${response.status}`);
        }
    };

    return (
        <>
            <h2>Log your beverages here!</h2>
            <article>
                <p>This form is used to add beverages you have had. Please fill in the text boxes below to log your beverages. When you are done, click the "Add Drink" button to add the beverage to your collection.</p>
                <form id="" onSubmit={addDrink} >
                    <table>
                        <caption>Add Drink:</caption>
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
                                        id="date"
                                        required />
                                </td>
                                <td>
                                    <label htmlFor="beverageType">Beverage Type:</label>
                                    <input 
                                        type="text"
                                        value={beverageType}
                                        placeholder="What type of beverage did you have?"
                                        onChange={e => setBeverageType(e.target.value)}
                                        id="beverageType"
                                        required />
                                </td>
                                <td>
                                    <label htmlFor="numGlasses"># Cups:</label>
                                    <input 
                                        type="number"
                                        value={numGlasses}
                                        placeholder="How many cups of this beverage did you have?"
                                        onChange={e => setNumGlasses(e.target.value)}
                                        id="numGlasses"
                                        required />
                                </td>
                                <td>
                                    <label htmlFor="caloriesDrank"># Calories:</label>
                                    <input
                                        type="number"
                                        value={caloriesDrank}
                                        placeholder="How many calories was it?"
                                        onChange={e => setCaloriesDrank(e.target.value)}
                                        id="caloriesDrank"
                                        required />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="submit">
                                        <button type="submit" id="submit">Add Drink</button>
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

export default DrinkAdd;