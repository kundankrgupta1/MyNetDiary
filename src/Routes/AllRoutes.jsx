import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";

function AllRoutes() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
			</Routes>
		</div>
	)
}

export default AllRoutes