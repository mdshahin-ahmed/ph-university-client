export const adminPaths2 = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: "AD",
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: "CA",
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: "CF",
      },
      {
        name: "Create Student",
        path: "create-student",
        element: "CS",
      },
    ],
  },
];

const newArray = adminPaths2.reduce((acc, item) => {
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

console.log(newArray);
