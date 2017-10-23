var menu = document.querySelector(".menu");
window.onscroll = function() {fixar()};

function menuMostrar() {
    if (menu.classList.contains("menu")) {
        menu.classList.toggle("menu-mostrar");
    } 
    else if (menu.classList.contains("menu-mostrar")) {
        menu.classList.toggle("menu");
    }
}

function fixar() {
    if(menu.classList.contains("menu") && document.documentElement.scrollTop > 150) {
        menu.classList.add("fixo");
    } 
    else {
        menu.classList.remove("fixo");
    }
}
