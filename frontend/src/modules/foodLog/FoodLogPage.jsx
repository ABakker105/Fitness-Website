import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FoodList from './FoodList';
import { Link } from 'react-router-dom';
import { IoMdAddCircle } from "react-icons/io";

function FoodLogPage( { setFood }) {
    const redirect = useNavigate();

    const [meals, setMeals] = useState([]);

    // Retrieves all meals
    const loadMeals = async () => {
        const response = await fetch('/foodlog');
        const mealsData = await response.json();
        setMeals(Object.entries(mealsData).map(([id, meal]) => ({ ...meal, logId: id }))); 
    }

    const onEditFood = async food => {
        setFood(food);
        redirect("/foods/update");
    }

    // Deletes a meal 
    const onDeleteFood = async logId => {
        const confirmDeletion = window.confirm("Are you sure you want to permanently delete this meal?");
        if (confirmDeletion) {
            const response = await fetch(`/foodlog/${logId}`, { method: 'DELETE' });
            if (response.ok) {
                await loadMeals();
            } else {
                console.error(`Failed to delete the meal with ID: ${logId}, and status code: ${response.status}`);
            }
          }
      };

      useEffect(() => {
        loadMeals();
     }, []);

    return (
    <>
     <h2>Food Log Page</h2>
    <article>
        <p>Welcome to the Food Log Page! Here you can add, edit, and delete your meals.</p>

        <Link to="/foods/create"><i><IoMdAddCircle /></i>Add Meal</Link>

        <FoodList
            meals={meals}
            onEdit={onEditFood}
            onDelete={onDeleteFood}
            />
        </article>
        </>
        );
    }
    export default FoodLogPage;   