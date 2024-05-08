// const promissOne = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('asynk task is completed');
//         resolve();
//     },1000)
// })

// promissOne.then(function () {
//     console.log("promise consumed");
// })

// new Promiss(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async task 2");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("Async 2 consume");
// });

// const promisThree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("promiss three");
//     resolve();
//   }, 1000);
// });

// promisThree.then(function () {
//   console.log("promiss was consumed");
// });

// const promissFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({
//       user: "prashant bhoite",
//       age: 18,
//       fashtion: "coder",
//       email: "prashuBabu@gmail.com",
//     });
//   }, 1000);
// });

// promissFour.then(function (user) {
//   console.log(user);
// });

// const promissFive = new Promise(function (resolve, reject) {
//   let errror = true;
//   setTimeout(function () {
//     if (!errror) {
//       resolve({ username: "prashant bhoite", prassword: "123" });
//     } else {
//       reject("ERROR wen wrong");
//     }
//   }, 1000);
// });
// promissFive
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((myuser) => {
//     console.log(myuser);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => console.log("finally promiss finaly resolve or rejected "));

// const promissSix = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       resolve({ username: "js", prassword: "123" });
//     } else {
//       reject("ERROR js went wromg");
//     }
//   }, 1000);
// });

async function consumePromisSix() {
  try {
    const newprommisfive = await promissFive;
    console.log(newprommisfive);
  } catch (error) {
    console.log(error);
  }
}

consumePromisSix();

const newPromiss = new Promise(function (resolve, reject) {
  setTimeout(() => {
    {
      resolve("promiss one resolve");
    }
  }, 1000);
});

newPromiss.then(function () {
  console.log("newPromiss consumee");
});

// const newPromisstwo = new Promise(function (resolve, reject) {
//   let error = false;
//   if (!error) {
//     resolve({ username: "prashant bhoite", password: "1234" });
//   } else {
//     reject("ERROR went here");
//   }
// })
//   .then(function (myuser) {
//     console.log(myuser);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(function () {
//     console.log("Bhushan dada");
//   });

