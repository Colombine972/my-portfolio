import { createBrowserRouter } from "react-router";
import App from "./App";
import CV from "./pages/CV";
import Home from "./pages/Home";

export const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/cv", element: <CV /> },
		],
	},
]);
