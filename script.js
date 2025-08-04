const elementOne = document.getElementById("nav");
const elementTwo = document.getElementById("hamburger-container");
const footer = document.getElementById("footer");
const footerSpan = footer.querySelector("#footer-span");
const year = new Date().getFullYear();
const div = document.getElementById("time");
const time = document.getElementById("s-time");
const countNum = document.getElementById("count");
const popup = document.getElementById("popup");
const loginForm = document.getElementById("login-form");

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

// elementTwo.addEventListener("click", function () {
//   elementOne.classList.toggle("show");
// });

// openBtn.addEventListener("click", () => {
//   modal.classList.add("open");
//   console.log(first);
// });

// closeBtn.addEventListener("click", () => {
//   modal.classList.remove("open");
// });

// function openPopup() {
//   popup.classList.add("open-popup");
//   // console.log("Popup opened");
// }

// function closePopup() {
//   popup.classList.remove("open-popup");
// // }
// loginForm.addEventListener("submit", function (e) {
//   e.preventDefault(); // stop page refresh
//   openPopup(); // show popup
// });

// function closePopup() {
//   popup.classList.remove("open-popup");
// }
