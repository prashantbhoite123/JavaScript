// function api(data1) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", data1);
//       resolve(200);
//     }, 2000);
//   });
// }

// // async function getalldata() {
// //   await api(1);
// //   await api(2);
// //   await api(3);
// //   await api(4);
// //   await api(5);
// //   await api(6);
// // }

// f

// ****************** Asynck And await ***************
// function api(data1) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", data1);
//       resolve("success");
//     }, 2000);
//   });
// }

// async function getalldata() {
//   console.log("getting frist data ...");
//   await api(1);
//   console.log("getting second data ...");
//   await api(2);
//   console.log("getting third data ...");
//   await api(3);
//   console.log("getting fourth data ...");
//   await api(4);
//   console.log("getting fifth data ...");
//   await api(5);
// }

// function newdata(data) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", data);
//       resolve("success");
//     }, 2000);
//   });
// }

// async function getdata() {
//   console.log("getting data 1...");
//   await newdata(1);
//   console.log("getting data 2...");
//   await newdata(2);
//   console.log("getting data 3...");
//   await newdata(3);
//   console.log("getting data 4...");
//   await newdata(4);
//   console.log("getting data 5...");
//   await newdata(5);
// }

// *********************** Promiss ****************
// function alldata2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data 2 ... ");
//       resolve("success");
//     }, 5000);
//   });
// }

// let p1 = alldata1();

// console.log("fetching data 1....");
// p1.then((res) => {
//   let p2 = alldata2();
//   p2.then((res) => {});
//   console.log("fetching data 1....");
// });

// function getdata(data) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data1 ..", data);
//       resolve("success");
//     }, 4000);
//   });
// }

// console.log("getting data 1 ...");
// getdata(1)
//   .then((res) => {
//     console.log("getting data 2 ...");
//     return getdata(2);
//   })
//   .then((res) => {
//     console.log("getting data 3 ...");
//     return getdata(3);
//   })
//   .then((res) => {
//     console.log("getting data 4 ...");
//     return getdata(4);
//   })
//   .then((res) => {
//     console.log("getting data 5 ...");
//     return getdata(5);
//   })
//   .then((res) => {
//     console.log(res);
//   });

///  call back helll //
// function getdata(data, nextdata) {
//   setTimeout(() => {
//     console.log("data", data);
//     if (nextdata) {
//       nextdata();
//     }
//   }, 3000);
// }
// console.log("getting data  1 ...");
// getdata(1, () => {
//   console.log("getting data  2 ...");
//   getdata(2, () => {
//     console.log("getting data  3 ...");
//     getdata(3);
//   });
// });


const newdata = async () => {
    fetch
}