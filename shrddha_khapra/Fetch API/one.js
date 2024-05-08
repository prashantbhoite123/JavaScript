const URL = "https://api.github.com/users/bhujbalpratik";

const h1 = document.querySelector("#name");
const login = document.querySelector("#login");
// const getfacts = async () => {
//   let responce = await fetch(URL);
//   let data = await responce.json();
//   console.log(data);
//   h1.innerText = data.name;
//   login.innerText = data.login;
// };

// getfacts();

// function getfacts() {
//   fetch(URL)
//     .then((responce) => {
//       return responce.json();
//     })
//     .then((data) => {
//       h1.innerText = data.name;
//       login.innerText = data.login;
//     });
// }

// async function getalldata() {
//   const response = await fetch(URL);
//   const data = await response.json();
//   console.log(data);
// }
// getalldata();

// function getdata() {
//   fetch(URL)
//     .then((responce) => {
//       return responce.json();
//     })
//     .then((data) => {
//       console.log(data);
//     });
// }
// getdata();

// function fetdata(data1, data2) {
//   setTimeout(() => {
//     console.log("data", data1);
//     if (data2) {
//       data2();
//     }
//   }, 2000);
// }
// console.log("fetching data 1..");
// fetdata(1, () => {
//   console.log("fetching data 2..");
//   fetdata(2, () => {
//     console.log("fetching data 3..");
//     fetdata(3, () => {
//       console.log("fetching data 4..");
//       fetdata(4);
//     });
//   });
// });

function getdata(data1) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", data1);
      resolve("success");
    }, 3000);
  });
}

let p1 = getdata(1);

p1.then((res) => {
  return getdata(2);
})
  .then((res) => {
    return getdata(3);
  })
  .then((res) => {
    return getdata(4);
  });
