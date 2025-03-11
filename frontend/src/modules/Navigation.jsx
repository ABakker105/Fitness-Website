import { Link } from 'react-router-dom';
import { MdHomeFilled } from "react-icons/md";
import { MdFitnessCenter } from "react-icons/md";
import { RiDrinks2Line } from "react-icons/ri";
import { TbMoodCheck } from "react-icons/tb";
import { GiShinyApple } from "react-icons/gi";
import { GiNightSleep } from "react-icons/gi";

function Navigation() {
    return (
        <>
        <nav>
            <Link to="/"><i><MdHomeFilled /></i>Home</Link>
            <Link to="/workoutLogPage"><i><MdFitnessCenter /></i>Workout Log</Link>
            <Link to="/foodLogPage"><i><GiShinyApple /></i>Food Log</Link>
            <Link to="/drinkLogPage"><i><RiDrinks2Line /></i>Drink Log</Link>
            <Link to="/moodLogPage"><i><TbMoodCheck /></i>Mood Log</Link>
            <Link to="/sleepLogPage"><i><GiNightSleep /></i>Sleep Log</Link>
        </nav>
        </>
    )
}

export default Navigation;