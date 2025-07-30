const elementOne = document.getElementById("nav");
const elementTwo = document.getElementById("hamburger-container");
const footer = document.getElementById("footer");
const footerSpan = footer.querySelector("#footer-span");
const year = new Date().getFullYear();

footerSpan.innerHTML = `&copy; ${year}`;

elementTwo.addEventListener("click", function () {
  elementOne.classList.toggle("show");
});
