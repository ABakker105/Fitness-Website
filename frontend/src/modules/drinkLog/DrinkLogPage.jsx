import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DrinkList from './DrinkList';
import { Link } from 'react-router-dom';
import { IoMdAddCircle } from "react-icons/io";

function DrinkLogPage( { setDrink }) {
    const redirect = useNavigate();

    const [drinks, setDrinks] = useState([]);

    // Retrieves all drinks
    const loadDrinks = async () => {
        const response = await fetch('/drinks');
        const drinks = await response.json();
        setDrinks(drinks);
    }

    const onEditDrink = async drink => {
        setDrink(drink);
        redirect("/drinks/update");
    }

    // Requests to delete a drink from database based on its ID.
    const onDeleteDrink = async _id => {
        const confirmDeletion = window.confirm("Are you sure you want to permanently delete this beverage?");
        if (confirmDeletion) {
            const response = await fetch(`/drinks/${_id}`, { method: 'DELETE' });
            if (response.status === 200) {
                const getResponse = await fetch('/drinks');
                const drinks = await getResponse.json();
                setDrinks(drinks);
            } else {
                console.error(`Failed to delete the beverage with ID: ${_id}, and status code: 
                ${response.status}`)
            }
          }
      };

      useEffect(() => {
        loadDrinks();
     }, []);

    return (
    <>
     <h2>Drink Log Page</h2>
    <article>
        <p>Welcome to the Drink Log Page! Here you can add, edit, and delete beverages.</p>

        <Link to="/drinks/create"><i><IoMdAddCircle /></i>Add Beverage</Link>

        <DrinkList
            drinks={drinks}
            onEdit={onEditDrink}
            onDelete={onDeleteDrink}
            />
        </article>
        </>
        );
    }
    export default DrinkLogPage;   