import { RiFileEditLine } from "react-icons/ri";
import { AiOutlineDelete } from "react-icons/ai";

function Mood( { mood, onEdit, onDelete } ) {
    return (
        <tr>
            <td>{new Date(mood.moodDate).toLocaleDateString()}</td>
            <td>{mood.moodType}</td>
            <td>{mood.moodDuration}</td>
            <td>{mood.moodDiary}</td>
            <td>
                <i><AiOutlineDelete onClick={() => onDelete(mood._id)} /></i>
            </td>
            <td>
                <i><RiFileEditLine onClick={() => onEdit(mood)}/></i>
            </td>
        </tr>
    );
}

export default Mood;