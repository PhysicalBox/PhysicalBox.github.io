function openMenu() {
    const menu = document.getElementById("menu");
    if (menu.style.display == "" || menu.style.display == "none")
        menu.style.display = "flex";
    else menu.style.display = "none";
}

function hide(section) {
    if (section.style.display == "" || section.style.display == "block") {
        section.style.display = "none";
        document.getElementById("check-" + section.id).checked = false;
    } else {
        section.style.display = "block";
        document.getElementById("check-" + section.id).checked = true;
    }
}

function addEditableArea() {
    const TEMPLATE = document.getElementsByTagName("template")[0];
    let analisiMain = document.getElementById("analisis-main");
    let clon = TEMPLATE.content.cloneNode(true);
    analisiMain.appendChild(clon);
}

function removeClone(child) {
    let element = child.parentElement;
    element.remove();
}