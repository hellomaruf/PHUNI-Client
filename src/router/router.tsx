import { createBrowserRouter } from "react-router-dom";
import App from "../App";
// import Login from "../pages/login";
import Dashboard from "../pages/admin/Dashboard";
import About from "../pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "/admin",
    element: <App />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
]);
export default router;