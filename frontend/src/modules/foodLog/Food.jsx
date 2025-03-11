import { RiFileEditLine } from "react-icons/ri";
import { AiOutlineDelete } from "react-icons/ai";

function Food( { food, onEdit, onDelete } ) {
    return (
        <tr>
            <td>{new Date(food.foodDate).toLocaleDateString()}</td>
            <td>{food.foodItem}</td>
            <td>{food.portionSize}</td>
            <td>{food.calories}</td>
            <td>{food.mealType}</td>
            <td>
                <i><AiOutlineDelete onClick={() => onDelete(food.logId)} /></i>
            </td>
            <td>
                <i><RiFileEditLine onClick={() => onEdit(food)}/></i>
            </td>
        </tr>
    );
}

export default Food;