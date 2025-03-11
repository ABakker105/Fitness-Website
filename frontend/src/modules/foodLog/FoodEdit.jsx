import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const FoodEdit = ( { FoodToEdit = {} } ) => {
    const [foodDate, setFoodDate] = useState(FoodToEdit.foodDate || "");
    const [foodItem, setFoodItem] = useState(FoodToEdit.foodItem || "");
    const [portionSize, setPortionSize] = useState(FoodToEdit.portionSize || "");
    const [calories, setCalories] = useState(FoodToEdit.calories || "");
    const [mealType, setMealType] = useState(FoodToEdit.mealType || "");

    const redirect = useNavigate();

    const editFood = async () => {
        try {
            const response = await fetch(`/foodlog/${FoodToEdit.logId}`, { 
                method: 'PUT',
                body: JSON.stringify({
                    foodDate: foodDate,
                    foodItem: foodItem,
                    portionSize: portionSize,
                    calories: calories,
                    mealType: mealType,
                }),
                headers: { 'Content-Type': 'application/json' },
            });
    
            if (response.ok) { 
                alert('Meal was successfully updated!');
                redirect("/foodLogPage");
            } else {
                const errMessage = await response.json();
                alert(`Failed to update meal: ${response.status}. ${errMessage.error || "Unknown error"}`);
            }
        } catch (error) {
            console.error('Error editing meal:', error);
            alert('Error saving meal edit.');
        }
    };

    return (
        <>
            <h2>Edit Meal</h2>
            <article>
                <p>This form is used to edit a meal. Please click in the text boxes below to edit the meal. When you are done, click the "Save Edit" button to save your changes.</p>
                <table>
                    <caption>Edit this Meal:</caption>
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
                            <td>
                                <label htmlFor="submit">
                                    <button type="submit" id="submit" onClick={editFood}>Save Edit</button>
                                </label>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </>
    );
};

export default FoodEdit;