document.getElementById("modified").innerHTML = document.lastModified;
window.onscroll = function() { myFunction() };

const nav = document.getElementById("nav")
const sticky = nav.offsetTop;
var openMenu = true;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        nav.classList.add("sticky")
    } else {
        nav.classList.remove("sticky");
    }
}


function openNav(elemnt) {
    elemnt.classList.toggle("spin");
    nav.classList.add("sticky")
    if (openMenu)
        nav.style.display = "block";
    else
        nav.style.display = "none";

    openMenu = !openMenu;
}