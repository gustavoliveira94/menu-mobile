var menu = document.querySelector(".menu");

function menuMostrar() {
    if (menu.classList.contains("menu")) {
        menu.classList.toggle("menu-mostrar");
    } 
    else if (menu.classList.contains("menu-mostrar")) {
        menu.classList.toggle("menu");
    }
}