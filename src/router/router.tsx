import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import { adminPaths } from "./router.admin";
import Dashboard from "../pages/admin/Dashboard";
import { routesGenerators } from "../utils/routesGenerator";
import { facultyPaths } from "./router.faculty";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <App />,
    children: routesGenerators(adminPaths),
  },
  {
    path: "/faculty",
    element: <App />,
    children: routesGenerators(facultyPaths),
  },
]);
export default router;
