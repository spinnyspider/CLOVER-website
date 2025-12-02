// immediately mentioning i know ZERO javascript, hoping to fix that 
// but rn i just know jack shit about it, so this is EXTREMELY prone to vibe coding

// button toggle (mobile)
const menuButton = document.querySelector('.nav-toggle');
const menuLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', function() {
    menuLinks.classList.toggle('active');
});

// carousel functionality (very annotated, courtesy of deepseek)
// === 1. GET ALL THE ELEMENTS WE NEED ===
const slides = document.querySelectorAll('.slide');     // All slides
const dots = document.querySelectorAll('.dot');        // All dots
const prevBtn = document.querySelector('.prev');       // Left arrow
const nextBtn = document.querySelector('.next');       // Right arrow

// === 2. KEEP TRACK OF CURRENT SLIDE ===
let currentSlide = 0;  // Start at first slide (index 0)

// === 3. FUNCTION TO CHANGE SLIDES ===
function goToSlide(index) {
    // If we go past the last slide, loop back to first
    if (index >= slides.length) {
        currentSlide = 0;
    } 
    // If we go before first slide, loop to last
    else if (index < 0) {
        currentSlide = slides.length - 1;
    } 
    // Otherwise, just go to that slide
    else {
        currentSlide = index;
    }
    
    // === UPDATE VISUALS ===
    // Hide ALL slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Remove active from ALL dots
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    // Show the CURRENT slide
    slides[currentSlide].classList.add('active');
    
    // Highlight the CURRENT dot
    if (dots[currentSlide]) {
        dots[currentSlide].classList.add('active');
    }
}

// === 4. BUTTON EVENT LISTENERS ===
// When next button is clicked
nextBtn.addEventListener('click', () => {
    goToSlide(currentSlide + 1);  // Go to next slide
});

// When prev button is clicked
prevBtn.addEventListener('click', () => {
    goToSlide(currentSlide - 1);  // Go to previous slide
});

// === 5. DOT CLICKS (Optional but nice) ===
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        goToSlide(index);  // Go directly to that slide
    });
});

// === 6. AUTO-PLAY (Bonus!) ===
let autoPlayInterval;

function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
        goToSlide(currentSlide + 1);  // Auto-advance every 3 seconds
    }, 3000);
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

// Start auto-play when page loads
startAutoPlay();

// Optional: Pause auto-play when user hovers
const carousel = document.querySelector('.carousel');
carousel.addEventListener('mouseenter', stopAutoPlay);
carousel.addEventListener('mouseleave', startAutoPlay);