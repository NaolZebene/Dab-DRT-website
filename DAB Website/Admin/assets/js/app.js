// const dashboard = document.querySelector("#dashboard");
const profile = document.querySelector("#profile");
const table = document.querySelector("#table");
const login = document.querySelector("#login");
const register = document.querySelector("#register");
const sidebartogglebtn = document.querySelector("#sidebarToggle");

// Events

profile.firstElementChild.addEventListener("click", () => {
  selectnav(profile);
});
table.firstElementChild.addEventListener("click", () => {
  selectnav(table);
});
login.firstElementChild.addEventListener("click", () => {
  selectnav(login);
});
register.firstElementChild.addEventListener("click", () => {
  selectnav(register);
});
sidebartogglebtn.addEventListener("click", () => {
  hidenavchild();
});

//functions
//definations
function selectnav(nav) {
  if (nav.children[1].classList.contains("hide")) {
    hidenavchild();
    nav.children[1].classList.toggle("hide");
  } else nav.children[1].classList.toggle("hide");
}
function togglenavchild() {
  profile.children[1].classList.toggle("hide");
  login.children[1].classList.toggle("hide");
  table.children[1].classList.toggle("hide");
  register.children[1].classList.toggle("hide");
}
function hidenavchild() {
  profile.children[1].classList.add("hide");
  login.children[1].classList.add("hide");
  table.children[1].classList.add("hide");
  register.children[1].classList.add("hide");
}
function shownavchild() {
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
