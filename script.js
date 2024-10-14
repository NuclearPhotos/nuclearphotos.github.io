const sliderContainer = document.getElementById('slider-container');
const slides = document.querySelectorAll('.item');
const slideTrack = document.querySelector('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const locationName = document.getElementById('location-name');
const locationDescription = document.getElementById('location-description');

let currentSlide = 0;
let totalSlides = slides.length;

function showSlide(index) {
    const slide = slides[index].querySelector('img');
    const name = slide.getAttribute('data-name');
    const description = slide.getAttribute('data-description');
    const backgroundImage = slide.getAttribute('data-bg');

    // Fade out text
    locationName.style.opacity = 0;
    locationDescription.style.opacity = 0;

    // Wait for fade out to finish, then update content
    setTimeout(() => {
        // Update the background image
        sliderContainer.style.backgroundImage = `url(${backgroundImage})`;

        // Update the text content
        locationName.textContent = name;
        locationDescription.textContent = description;

        // Slide transition (moving horizontally)
        const slideWidth = slides[index].offsetWidth + 15; // width of one slide + gap
        slideTrack.style.transform = `translateX(-${index * slideWidth}px)`;

        // Fade in text
        locationName.style.opacity = 1;
        locationDescription.style.opacity = 1;
    }, 100); // Wait for 500ms for fade out effect
}

// Next button click event
nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
});

// Previous button click event
prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
});

// Initialize the first slide
showSlide(currentSlide);
