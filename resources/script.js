// immediately mentioning i know ZERO javascript, hoping to fix that 
// but rn i just know jack shit about it, so this is EXTREMELY prone to vibe coding

// button toggle (mobile)
const menuButton = document.querySelector('.nav-toggle');
const menuLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', function() {
    menuLinks.classList.toggle('active');
});