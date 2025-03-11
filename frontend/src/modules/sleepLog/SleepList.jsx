import Sleep from './Sleep.jsx';

function SleepList( { sleeps, onDelete, onEdit } ) {
    return (
        <table id="sleeps">
            <caption>Add and Edit Your Sleep Logs</caption>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Bed Time</th>
                    <th>Wake Time</th>
                    <th>Hours Slept</th>
                    <th>Journal</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {sleeps.map((sleep, i) => 
                    <Sleep 
                        sleep={sleep} 
                        key={i} 
                        onDelete={onDelete}
                        onEdit={onEdit}
                        />)}
                </tbody>
            </table>
               
        )
    }
    export default SleepList;
    