// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums
//   .map((num) => num * 10)
//   .map((num) => num + 1)
//   .filter((num) => num >= 41);

// console.log(newNums);

// **********************Reduce *************************

// let arr = [11, 2, 3, 4, 5, 6, 7, 8, 9];

// const temp = arr.map((num) => (num += num));
// console.log(temp);

// const pro = arr.filter((num) => (num += num));
// console.log(pro);

const nums = [1, 2, 3, 4, 5];

// const myNums = nums.reduce(function (acc, currval) {
//   console.log(`acc : ${acc} and currval : ${currval}`);
//   return acc + currval;
// });
// console.log(myNums);

const myNums = nums.reduce((acc, currval) => {
  return acc + currval;
});
console.log(myNums);
