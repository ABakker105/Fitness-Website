import Drink from './Drink.jsx';

function DrinkList( { drinks, onDelete, onEdit } ) {
    return (
        <table id="drinks">
            <caption>Add and Edit Beverages</caption>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Beverage Type</th>
                    <th># Cups</th>
                    <th># Calories</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {drinks.map((drink, i) => 
                    <Drink 
                        drink={drink} 
                        key={i} 
                        onDelete={onDelete}
                        onEdit={onEdit}
                        />)}
                </tbody>
            </table>
               
        )
    }
    export default DrinkList;
    