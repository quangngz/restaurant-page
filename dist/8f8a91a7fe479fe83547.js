import "./style.css"

document.addEventListener("DOMContentLoaded", () => {
    let slideIndex  = 0; 
    const slides = document.querySelectorAll('.slide'); 
    const slideContainer = document.getElementById('slideContainer'); 
    const dots = document.querySelectorAll('.dot'); 
    const totalSlides = slides.length; 

    function showSlide(value) {
        if (value >= totalSlides) {
            slideIndex = 0;  
        } else if (value < 0) {
            slideIndex = totalSlides - 1; 
        } else {
            slideIndex = value; 
        }
        const translateX = -slideIndex * (100 / totalSlides);
        slideContainer.style.transform = `translateX(${translateX}%)`;
        updateDots();
    }

    function changeSlide(direction) {
        showSlide(slideIndex + direction); 
    }
    function currentSlide(value) {
        showSlide(value - 1); 
    }

    function updateDots() {
        dots.forEach((dot, index) => {
            if (index === slideIndex) {
                dot.className = "dotActive"; 
            } else {
                dot.className = "dot"; 
            }
        }); 
    }
    showSlide(0); 
    document.querySelector(".prev").addEventListener("click", () => changeSlide(-1));
    document.querySelector(".next").addEventListener("click", () => changeSlide(1));
    dots.forEach((dot, idx) => {
        dot.addEventListener("click", () => currentSlide(idx + 1));
    });
});