import CreateAdmin from "../pages/admin/CreateAdmin";
import Dashboard from "../pages/admin/Dashboard";
import CreateFaculty from "../pages/faculty/CreateFaculty";
import CreateStudent from "../pages/student/CreateStudent";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <Dashboard />,
  },

  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "createAdmin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "createFaculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Student",
        path: "createStudent",
        element: <CreateStudent />,
      },
    ],
  },
];
