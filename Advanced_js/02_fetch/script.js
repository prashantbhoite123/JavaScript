// async function fetchData() {
//   const responce = await fetch(
//     "https://official-joke-api.appspot.com/random_joke"
//   );
//   const data = await responce.json();
//   show(data);
// }

// fetchData();

// const heading = document.querySelector("h1");

// function show(data) {
//   console.log(data);
//     heading.innerHTML = data.punchline;
// }

// async function fethcdata() {
//   let responce = await fetch(
//     "https://official-joke-api.appspot.com/random_joke"
//   );
//   let data = await responce.json();
//   console.log(data.punchline);
// }

// fethcdata();

function fetchData() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((responce) => {
      return responce.json();
    })
    .then((data) => {
      console.log(data.punchline);
    });
}

fetchData();
