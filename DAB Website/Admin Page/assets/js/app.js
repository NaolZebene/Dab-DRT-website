const dashboard = document.querySelector("#dashboard");
const profile = document.querySelector("#profile");
const table = document.querySelector("#table");
const login = document.querySelector("#login");
const register = document.querySelector("#register");
const sidebartogglebtn = document.querySelector("#sidebarToggle");

// Events
dashboard.firstElementChild.addEventListener("click", () => {
  dashboard.children[1].classList.toggle("hide");
});
profile.firstElementChild.addEventListener("click", () => {
  profile.children[1].classList.toggle("hide");
});
table.firstElementChild.addEventListener("click", () => {
  table.children[1].classList.toggle("hide");
});
login.firstElementChild.addEventListener("click", () => {
  login.children[1].classList.toggle("hide");
});
register.firstElementChild.addEventListener("click", () => {
  register.children[1].classList.toggle("hide");
});
sidebartogglebtn.addEventListener("click", () => {
  hidenavchild();
});

//functions
//definations
function togglenavchild() {
  dashboard.children[1].classList.toggle("hide");
  profile.children[1].classList.toggle("hide");
  login.children[1].classList.toggle("hide");
  table.children[1].classList.toggle("hide");
  register.children[1].classList.toggle("hide");
}
function hidenavchild() {
  dashboard.children[1].classList.add("hide");
  profile.children[1].classList.add("hide");
  login.children[1].classList.add("hide");
  table.children[1].classList.add("hide");
  register.children[1].classList.add("hide");
}
function shownavchild() {
  dashboard.children[1].classList.remove("hide");
  profile.children[1].classList.remove("hide");
  login.children[1].classList.remove("hide");
  table.children[1].classList.remove("hide");
  register.children[1].classList.remove("hide");
}
function initialize() {
  hidenavchild();
}

//initialize
//set default condition for the page
initialize();
