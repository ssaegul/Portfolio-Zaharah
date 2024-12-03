const carousel = document.getElementById('carousel');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
let currentIndex = 0;

function slideCarousel() {
    // Calculate the width of each item
    const itemWidth = items[0].offsetWidth;
    // Update the transform property to slide to the next item
    carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalItems; // Loop back to start after the last slide
    slideCarousel();
}

// Auto-slide every 3 seconds
setInterval(nextSlide, 3000);
