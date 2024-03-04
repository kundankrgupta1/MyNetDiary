// packages
import { Link } from "react-router-dom"

// style
import "./Navbar.css"


// assets
import Logo from "../../assets/logo-main.svg";

// Components
import MenuItems from "./MenuItems";

// components start
function Navbar() {
	return (
		<div className="navbar">
			<div className="logoSections">
				<Link to="/"><img src={Logo} /></Link>
			</div>
			<MenuItems />
			<div className="signupSignin">
				<Link to="/signup"><button>sign up</button></Link>
				<Link to="/login"><button>sign in</button></Link>
			</div>
		</div>
	)
}

export default Navbar