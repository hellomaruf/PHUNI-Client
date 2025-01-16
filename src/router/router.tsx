import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { adminPaths } from "./router.admin";
import { routesGenerators } from "../utils/routesGenerator";
import { facultyPaths } from "./router.faculty";
import Login from "../pages/admin/Login";
import ProtectedRoute from "../components/layouts/protectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    children: routesGenerators(adminPaths),
  },
  {
    path: "/faculty",
    element: <App />,
    children: routesGenerators(facultyPaths),
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
export default router;
