// Set the last modification date
document.getElementById("modified").innerHTML = document.lastModified;

const nav = document.getElementById("nav")
var openMenu = true; // On mobile device, is true when the menu is opened

window.onscroll = function() { fixedMenuBar() }; // On dektop device, set the menu fixed
const sticky = nav.offsetTop;

// Mobile device: fixed the menu
function fixedMenuBar() {
    if (window.pageYOffset >= sticky) {
        nav.classList.add("sticky")
    } else {
        nav.classList.remove("sticky");
    }
}

// Desktop device: open-close the menu
function openNav(elemnt) {
    elemnt.classList.toggle("spin");
    if (openMenu)
        nav.style.display = "block";
    else
        nav.style.display = "none";

    openMenu = !openMenu;
}