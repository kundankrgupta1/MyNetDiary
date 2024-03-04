import { Link } from "react-router-dom"
import "./Navbar.css"
import Calorie_Counting from "../../assets/Calorie_Counting.svg"
import Low_Carb from "../../assets/Low_Carb.svg"
import Keto from "../../assets/Keto.svg"
import High_Protein from "../../assets/High_Protein.svg"
import Low_fat from "../../assets/Low_fat.svg"
import Mediterranean from "../../assets/Mediterranean.svg"
import Vegetarian from "../../assets/Vegetarian.svg"
import Vegan from "../../assets/Vegan.svg"
function MenuItems() {

	// const navArray = ["features", "diets", "library", "food", "business"];
	return (
		<nav className="navItems">
			<ul>
				<li className="items">
					<Link className="anchorTag">features</Link>
					<div className="dietsItems">
						<ul>
							<li><Link>iPhone & iPad app</Link></li>
							<li><Link>iPhone & iPad app</Link></li>
							<li><Link>User Reviews</Link></li>
						</ul>
					</div>
				</li>
				<li className="items">
					<Link className="anchorTag">diets</Link>
					<div className="dietsItems">
						<ul>
							<li><Link className="flex"><img src={Calorie_Counting} />Calorie Counting</Link></li>
							<li><Link className="flex"><img src={Low_Carb} />Low-Carb</Link></li>
							<li><Link className="flex"><img src={Keto} />Keto</Link></li>
							<li><Link className="flex"><img src={High_Protein} />High-Protein</Link></li>
							<li><Link className="flex"><img src={Low_fat} />Low-Fat</Link></li>
							<li><Link className="flex"><img src={Mediterranean} />Mediterranean</Link></li>
							<li><Link className="flex"><img src={Vegetarian} />Vegetarian</Link></li>
							<li><Link className="flex"><img src={Vegan} />Vegan</Link></li>
						</ul>
					</div>
				</li>
				<li className="items">
					<Link className="anchorTag">library</Link>
					<div className="dietsItems">
						<ul>
							<li><Link>Weight Loss Blog</Link></li>
							<li><Link>Diet Library</Link></li>
							<li><Link>Dietitian team</Link></li>
						</ul>
					</div>
				</li>
				<li className="items">
					<Link className="anchorTag">food</Link>
					<div className="dietsItems">
						<ul>
							<li><Link>Food Search</Link></li>
							<li><Link>Database Licensing & API</Link></li>
						</ul>
					</div>
				</li>
				<li className="items">
					<Link className="anchorTag">business</Link>
					<div className="dietsItems">
						<ul>
							<li><Link>Professional Connect</Link></li>
							<li><Link>Find Healthcare Professional</Link></li>
							<li><Link>For Healthcare Professionals</Link></li>
							<li><Link>For Trainers and Clubs</Link></li>
							<li><Link>For Trainers and Clubs</Link></li>
						</ul>
					</div>
				</li>
			</ul>
		</nav >
	)
}

export default MenuItems
