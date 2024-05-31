// const user = {
//   adds: "pathardi",
//   fullname: {
//     fristname: "prashant",
//     lastname: "bhoite",
//   },
//   data: [
//     (newdata = {
//       name: "keral",
//       pepole: "annaswami",
//       sarpanch: "muttuswami",
//     }),
//   ],
// }
// console.log(user.data[0].name)

// const obj1 = { 1: "a", 2: "b" }

// const obj2 = { 3: "c", 4: "d" }

// const obj3 = { ...obj1, ...obj2 }

// console.log(obj3)

// const company = {
//   name: "the bapp company",
//   founder: "Prashant Bhoite",
//   maneger: "bhushan dudhal",
//   employees: 1200,
// }

// console.log(Object.values(company))
// console.log(Object.keys(company))
// console.log(Object.entries(company))

// const user = {
//   name: "prashant",
//   add: "pathardi",
//   contact: 9021018032,
// }

// const { userinstructor } = user
// console.log(userinstructor)

// const navbar = ({ company }) => {}

// navbar((company = "prashant"))
// console.log(navbar)

/********* Rest oprator******** */
// function calculatecardprice(...num) {
//   return num
// }

// console.log(calculatecardprice(200, 400, 500))

// how to pass object in function

// const user = {
//   username: "prashant",
//   price: 999,
// }

// function handalObject(anyuser) {
//   console.log(
//     `my name is  ${anyuser.username} and my book  price  ${anyuser.price}`
//   )
// }
// handalObject(user)

const myarry = [200, 300, 400, 500]

function returnsecondvalue(getarry) {
  return getarry[1]
}

console.log(returnsecondvalue(myarry))
