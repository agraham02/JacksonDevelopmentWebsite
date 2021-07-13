var banner = document.getElementById("slideshow");
var slideIndex = 0;

var slides = [
    {image: "url('./res/images/Buildings/Building1.jpg')", text: "2015 - Anna's Hope"}, 
    {image: "url('./res/images/Buildings/Building2.jpg')", text: "2017 - Magens Junction Phase 1"}, 
    {image: "url('./res/images/Buildings/Building3.jpg')", text: "2021 - Magens Junction Phase 2"} 
]

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var dots = document.getElementsByClassName("dot");

    if (n >= slides.length) {slideIndex = 0;}
    if (n < 0) {slideIndex = slides.length - 1;}

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    banner.style.backgroundImage = slides[slideIndex].image;
    document.getElementById("text").innerHTML = slides[slideIndex].text;
    dots[slideIndex].className += " active";
}

showSlides(slideIndex);