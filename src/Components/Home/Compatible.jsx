import "./Compatible.css"
import Garmin from "../../assets/logo-garmin.png"
import AppHealth from "../../assets/logo-app-health.png"
import Samsung from "../../assets/logo-samsung-health.png"
import Apple from "../../assets/logo-apple-watch.png"
import Fitbit from "../../assets/logo-fitbit.png"
import Withings from "../../assets/logo-withings.png"
import GoogleFit from "../../assets/logo-google-fit.png"

function Compatible() {
	return (
		<div className="Compatible">
			<h1>Compatible With</h1>
			<div className="CompatibleLogo">
				{[Garmin, AppHealth, Samsung, Apple, Fitbit, Withings, GoogleFit].map((e, ind)=>
					<img key={ind} src={e} alt={e} />
				)}
			</div>
		</div>
	)
}

export default Compatible