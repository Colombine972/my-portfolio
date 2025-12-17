import { createBrowserRouter } from "react-router";
import App from "./App";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CV from "./pages/CV";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

export const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/about", element: <About /> },
			{ path: "/skills", element: <Skills /> },
			{ path: "/projects", element: <Projects /> },
			{ path: "/contact", element: <Contact /> },
			{ path: "/cv", element: <CV /> },
		],
	},
]);
