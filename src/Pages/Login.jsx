import "./Login.css"
import MainLogo from "../assets/logo-main.svg"
import { Link } from "react-router-dom"
import phone from "../assets/phone.svg"

function Login() {
	return (
		<div className="login">
			<div className="logo">
				<img src={MainLogo} alt="main-logo" />
			</div>
			<div className="loginForm">
				<h1>Sign In</h1>
				<div className="alert" style={{marginBottom: "2rem"}}>
					<img src={phone} alt="" />
					<p>If you use one of MyNetDiary’s mobile apps, please sign in with the same account name or email as you do in your MyNetDiary mobile app. You can see account name on the Settings screen in the mobile app.</p>
				</div>
				<form>
					<div className="input">
						<input type="email" name="weight1" placeholder="Email or Account Name" /><br />
						<input type="password" name="weight2" placeholder="Password" />
					</div>
					<div style={{ display: "flex", justifyContent: "space-between" }}>
						<input type="submit" value="Submit" />
						<p>Forget Password</p>
					</div>
				</form>
			</div>
			<div className="loginFooter">
				<p>By signing up, you are agree to the <Link>Terms of Service</Link></p>
			</div>
		</div>
	)
}

export default Login