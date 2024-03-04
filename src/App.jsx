import { BrowserRouter } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import AllRoutes from "./Routes/AllRoutes"
import Footer from "./Components/Footer/Footer"

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<AllRoutes />
				<Footer />
			</BrowserRouter>
		</>
	)
}

export default App