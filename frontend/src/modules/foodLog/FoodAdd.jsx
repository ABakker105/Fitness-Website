import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const FoodAdd = () => {
    const [foodDate, setFoodDate] = useState('');
    const [foodItem, setFoodItem] = useState('');
    const [portionSize, setPortionSize] = useState('');
    const [calories, setCalories] = useState('');
    const [mealType, setMealType] = useState('');

    const redirect = useNavigate();

    const addFood = async (event) => {
        event.preventDefault();
        const newFood = { foodDate, foodItem, portionSize, calories, mealType };
        try {
            const response = await fetch('/foodlog', {
                method: 'post',
                body: JSON.stringify(newFood),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.ok) {
                alert(`Meal was successfully added!`);
                redirect("/foodLogPage");
            } else {
                alert(`Failed to add meal: ${response.status}`);
            }
        } catch (error) {
            alert(`Error adding meal: ${response.status}`);
        }
    };

    return (
        <>
            <h2>Log your meals here!</h2>
            <article>
                <p>This form is used to add meals. Please fill in the text boxes below to log your meal. When you are done, click the "Add meal" button to add the meal to your collection.</p>
                <form id="" onSubmit={addFood} >
                    <table>
                        <caption>Add Meal:</caption>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Food Item</th>
                                <th>Portion Size</th>
                                <th>Calories</th>
                                <th>Meal Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <label htmlFor="foodDate">Date:</label>
                                    <input
                                        type="date"
                                        value={foodDate}
                                        placeholder="What day did you have your meal?"
                                        onChange={e => setFoodDate(e.target.value)}
                                        id="foodDate"
                                        required />
                                </td>
                                <td>
                                    <label htmlFor="foodItem">Food Item:</label>
                                    <input 
                                        type="text"
                                        value={foodItem}
                                        placeholder="What food did you eat?"
                                        onChange={e => setFoodItem(e.target.value)}
                                        id="foodItem"
                                        required />
                                </td>
                                <td>
                                    <label htmlFor="portionSize">Portion Size:</label>
                                    <input 
                                        type="text"
                                        value={portionSize}
                                        placeholder="What was your portion size?"
                                        onChange={e => setPortionSize(e.target.value)}
                                        id="portionSize"
                                        required />
                                </td>
                                <td>
                                    <label htmlFor="calories">Calories:</label>
                                    <input
                                        type="number"
                                        value={calories}
                                        placeholder="How many calories was your meal?"
                                        onChange={e => setCalories(e.target.value)}
                                        id="calories"
                                        required />
                                </td>
                                <td>
                                    <label htmlFor="mealType">Meal Type:</label>
                                    <input 
                                        type="text"
                                        value={mealType}
                                        placeholder="What type of meal did you have?"
                                        onChange={e => setMealType(e.target.value)}
                                        id="mealType"
                                        required />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="submit">
                                        <button type="submit" id="submit">Add Meal</button>
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

export default FoodAdd;