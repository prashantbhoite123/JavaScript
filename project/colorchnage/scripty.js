const stop = document.querySelector(".stop");
const start = document.querySelector(".start");
const body = document.querySelector("body");
const date = document.querySelector(".date");

let startTime = "";
start.addEventListener("click", (e) => {
  startTime = setInterval(() => {
    const one = Math.floor(Math.random() * 255 + 1);
    const two = Math.floor(Math.random() * 255 + 1);
    const three = Math.floor(Math.random() * 255 + 1);
    const color = `rgb(${one},${two},${three})`;
    console.log(color);
    date.innerHTML = color;
    body.style.backgroundColor = color;
  }, 2000);
});

const stopchangingColor = () => {
  clearInterval(startTime);
};

stop.addEventListener("click", (e) => {
  stopchangingColor();
});
