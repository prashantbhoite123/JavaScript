// const promissOne = new Promise((resolve, reject) => {
//     let error = false
//     if (!error) {
//         resolve("prashu babu kay karto")
//     } else {
//         reject('Error Was Detectted')
//     }
// });

// promissOne.then(() => {
//   console.log("promiss consume");
// });

// function getdata(getdataid, getnextdata) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", getdataid);
//       resolve("success");
//       if (getnextdata) {
//         console.log(getnextdata);
//       }
//     }, 6000);
//   });
// }

// getdata(1)
//   .then((res) => {
//     return getdata(2);
//   })
//   .then((res) => {
//     return getdata(3);
//   })
//   .then((res) => {
//     console.log("success");
//   });

// function getpromiss() {
//   return new Promise((resolve, reject) => {
//     console.log("iam a promiss ");
//     resolve("success");
//   });
// }

// let promiss = getpromiss();
// promiss.then(() => {
//   console.log("promiss consume");
// });

// promiss.catch(() => {
//   console.log("rejected");
// });

// function asyncfunc1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("feching dada 1");
//       resolve("success");
//     }, 4000);
//   });
// }
// function asyncfunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("feching dada 1");
//       resolve("success");
//     }, 8000);
//   });
// }

// let p1 = asyncfunc1();
// console.log("fetching data 1 ....");

// p1.then((res) => {
//   console.log(res);
//   let p2 = asyncfunc2();
//   console.log("fetching data 2 ...");
//   p2.then(() => {});
// });

// function asyncfunc(getdata1) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("data", getdata1);
//     });
//   });
// }

// asyncfunc(1)
//   .then((res) => {
//     return asyncfunc(2);
//   })
//   .then((res) => {
//     return asyncfunc(3);
//   })
//   .then((res) => {
//     console.log("success");
//   });

// const promissOne = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       resolve("promiss success");
//     } else {
//       reject("Error was detected");
//     }
//   }, 2000);
// }).then(() => {
//   console.log("promiss consume");
// });

function aysnkfun(data1) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", data1);
      resolve("success");
    }, 3000);
  });
}
console.log("getting data1...");
aysnkfun(1)
  .then((res) => {
    console.log("getting data2..");

    return aysnkfun(2);
  })
  .then((res) => {
    console.log("getting data 3");
    return aysnkfun(3);
  })
  .then((res) => {
    console.log(res);
  });
