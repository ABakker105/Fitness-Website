import { RiFileEditLine } from "react-icons/ri";
import { AiOutlineDelete } from "react-icons/ai";

function Sleep( { sleep, onEdit, onDelete } ) {
    return (
        <tr>
            <td>{new Date(sleep.sleepDate).toLocaleDateString()}</td>
            <td>{sleep.bedTime}</td>
            <td>{sleep.wakeTime}</td>
            <td>{sleep.hoursSlept}</td>
            <td>{sleep.sleepDiary}</td>
            <td>
                <i><AiOutlineDelete onClick={() => onDelete(sleep._id)} /></i>
            </td>
            <td>
                <i><RiFileEditLine onClick={() => onEdit(sleep)}/></i>
            </td>
        </tr>
    );
}

export default Sleep;