import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import HomePage from './modules/HomePage.jsx';
import WorkoutLogPage from './modules/workoutLog/workoutLogPage.jsx';
import FoodLogPage from './modules/foodLog/FoodLogPage.jsx';
import Navigation from './modules/Navigation.jsx';
import DrinkLogPage from './modules/drinkLog/DrinkLogPage.jsx';
import MoodLogPage from './modules/moodLog/MoodLogPage.jsx';
import SleepLogPage from './modules/sleepLog/SleepLogPage.jsx';

import WorkoutAdd from './modules/workoutLog/WorkoutAdd.jsx';
import WorkoutEdit from './modules/workoutLog/WorkoutEdit.jsx';

import FoodAdd from './modules/foodLog/FoodAdd.jsx';
import FoodEdit from './modules/foodLog/FoodEdit.jsx';

import DrinkAdd from './modules/drinkLog/DrinkAdd.jsx';
import DrinkEdit from './modules/drinkLog/DrinkEdit.jsx';

import MoodAdd from './modules/moodLog/MoodAdd.jsx';
import MoodEdit from './modules/moodLog/MoodEdit.jsx';

import SleepAdd from './modules/sleepLog/SleepAdd.jsx';
import SleepEdit from './modules/sleepLog/SleepEdit.jsx';

import './App.css'

function App() {
    const [workout, setWorkout] = useState([]);
    const [food, setFood] = useState([]);
    const [drink, setDrink] = useState([]);
    const [mood, setMood] = useState([]);
    const [sleep, setSleep] = useState([]);

    return (
        <>
            <header>
                <h1>FitFocus</h1>
            </header>
            <Router>
                <Navigation />
                <main>
                    <section>
                        <Routes>
                            <Route path="/" element={<HomePage />}></Route>

                            <Route path="/workoutLogPage" element={<WorkoutLogPage setWorkout={setWorkout} />}></Route>
                            <Route path="/workouts/create" element={<WorkoutAdd />}></Route>
                            <Route path="/workouts/update" element={<WorkoutEdit WorkoutToEdit={workout} />}></Route>

                            <Route path="/foodLogPage" element={<FoodLogPage setFood={setFood} />}></Route>
                            <Route path="/foods/create" element={<FoodAdd />}></Route>
                            <Route path="/foods/update" element={<FoodEdit FoodToEdit={food} />}></Route>
                            
                            <Route path="/drinkLogPage" element={<DrinkLogPage setDrink={setDrink} />}></Route>
                            <Route path="/drinks/create" element={<DrinkAdd />}></Route>
                            <Route path="/drinks/update" element={<DrinkEdit DrinkToEdit={drink} />}></Route>

                            <Route path="/moodLogPage" element={<MoodLogPage setMood={setMood} />}></Route>
                            <Route path="/moods/create" element={<MoodAdd />}></Route>
                            <Route path="/moods/update" element={<MoodEdit MoodToEdit={mood} />}></Route>
                        
                            <Route path="/sleepLogPage" element={<SleepLogPage setSleep={setSleep} />}></Route>
                            <Route path="/sleeps/create" element={<SleepAdd />}></Route>
                            <Route path="/sleeps/update" element={<SleepEdit SleepToEdit={sleep}/>}></Route>
                        </Routes>
                    </section>
                </main>
            </Router>
            <footer>
                <p>&copy; {new Date().getFullYear()} Allessandra Bakker</p>
            </footer>
        </>
    )
}

export default App