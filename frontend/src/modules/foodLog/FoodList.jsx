import Food from './Food.jsx';

function FoodList( { meals = [], onDelete, onEdit } ) {
    if (!Array.isArray(meals)) {
        console.error("`meals` is not an array:", meals);
        return <p>Unable to display meals. Please check the data source.</p>
    }

    return (
        <table id="meals">
            <caption>Add and Edit Meals</caption>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Food Item</th>
                    <th>Portion Size</th>
                    <th>Calories</th>
                    <th>Meal Type</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {meals.map((food) => 
                    <Food 
                        food={food} 
                        key={food.logId} 
                        onDelete={onDelete}
                        onEdit={onEdit}
                        />)}
                </tbody>
            </table>
               
        )
    }
    export default FoodList;
    