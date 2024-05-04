
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Home} from "@views/index";
import {Error} from "@components/error/Error404";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />}

]);

const myRoutes = () => <RouterProvider router={router} />;

export default myRoutes;