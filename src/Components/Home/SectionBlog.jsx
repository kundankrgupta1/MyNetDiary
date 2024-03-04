import "./SectionBlog.css"
import { Link } from "react-router-dom"
import Green_arrow from "../../assets/forward_green.svg"

function SectionBlog() {
	return (
		<div className="SectionBlog">
			<h1>Being Healthy Has Never Been Easier</h1>
			<div className="grids">
				<Link className="gridItem">
					<img src="https://assets.mynetdiary.com/blog/high-intensity-interval-training-benefits-v2.jpeg" alt="traning" />
					<h3>Are there benefits of adding high-intensity interval training to your exercise and weight-loss plan?</h3>
					<hr className="hrTag" />
					<p>What are the benefits of high-intensity interval training (HIIT) for you? Find out how HIIT benefits weight loss and decide if it is for you.</p>
				</Link>
				<Link className="gridItem">
					<img src="https://assets.mynetdiary.com/src/article/the-benefits-of-eating-protein.jpeg" alt="traning" />
					<h3>The benefits of eating protein for healthy and achievable weight loss</h3>
					<hr className="hrTag" />
					<p>Claims about protein are everywhere, but what are the benefits of eating protein as part of a healthy diet? Read about how protein is vital for weight loss. Learn how MyNetDiary calculates your protein needs and discover rich protein sou...</p>
				</Link>
				<Link className="gridItem">
					<img src="https://assets.mynetdiary.com/blog/healthy-lentil-recipes-for-weight-loss.jpeg" alt="traning" />
					<h3>3 Healthy lentil recipes perfect for weight loss and a vegetarian diet</h3>
					<hr className="hrTag" />
					<p>Lentils are growing in popularity, perhaps because they cook quickly and are an excellent protein source for plant-based diets. There are many different varieties on the market that work well for salads and soups. Try these healthy lenti..</p>
				</Link>
				<Link className="gridItem">
					<img src="https://assets.mynetdiary.com/blog/kettlebell-weight-loss.jpeg" alt="traning" />
					<h3>Learn how kettlebell workouts can support weight loss, then try one of our favorite workout videos</h3>
					<hr className="hrTag" />
					<p>If you are looking for a new, efficient strength training workout that will challenge your body in different ways, kettlebells may be right for you and right for weight loss. Here’s how kettlebells can help you build muscle to support w...</p>
				</Link>
			</div>
			<Link className="testimonialsButtons marginX" to="/testmonials">view all articles&nbsp;&nbsp;&nbsp;&nbsp;<img src={Green_arrow} alt="Green_arrow" /></Link>
		</div>
	)
}

export default SectionBlog