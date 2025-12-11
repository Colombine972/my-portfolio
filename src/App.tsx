import { Link, Outlet } from "react-router";
import "./styles/Home.css";

function App() {
	return (
		<>
			<nav>
				<Link to="/">Home</Link>
			</nav>
			<main>
				<Outlet />
			</main>
		</>
	);
}

export default App;
