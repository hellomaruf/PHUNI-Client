import { ReactNode } from "react";
import CreateAdmin from "../pages/admin/CreateAdmin";
import Dashboard from "../pages/admin/Dashboard";
import CreateFaculty from "../pages/faculty/CreateFaculty";
import CreateStudent from "../pages/student/CreateStudent";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    element: <Dashboard />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "/admin/createAdmin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Admin",
        path: "/admin/createFaculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Admin",
        path: "/admin/createStudent",
        element: <CreateStudent />,
      },
    ],
  },
];

type Troute = {
  path: string;
  element: ReactNode;
};

export const adminRoutes = adminPaths.reduce((acc: Troute[], item) => {
  if (item.path && item.element) {
    acc.push({
      path: item.path,
      element: item.element,
    });
  }
  if (item.children) {
    item.children.forEach((child) => {
      acc.push({
        path: child.path,
        element: child.element,
      });
    });
  }
  return acc;
}, []);

// export const adminPaths = [
//   {
//     path: "dashboard",
//     element: <Dashboard />,
//   },
//   {
//     path: "createAdmin",
//     element: <CreateAdmin />,
//   },
//   {
//     path: "createFaculty",
//     element: <CreateFaculty />,
//   },
//   {
//     path: "createStudent",
//     element: <CreateStudent />,
//   },
// ];
