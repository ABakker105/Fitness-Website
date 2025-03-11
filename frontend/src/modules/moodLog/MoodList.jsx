import Mood from './Mood.jsx';

function MoodList( { moods, onDelete, onEdit } ) {
    return (
        <table id="moods">
            <caption>Add and Edit Your Moods</caption>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Mood Type</th>
                    <th>Duration (Mins)</th>
                    <th>Journal</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {moods.map((mood, i) => 
                    <Mood 
                        mood={mood} 
                        key={i} 
                        onDelete={onDelete}
                        onEdit={onEdit}
                        />)}
                </tbody>
            </table>
               
        )
    }
    export default MoodList;
    