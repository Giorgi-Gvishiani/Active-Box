let slideIndex = 1;

function plusSlide() {
    showSlider(slideIndex += 1);
}

function minusSlide() {
    showSlider(slideIndex -= 1);
}

function currentSlide(n) {
    showSlider(slideIndex = n);
}


function showSlider(n) {
    let slides = document.getElementsByClassName("client__item");
    let dots = document.getElementsByClassName("slider__dots__item");

    if (n < 1) {
        slideIndex = slides.length;
    }

    if (n > slides.length) {
        slideIndex = 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", " ");
    }

    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
}

showSlider(slideIndex);
