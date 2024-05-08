// const jsUser = {
//   name: "prashant Bhoite",
//   address: "pathardi",
//   email: "prashant@gmail.com",
// };

// // console.log(jsUser.email);

// jsUser.email = "prashant@chatgpt.com";

// // console.log(jsUser.email);

// jsUser.greeting = function () {
//   console.log(`hello js function ${this.email}`);
// };

const tanderUser = {};

(tanderUser.id = 1213242),
  (tanderUser.name = "prashant Bhoite"),
  (tanderUser.address = "pathardi"),
  console.log(tanderUser);

// const regulorname = {
//   email: "some@gmail.com",
//   fullname: {
//     username: {
//       fristname: "prashaant",
//       lastname: "Bhoite",
//     },
//   },
// };

// console.log(regulorname.fullname.username);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

const obj3 = { ...obj1, ...obj2 };

const user = [
  {
    id: 1,
    email: "prashu@gmail.com",
  },
  {
    id: 2,
    email: "ganu@gmail.com",
  },
  {
    id: 3,
    email: "pb@gmail.com",
  },
];

user[1].email;
console.log(tanderUser);
console.log(Object.keys(tanderUser));
console.log(Object.values(tanderUser));
console.log(Object.entries(tanderUser));

console.log(tanderUser.hasOwnProperty(`id`));
