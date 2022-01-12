const header = document.getElementById("header");
const main = document.getElementById("main");
const nav = document.getElementById("Top");

const headerHeight = header.scrollHeight;
const navHeight = nav.scrollHeight;

console.log(headerHeight);
document.body.onscroll = () => {
    let currentScroll = (window.scrollY);

    if (currentScroll > (headerHeight - navHeight)) {
        nav.style.backgroundColor = "#222";
    }
    else {
        nav.style.backgroundColor = "inherit";
    }
}