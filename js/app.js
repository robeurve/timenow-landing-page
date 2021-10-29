const navButton = document.querySelector("#navbar-button");
const menu = document.querySelector("#menu");

navButton.addEventListener("click", (e) => {
  e.preventDefault();

  menu.classList.toggle("show");
});
