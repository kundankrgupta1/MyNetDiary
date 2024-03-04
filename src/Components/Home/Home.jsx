import { Link } from "react-router-dom"
import "./Home.css";
import bg_start_left from "../../assets/bg_start_left.png"
import app_store_badge from "../../assets/app_store_badge.svg"
import google_play_badge from "../../assets/google_play_badge.svg"
import iPhone from "../../assets/iPhone.png"
import appleIcon from "../../assets/appleIcon.svg"
import Android from "../../assets/Android.svg"
import Star from "../../assets/star.svg"
import HalfStar from "../../assets/halfStar.svg"
import bg_start_right from "../../assets/bg_start_right.png"
import wh_logo from '../../assets/wh-logo.svg'
import watch from "../../assets/iwatch.png"
import USToday from "../../assets/logo_usa_today.png"
import ABCNews from "../../assets/logo_abc_news.svg"
import Fox from "../../assets/logo-fox.svg"
import Times from '../../assets/logo-times.svg'
import Consumer from "../../assets/logo-consumer-reports.svg"
import wsj from "../../assets/logo-wsj.svg"
import Cicago from "../../assets/logo-chicago-tribune.svg"
import SucceedGrid from "./SucceedGrid";
import Testmonials from "./Testmonials";
import SectionWit from "./SectionWit";
import SectionBlog from "./SectionBlog";
import Compatible from "./Compatible";
import Cta from "./Cta";
import Sliders from "../Slider/Sliders";

function Home() {
	return (
		<div className='home'>
			<div className="headerInto">
				<div className="column1">
					<div className="blackPlum">
						<img src={bg_start_left} alt="bg-start-left" />
					</div>
					<div className="introText">
						<p>Be Healthy <br />for Life!</p>
					</div>
					<div className="anotherIntroText">
						<p>Your weight loss, diet, and <br />nutrition assistant.</p>
					</div>
					<div className="download">
						<Link><img src={app_store_badge} alt="app_store_badge" /></Link>
						<Link><img src={google_play_badge} alt="google_play_badge" /></Link>
					</div>
					<div className="rating">
						<p><span style={{ fontWeight: "700" }}>Top Rated:</span> 184,041 reviews & counting</p>
						<div className="ratingCount">
							<div className="ratingCountFlex">
								<img src={appleIcon} alt="Apple Icon" />
								<div className="star">
									{[Star, Star, Star, Star, HalfStar].map((e, ind) =>
										<img src={e} key={ind} />
									)}
								</div>
								<p>4.8</p>
							</div>
							<div className="ratingCountFlexAndroid">
								<img src={Android} alt="Android" />
								<div className="star">
									{[Star, Star, Star, Star, HalfStar].map((e, ind) =>
										<img src={e} key={ind} />
									)}
								</div>
								<p>4.7</p>
							</div>
						</div>
					</div>
				</div>

				<div className="column2">
					<div className="iPhone">
						<img src={iPhone} alt="iPhone" />
					</div>
				</div>

				<div className="column3">
					<div className="bg_right">
						<img src={bg_start_right} alt="bg_start_right" style={{ width: "100%" }} />
					</div>
					<div className="absolute">
						<img src={watch} alt="iwatch" />
					</div>
				</div>
			</div>

			<div className="row-2">
				<p className="textHeader">
					“You really can&apos;t go wrong with MyNetDiary <br />as a scientifically-proven way to help you lose weight”
				</p>
				<img src={wh_logo} alt="" style={{ height: "3.8rem" }} />
				<div className="media">
					{[USToday, ABCNews, Fox, Times, Consumer, wsj, Cicago,].map((e, index) =>
						<img key={index} src={e} alt={e} />
					)}
				</div>
			</div>

			<SucceedGrid />
			<Testmonials />
			<SectionWit />
			<Sliders />
			<SectionBlog />
			<Compatible />
			<Cta />
		</div>
	)
}

export default Home