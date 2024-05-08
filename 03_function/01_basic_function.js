// let prashu = (username) => {
//     if (username === undefined) {
//         console.log("please Enter username");
//     } else console.log('ok your number is here');
// }

// prashu("keshav");

function calculate(...num1) {
  return num1;
}

console.log(calculate(200, 400, 500));

// const user = {
//   userName: "prashant",
//   price: 199,
// };

handaluser({
    userName: "prashant",
    price: 399,
    city:"Banglore",
})

function handaluser(anyuser) {
  console.log(
    `This is username ${anyuser.userName} and it's price is ${anyuser.price}`
  );
}

const userarry = [200,400,300,599]

function returnSecondValue(getarry) {
    return getarry[1];

}

console.log(returnSecondValue(userarry));


