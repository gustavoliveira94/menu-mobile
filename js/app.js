var menu = document.querySelector(".menu");

function menuMostrar() {
    if (menu.classList.contains("menu")) {
        menu.classList.add("menu-mostrar");
        menu.classList.remove("menu");
    } 
    else if (menu.classList.contains("menu-mostrar")) {
        menu.classList.add("menu");
        menu.classList.remove("menu-mostrar");
    }
}