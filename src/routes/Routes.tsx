
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Home} from "../views";
import {Error} from "../components";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />}

]);

const myRoutes = () => <RouterProvider router={router} />;

export default myRoutes;