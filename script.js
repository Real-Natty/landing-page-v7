const elementOne = document.getElementById("nav");
const elementTwo = document.getElementById("hamburger-container");
const footer = document.getElementById("footer");
const footerSpan = footer.querySelector("#footer-span");
const year = new Date().getFullYear();
const div = document.getElementById("time");
const time = document.getElementById("s-time");
const countNum = document.getElementById("count");

footerSpan.innerHTML = `&copy; ${year}`;
setInterval(() => {
  const timer = new Date();
  const hour = timer.getHours();
  const minutes = timer.getMinutes();
  const seconds = timer.getSeconds();
  time.textContent = `${hour} : ${minutes} : ${seconds}`;
}, 600);

// let count = 0;

// setInterval(() => {
//   countNum.textContent = `Count : ${count++}`;
// }, 600);
// function printTime() {
//   let time = new Date().toLocaleTimeString();
//   console.log(time);
// }
// setInterval(printTime, 1000);
// let num = onabort;
// function printNumber() {
//   num++;
//   console.log(num);
//   if (num >= 3) {
//     clearInterval(printer);
//   }
// }
// setInterval(printNumber, 600);

elementTwo.addEventListener("click", function () {
  elementOne.classList.toggle("show");
});
