import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import ViewReport from "../pages/ViewReport";
import Admin from "../pages/Admin";
import Temp from "../pages/Temp";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/view-report/:userId",
        element: <ViewReport />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/temp",
        element: <Temp />,
      },
    ],
  },
]);
