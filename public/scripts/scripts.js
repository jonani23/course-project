//Show/hide menu items 
const hamburgerIcons = document.querySelector(".menu");
const menuItems = document.querySelector(".topnav");
const toggleMenu = function () {
    menuItems.classList.toggle("open");
}
hamburgerIcons.addEventListener("click", toggleMenu);