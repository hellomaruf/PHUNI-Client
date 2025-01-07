import { createBrowserRouter } from "react-router-dom";
import App from "../App";
// import Login from "../pages/login";
// import Dashboard from "../pages/admin/Dashboard";
import About from "../pages/About";
import { adminRoutes } from "./router.admin";
import Dashboard from "../pages/admin/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "/admin",
    element: <App />,
    children: adminRoutes,
  },
]);
export default router;
