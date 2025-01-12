import { ReactNode } from "react";
import CreateAdmin from "../pages/admin/CreateAdmin";
import Dashboard from "../pages/admin/Dashboard";
import CreateFaculty from "../pages/faculty/CreateFaculty";
import CreateStudent from "../pages/student/CreateStudent";
import { NavLink } from "react-router-dom";

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

type Troute = {
  path: string;
  element: ReactNode;
};
type TSidebarItem = {
  key:string,
  label : ReactNode,
  children? : TSidebarItem[]
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

export const adminSidebarItems = adminPaths.reduce((acc : TSidebarItem[], item) => {
  console.log(item);
  
  if (item?.path && item?.name) {
    acc.push({
    key: item?.name,
    label: <NavLink to={`/admin/${item?.path}`}>{item?.name}</NavLink>,
    });
  }
  if (item?.children) {
    console.log(item?.children);
    
    acc.push({
      key: item?.name,
      label: item?.name,
      children : item?.children.map((child) =>({
        key : child?.name,
        label : <NavLink to={`/admin/${child?.path}`}>{child?.name}</NavLink>
      }))
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
