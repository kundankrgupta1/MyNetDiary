import "./Cta.css"
import { Link } from "react-router-dom"
import End from "../../assets/bg-start-your-free--devices.png"

function Cta() {
	return (
		<div className="Cta">
			<div className="bottomRadius2"></div>
			<div className="CtaContent">
				<div className="CtaText">
					<h1>Start Your Free<br />Food Diary Today</h1>
					<button><Link>sign up</Link></button>
				</div>
				<img src={End} alt="bg-start-your-free--devices" />
			</div>
		</div>
	)
}

export default Cta