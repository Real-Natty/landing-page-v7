const elementOne = document.getElementById("nav");
const elementTwo = document.getElementById("hamburger-container");

elementTwo.addEventListener("click", function () {
  elementOne.classList.toggle("show");
});
