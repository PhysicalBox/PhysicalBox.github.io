
function changeMode() {
    let body = document.body;
    body.classList.toggle("light-Mode");

    if (getCookie("mode") == "light-Mode") setCookie("mode", "dark-Mode", 30);
    else setCookie("mode", "light-Mode", 30);
}

// Dark mode coockie
function setCookie(cname, cvalue, exdays) {
    let date = new Date();
    date.setTime(date.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cookieName) {
    let name = cookieName + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookies = decodedCookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) == 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}

function darkModeCookie() {
    let mode = getCookie("mode");
    if (mode != "") {
        if (mode == "light-Mode") {
            let body = document.body;
            body.classList.toggle("light-Mode");
        }
    } else {
        setCookie("mode", "dark-mode", 30);
    }
}