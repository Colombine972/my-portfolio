import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./pages/Home";
import CV from "./pages/CV";

export const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/cv", element: <CV /> },
		],
	},
]);
