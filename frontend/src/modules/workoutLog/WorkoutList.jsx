import Workout from './Workout.jsx';

function WorkoutList( { workouts, onDelete, onEdit } ) {
    return (
        <table id="workouts">
            <caption>Add and Edit Workout Sessions</caption>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Exercise Type</th>
                    <th>Duration (Mins)</th>
                    <th>Weight (lbs)</th>
                    <th>Calories Burned</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {workouts.map((workout, i) => 
                    <Workout 
                        workout={workout} 
                        key={i} 
                        onDelete={onDelete}
                        onEdit={onEdit}
                        />)}
                </tbody>
            </table>
               
        )
    }
    export default WorkoutList;
    