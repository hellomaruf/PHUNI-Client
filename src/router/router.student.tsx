import Dashboard from "../pages/admin/Dashboard";
import StudentRoute from "../pages/student/Student";

export const studentPaths = [
    {
      name: "Dashboard",
      path: "dashboard",
      element: <Dashboard />,
    },
    {
      name: "User Management",
      children: [
        {
          name: "sample student",
          path: "studentRoute",
          element: <StudentRoute />,
        },

      ],
    },
  ];