let menu = document.getElementsByClassName("menu__link");
let clicker = [];

let closeMenu = function() {
    openMenu = document.getElementsByClassName("menu menu_sub menu_active");
    openMenuArr = Array.from(openMenu);
    openMenuArr.forEach(function(element) {
        element.className = "menu menu_sub";
    });
}

for (let i = 0; i < menu.length; i++) {
    if (menu[i].nextElementSibling !== null) {
        clicker.push(
            menu[i].onclick = function() {
                if (menu[i].nextElementSibling.className === "menu menu_sub menu_active") {
                    menu[i].nextElementSibling.className = "menu menu_sub";
                } else {
                    closeMenu();
                    menu[i].nextElementSibling.className = "menu menu_sub menu_active";
                }
                return false;
            }
        )
    }
}

