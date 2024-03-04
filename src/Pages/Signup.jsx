import "./Signup.css"
import MainLogo from "../assets/logo-main.svg"
import { Link } from "react-router-dom"
export default function Signup() {
	return (
		<div className="signup">
			<div className="logo">
				<img src={MainLogo} alt="main-logo" />
			</div>
			<div className="Signupform">
				<h1>Sign Up: Your Weight plan</h1>
				<form>
					<div className="input">
						<input type="text" name="weight1" placeholder="How much do you weigh?" /><br />
						<input type="text" name="weight2" placeholder="What is your target weight?" />
					</div>
					<p>Switch to English, US units (lbs, feet)</p>
					<label>
						Your desire progress
					</label>
					<div className="radio">
						<div><input type="radio" name="" id="" /><label>Lose ½ kg/week</label><br /></div>
						<div><input type="radio" name="" id="" /><label>Lose ¾ kg/week</label><br /></div>
						<div><input type="radio" name="" id="" /><label>Lose 1 kg/week</label><br /></div>
					</div>
					<input type="button" value="next" />
				</form>
			</div>
			<div className="signupFooter">
				<p>By signing up, you are agree to the <Link>Terms of Service</Link></p>
			</div>
		</div>
	)
}
