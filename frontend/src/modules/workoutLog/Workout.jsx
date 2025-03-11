import { RiFileEditLine } from "react-icons/ri";
import { AiOutlineDelete } from "react-icons/ai";

function Workout( { workout, onEdit, onDelete } ) {
    return (
        <tr>
            <td>{new Date(workout.date).toLocaleDateString()}</td>
            <td>{workout.exerciseType}</td>
            <td>{workout.duration}</td>
            <td>{workout.weight}</td>
            <td>{workout.caloriesBurned}</td>
            <td>
                <i><AiOutlineDelete onClick={() => onDelete(workout._id)} /></i>
            </td>
            <td>
                <i><RiFileEditLine onClick={() => onEdit(workout)}/></i>
            </td>
        </tr>
    );
}

export default Workout;