import Logo from "../../assets/logo-dark.svg";
import Star from "../../assets/star.svg"
import app_store_badge from "../../assets/app_store_badge.svg"
import google_play_badge from "../../assets/google_play_badge.svg"
import HalfStar from "../../assets/halfStar.svg"
import Insta from "../../assets/insta.svg"
import fb from "../../assets/fb.svg"
import x from "../../assets/x.svg"
import yt from "../../assets/yt.svg"
import p from "../../assets/printrest.svg"
import "./Footer.css"
import { Link } from "react-router-dom"
function Footer() {
	return (
		<>
			<div className="Footer">
				<div className="Footer1">
					<Link to="/"><img src={Logo} alt="Logo" /></Link>
					<div className="downloads">
						<Link><img src={app_store_badge} alt="app_store_badge" /></Link>
						<Link><img src={google_play_badge} alt="google_play_badge" /></Link>
					</div>
					<div className="star">
						{[Star, Star, Star, Star, HalfStar].map((e, ind) =>
							<img src={e} key={ind} />
						)}
						<p><strong>4.8</strong> • <strong>184,041 Ratings</strong></p>
					</div>
					<ul>
						<li><Link><img src={Insta} alt="Insta" /></Link></li>
						<li><Link><img src={fb} alt="fb" /></Link></li>
						<li><Link><img src={x} alt="x" /></Link></li>
						<li><Link><img src={yt} alt="yt" /></Link></li>
						<li><Link><img src={p} alt="p" /></Link></li>
					</ul>
				</div>
				<div className="FooterLinks">
					<p>APP FEATURES</p>
					<ul>
						<li><Link>iPhone & iPad app</Link></li>
						<li><Link>Android app</Link></li>
						<li><Link>Keto Diet</Link></li>
						<li><Link>Low-Carb Diet</Link></li>
						<li><Link>Premium Calorie Counting</Link></li>
					</ul>
				</div>
				<div className="FooterLinks">
					<p>WEIGHT LOSS SCIENCE</p>
					<ul>
						<li><Link>Weight Loss Blog</Link></li>
						<li><Link>Diet Library</Link></li>
						<li><Link>Dietitian Team</Link></li>
					</ul>
				</div>
				<div className="FooterLinks">
					<p>BUSINESS</p>
					<ul>
						<li><Link>Professional Connect</Link></li>
						<li><Link>Gift cards & Group discounts</Link></li>
						<li><Link>For trainers</Link></li>
						<li><Link>For healthcare professionals</Link></li>
						<li><Link>For families</Link></li>
						<li><Link>Food database licensing</Link></li>
					</ul>
				</div>
				<div className="FooterLinks">
					<p>COMPANY</p>
					<ul>
						<li><Link>About MyNetDiary</Link></li>
						<li><Link>In the News</Link></li>
						<li><Link>Press Releases</Link></li>
						<li><Link>Press Kit</Link></li>
					</ul>
				</div>
			</div>
			<div className="subFooter">
				<p>Copyright © 2022 MyNetDiary. All rights reserved.</p>
				<ul>
					<li><Link>Contact Us</Link></li>
					<li><Link>FAQ</Link></li>
					<li><Link>Privacy</Link></li>
					<li><Link>Terms of Use</Link></li>
				</ul>
			</div>
		</>
	)
}

export default Footer