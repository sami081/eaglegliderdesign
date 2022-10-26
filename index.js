const menu = document.getElementById("menu");
const banner = document.querySelector(".banner");
const divMenu = document.querySelector(".div-menu");
const title = document.querySelector(".div-title");
console.log(title);

menu.addEventListener("click", () => {
  console.log("oui");
  //  divMenu.classList.remove("before")
  divMenu.classList.toggle("after");
  title.classList.toggle("after-title");
});
