import { TbChecklist } from "react-icons/tb";

function HomePage(){
    return (
        <>
            <h2>Home Page</h2>
            <article>
                <p>Welcome to my fitness website, FitFocus! Here, you can check off your fitness goals and log your workout sessions, all in one place. Enjoy!</p>
                <h3><i><TbChecklist /></i>Fitness Goals</h3>
                <p>Some common fitness goals are listed below. Please check what you would like to improve:</p>
                <div className="checklist">
                    <label htmlFor="dailySteps">
                        <strong>Increase Daily Steps:</strong> Aim for 10,000 steps a day.
                        <input 
                            type="checkbox"
                            id="dailySteps"
                            name="dailySteps"
                            value="Steps"
                            defaultChecked
                        />
                    </label>
                    <label htmlFor="drinkWater">
                        <strong>Hydration:</strong> Drink 8 cups of water a day.
                        <input
                            type="checkbox"
                            id="drinkWater"
                            name="drinkWater"
                            value="hydration"
                        />
                    </label>
                    <label htmlFor="improveFlex">
                        <strong>Improve Flexibility:</strong> Practice yoga and stretching.
                        <input 
                            type="checkbox"
                            id="improveFlex"
                            name="improveFlex"
                            value="flexibility"
                        />
                    </label>
                    <label htmlFor="eatHealthy">
                        <strong>Healthy Food:</strong> Eat 5 servings of fruits and veggies daily.
                        <input
                            type="checkbox"
                            id="eatHealthy"
                            name="eatHealthy"
                            value="healthyFood"
                        />
                    </label>
                    <label htmlFor="manageWeight">
                        <strong>Weight Management: </strong> Set a weight loss or gain target.
                        <input 
                            type="checkbox"
                            id="manageWeight"
                            name="manageWeight"
                            value="weight"
                        />
                    </label>
                    <label htmlFor="sleepBetter">
                        <strong>Sleep Quality:</strong> Get 7-8 hours of sleep nightly.
                        <input 
                            type="checkbox"
                            id="sleepBetter"
                            name="sleepBetter"
                            value="sleep"
                        />
                    </label>
                    <label htmlFor="mentallyWell">
                        <strong>Mental Wellness:</strong> Meditate for 10 mins daily.
                        <input 
                            type="checkbox"
                            id="mentallyWell"
                            name="mentallyWell"
                            value="calmMind"
                        />
                    </label>
                    <label htmlFor="snackHealthy">
                        <strong>Healthy Snacking:</strong> Choose healthy snacks.
                        <input
                            type="checkbox"
                            id="snackHealthy"
                            name="snackHealthy"
                            value="snack"
                        />
                    </label>
                    <label htmlFor="limitSugar">
                        <strong>Reduce Sugar Intake:</strong> Limit added sugar intake.
                        <input
                            type="checkbox"
                            id="limitSugar"
                            name="limitSugar"
                            value="sugarFree"
                        />
                    </label>
                    <label htmlFor="strengthTrain">
                        <strong>Strength Training:</strong> Strength train 3 times a week.
                        <input
                            type="checkbox"
                            id="strengthTrain"
                            name="strengthTrain"
                            value="strength"
                        />
                    </label>
                    <label htmlFor="exerciseMore">
                        <strong>Exercise Consistently:</strong> Exercise 30 mins, 5 times weekly.
                        <input
                            type="checkbox"
                            id="exerciseMore"
                            name="exerciseMore"
                            value="exercise"
                        />
                    </label>
                </div>
            </article>
        </>
    )
}
export default HomePage;