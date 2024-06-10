document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email-input').value;
    var formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScMAZTmZDjFS4kMWUKYePKXJwIZwStUWiJED_kYBxgrXbDe7g/formResponse';
    var formData = new FormData();
    formData.append('entry.206854154', email); // Use your actual entry ID here

    fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
    }).then(function(response) {
        alert('Thank you for getting in touch!');
        document.getElementById('contact-form').reset();
    }).catch(function(error) {
        alert('There was an error. Please try again.');
    });
});

// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Slide-in animation on scroll
const slidersLeft = document.querySelectorAll('.slide-in-left');
const slidersRight = document.querySelectorAll('.slide-in-right');
const heroSection = document.querySelector('.hero');

const appearOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('slide-in-left')) {
                entry.target.classList.add('slide-in-left-visible');
            } else if (entry.target.classList.contains('slide-in-right')) {
                entry.target.classList.add('slide-in-right-visible');
            } else if (entry.target.classList.contains('hero')) {
                entry.target.classList.add('hero-visible');
            }
        } else {
            if (entry.target.classList.contains('slide-in-left')) {
                entry.target.classList.remove('slide-in-left-visible');
            } else if (entry.target.classList.contains('slide-in-right')) {
                entry.target.classList.remove('slide-in-right-visible');
            } else if (entry.target.classList.contains('hero')) {
                entry.target.classList.remove('hero-visible');
            }
        }
    });
}, appearOptions);

slidersLeft.forEach(slider => {
    appearOnScroll.observe(slider);
});

slidersRight.forEach(slider => {
    appearOnScroll.observe(slider);
});

appearOnScroll.observe(heroSection);

// Carousel functionality
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.next-btn');
const prevButton = document.querySelector('.prev-btn');
const slideWidth = slides[0].getBoundingClientRect().width;

// Arrange the slides next to one another
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

// When I click left, move slides to the left
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;

    if (prevSlide) {
        moveToSlide(track, currentSlide, prevSlide);
    }
});

// When I click right, move slides to the right
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;

    if (nextSlide) {
        moveToSlide(track, currentSlide, nextSlide);
    }
});
