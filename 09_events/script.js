const box = document.querySelector(".box");

// box.addEventListener("mouseup", (e) => {
//   e.target.classList.toggle("hide");
// });

const body = document.querySelector("body");

body.addEventListener("mouseup", (e) => {
  e.preventDefault();
  e.target.innerHTML += `<div>prashu<div>`;
  e.target.innerHTML.classList.add("hide");
});
