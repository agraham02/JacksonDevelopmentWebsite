const banner = document.getElementById("slideshow");
const menu = document.getElementById("menu");
let slideIndex = 0;

const slides = [
    {image: "url('./res/images/Buildings/Building3_new.jpg')", text: "2021 - Magens Junction Phase 2"},
    {image: "url('./res/images/Buildings/Building1.jpg')", text: "2015 - Anna's Hope"}, 
    {image: "url('./res/images/Buildings/Building2.jpg')", text: "2017 - Magens Junction Phase 1"}     
]

function plusSlides(n) {
    slideIndex += n
    showSlides();
}

function currentSlide(n) {
    slideIndex = n;
    showSlides();
}

function showSlides() {
    const dots = document.getElementsByClassName("dot");

    if (slideIndex >= slides.length) {slideIndex = 0;}
    if (slideIndex < 0) {slideIndex = slides.length - 1;}

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    banner.style.backgroundImage = slides[slideIndex].image;
    document.getElementById("text").innerHTML = slides[slideIndex].text;
    dots[slideIndex].className += " active";
}

showSlides();
setInterval(() => plusSlides(1), 5000);

function animBar(x) {
    x.classList.toggle("change");

    x.classList.contains("change") ? menu.style.top = "0" : menu.style.top = "-338.5px";
}