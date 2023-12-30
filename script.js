// Navigation Javascript code
const menuIconButton = document.getElementById("menu");
navMenu = document.getElementById("nav_list");
//   show-menu
if (menuIconButton) {
    menuIconButton.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    })
}

//close-menu
const closeBtn = document.getElementById("close-btn");
function closeMenu() {
    navMenu.classList.remove("show-menu");
}
closeBtn.addEventListener("click", closeMenu);

// close when click on each nav-link
const navItem = document.querySelectorAll(".nav-item");
navItem.forEach(n => n.addEventListener("click", closeMenu));

