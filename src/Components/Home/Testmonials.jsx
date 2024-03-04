import "./Testmonials.css"
import { Link } from "react-router-dom"
import Green_arrow from "../../assets/forward_green.svg"

function Testmonials() {
  return (
	<div className="testmonials">
		<h1>Top Rated Calorie Counter App</h1>
		<p>“This is my favorite food diary app. I used six of the &quot;top&quot; apps in this category for several days so that I could compare them and select what worked best for me. MyNetDiary was the winner. Intuitive, simple layout, decent database, appealing graphic design, and no ads.”</p>
		<Link className="testimonialsButtons" to="/testmonials">see more testimonials&nbsp;&nbsp;&nbsp;&nbsp;<img src={Green_arrow} alt="Green_arrow" /></Link>
		
	</div>
  )
}

export default Testmonials