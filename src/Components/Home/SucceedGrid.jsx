import "./SucceedGrid.css"

import diet from "../../assets/find-your-diets.png"
import target from "../../assets/set-your-target.png"
import exercise from "../../assets/exercise.png"
import goal from "../../assets/rich-goals.png"

function SucceedGrid() {
  return (
	<div className='succeedGrid'>
		<div className="bottomRadius"></div>
		<p>What it takes to succeed</p>
		<div className='grid'>
			<div className='gridItem'>
				<img src={diet} alt="diet" />
				<h1>Find your Diet</h1>
				<p>Find a diet that fits your lifestyle: Calorie Counting, Low-Carb, Keto, Vegan, Vegetarian and more.</p>
			</div>
			<div className='gridItem'>
				<img src={target} alt="target" />
				<h1>Set Your Targets</h1>
				<p>Choose your desired weekly weight loss rate, target date, and source of calories like fat, carbs, and proteins.</p>
			</div>
			<div className='gridItem'>
				<img src={exercise} alt="exercise" />
				<h1>Log Your Meals & Exercise</h1>
				<p>Use the App to track your food, physical activities, and nutrients. Use the barcode scanner. Log ahead of time for better planning and scheduling.</p>
			</div>
			<div className='gridItem'>
				<img src={goal} alt="goal" />
				<h1>Reach Your Goals</h1>
				<p>Monitor your daily progress, check your weight loss forecast, and receive ongoing advice and feedback. Learn more about nutrients in your diet and make better choices.</p>
			</div>
		</div>
	</div>
  )
}

export default SucceedGrid