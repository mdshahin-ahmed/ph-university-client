// export const adminPaths2 = [
//   {
//     name: "Dashboard",
//     path: "dashboard",
//     element: "AD",
//   },
//   {
//     name: "User Management",
//     children: [
//       {
//         name: "Create Admin",
//         path: "create-admin",
//         element: "CA",
//       },
//       {
//         name: "Create Faculty",
//         path: "create-faculty",
//         element: "CF",
//       },
//       {
//         name: "Create Student",
//         path: "create-student",
//         element: "CS",
//       },
//     ],
//   },
// ];

// // const newArray = adminPaths2.reduce((acc, item) => {
// //   if (item.path && item.element) {
// //     acc.push({
// //       path: item.path,
// //       element: item.element,
// //     });
// //   }
// //   if (item.children) {
// //     item.children.forEach((child) => {
// //       acc.push({
// //         path: child.path,
// //         element: child.element,
// //       });
// //     });
// //   }
// //   return acc;
// // }, []);

// const newArray = adminPaths2.reduce((acc, item) => {
//   if (item.path && item.name) {
//     acc.push({
//       key: item.name,
//       label: "Nav_Link",
//     });
//   }
//   if (item.children) {
//     acc.push({
//       key: item.name,
//       label: item.name,
//       children: item.children.map((child) => ({
//         key: child.name,
//         label: "Nav_link",
//       })),
//     });
//   }
//   return acc;
// }, []);

// console.log(newArray);

const obj = {
  name: "shahin",
  role: "admin",
  age: 18,
  greet: () => {
    return "Shahin";
  },
};

console.log(JSON.stringify(obj));
