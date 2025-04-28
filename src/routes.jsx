import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Directors from "./pages/Directors";
import Actors from "./pages/Actors";
import Movie from "./pages/Movie";
import ErrorPage from "./pages/ErrorPage";

// Export the routes array for use in tests
export const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/directors",
    element: <Directors />,
  },
  {
    path: "/actors",
    element: <Actors />,
  },
  {
    path: "/movie/:id",
    element: <Movie />,
  },
];

// Create the router for the app
const router = createBrowserRouter(routes);

export default router;