const menu = document.getElementById("menu");
const banner = document.querySelector(".banner");
const divMenu = document.querySelector(".div-menu");


menu.addEventListener("click", () => {
  console.log("oui");
//  divMenu.classList.remove("before")
 divMenu.classList.toggle("after")
});
