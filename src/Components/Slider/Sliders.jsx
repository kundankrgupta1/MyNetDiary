import matthew from "../../assets/success-matthew-warner.png"
import paul from "../../assets/success-paul-reynolds.png"
import rick from "../../assets/success-rick-white.png"
import carrie from "../../assets/success-story-carrie.png"
import joe from "../../assets/success-story-joe.png"
import julie from "../../assets/success-story-julie.png"
import Arrow from "../../assets/whiteArrow.svg"
import { Link } from "react-router-dom"
import "./Sliders.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Sliders() {
	const data = [
		{
			img: julie,
			name: "Julie Martel",
			h3: "LOST 71 LB (35%) AND MAINTAINED AFTER 492 DAYS.",
			p: "“My life changed. My life is beautiful! I am beautiful!!!”",
		},
		{
			img: carrie,
			name: "Carrie Hammond",
			h3: "LOST AND MAINTAINED 103 LBS (40%)	AFTER 616 DAYS.",
			p: "“I love having a desire to go out and experience new things without worrying about if I'm too fat to do something.”",
		},
		{
			img: paul,
			name: "Paul Reynolds",
			h3: "LOST 50LB (22%) AND MAINTAINED AFTER 345 DAYS.",
			p: "“The ability to track using MyNetDiary has been so important.”",
		},
		{
			img: joe,
			name: "Joe Balfe",
			h3: "LOST 65LB (20%) AND MAINTAINED AFTER 216 DAYS.",
			p: "“MyNetDiary helps me know exactly how many calories I consume.”",
		},
		{
			img: rick,
			name: "Rick White",
			h3: "LOST 91 LB (30%) AND MAINTAINED AFTER 881 DAYS.",
			p: "“I went body surfing for 4 hours straight with my 28 year old son and felt great!”",
		},
		{
			img: matthew,
			name: "Matthew Warner",
			h3: "LOST 29LB (14%) AND MAINTAINED AFTER 379 DAYS.",
			p: "“I used your product religiously for two years and it made a huge difference in my health and happiness.”",
		}
	]

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	};

	return (
		<div className="slider-container">
			<div className="sliderSpace"></div>
			<Slider {...settings}>
				{data.map((item, index) => (
					<div className="slider" key={index}>
						<div className="slider_data">
							<div className="images">
								<img src={item.img} alt={item.img} />
							</div>
							<div className="sliderText">
								<h1>{item.name}</h1>
								<h3>{item.h3}</h3>
								<p>{item.p}</p>
								<Link className="link">read success story <img src={Arrow} alt="" style={{ width: "0.8rem" }} /></Link>
							</div>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
}

export default Sliders