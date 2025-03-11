import { RiFileEditLine } from "react-icons/ri";
import { AiOutlineDelete } from "react-icons/ai";

function Drink( { drink, onEdit, onDelete } ) {
    return (
        <tr>
            <td>{new Date(drink.drinkDate).toLocaleDateString()}</td>
            <td>{drink.beverageType}</td>
            <td>{drink.numGlasses}</td>
            <td>{drink.caloriesDrank}</td>
            <td>
                <i><AiOutlineDelete onClick={() => onDelete(drink._id)} /></i>
            </td>
            <td>
                <i><RiFileEditLine onClick={() => onEdit(drink)}/></i>
            </td>
        </tr>
    );
}

export default Drink;