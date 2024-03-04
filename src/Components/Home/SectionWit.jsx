import "./SectionWit.css"
import { Link } from "react-router-dom"
import Green_arrow from "../../assets/forward_green.svg"
function SectionWit() {
	return (
		<div className="SectionWit_main">
			<div className="SectionWit">
				<div className="SectionWit__content">
					<img src="https://assets.mynetdiary.com/keto/cover-premium-keto-recipes@2x.jpg" alt="ket-recipes" />
					<h1>Premium Recipes</h1>
					<p>Hundreds of easy recipes, with great variety, carefully crafted for great taste by a team of Registered Dietitians.</p>
				</div>
				<div className="SectionWit__content">
					<img src="https://assets.mynetdiary.com/images/cover-easy-tracking-premium@2x.png" alt="cover-easy-tracking" />
					<h1>Easy Tracking</h1>
					<p>Massive food catalog, fastest barcode scanner, quickest food lookup making food tracking a breeze</p>
				</div>
				<div className="SectionWit__content">
					<img src="https://assets.mynetdiary.com/images/cover-insights-and-guidance-keto@2x.png" alt="cover-insights-and-guidance" />
					<h1>Insights and Guidance</h1>
					<p>Encouraging and supportive feedback, guiding you to your goal.</p>
				</div>
			</div>
			<Link className="testimonialsButtons" to="/testmonials">more features&nbsp;&nbsp;&nbsp;&nbsp;<img src={Green_arrow} alt="Green_arrow" /></Link>
		</div>
	)
}

export default SectionWit