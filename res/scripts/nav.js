const header = document.getElementById("header");
const headerBkGd = document.getElementById("img-container");
const main = document.getElementById("main");
const nav = document.getElementById("Top");
const menu = document.getElementById("menu");

const headerHeight = header.scrollHeight;
const navHeight = nav.scrollHeight;

console.log(headerHeight);
document.body.onscroll = () => {
    let currentScroll = (window.scrollY);

    if (currentScroll > (headerHeight - navHeight) - 80) {
        nav.style.backgroundColor = "#2e2e2e";
    }
    else {
        nav.style.backgroundColor = "inherit";
    }
}

const currentURL = window.location.href
console.log(currentURL);

if (currentURL.toLowerCase().includes("about")) {
    console.log("On About");
    headerBkGd.style.backgroundImage = "url('./res/images/20220112_003743.jpg')";
} else if (currentURL.toLowerCase().includes("project")) {
    console.log("On Project");
    headerBkGd.style.backgroundImage = "url('./res/images/Buildings/Building_construction.jpg')";
} else if (currentURL.toLowerCase().includes("contact")) {
    console.log("On Contact");
    headerBkGd.style.backgroundImage = "url('./res/images/Logo.jpg')";
}

function animBar(x) {
    x.classList.toggle("change");

    x.classList.contains("change") ? menu.style.top = "0" : menu.style.top = "-338.5px";
}