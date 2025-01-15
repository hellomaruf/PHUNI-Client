import Dashboard from "../pages/admin/Dashboard";
import CreateFaculty from "../pages/faculty/CreateFaculty";

export const facultyPaths = [
    {
      name: "Dashboard",
      path: "dashboard",
      element: <Dashboard />,
    },
    {
      name: "User Management",
      children: [
        {
          name: "sample faculty",
          path: "sampleFaculty",
          element: <CreateFaculty />,
        },

      ],
    },
  ];
  