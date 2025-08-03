// NAVBAR FUNCTIONALITY
function toggleMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburger = document.querySelector('.hamburger');
    
    // Toggle mobile menu visibility
    if (mobileMenu.style.display === 'flex') {
        mobileMenu.style.display = 'none';
        hamburger.classList.remove('active');
    } else {
        mobileMenu.style.display = 'flex';
        hamburger.classList.add('active');
    }
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const mobileMenu = document.getElementById('mobileMenu');
    const navbar = document.getElementById('navbar');
    const hamburger = document.querySelector('.hamburger');
    
    // Check if click is outside navbar
    if (!navbar.contains(event.target) && mobileMenu.style.display === 'flex') {
        mobileMenu.style.display = 'none';
        hamburger.classList.remove('active');
    }
});

// Close mobile menu when pressing Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const mobileMenu = document.getElementById('mobileMenu');
        const hamburger = document.getElementById('hamburger');
        
        if (mobileMenu && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            hamburger.classList.remove('active');
            mobileMenu.style.display = 'none';
        }
    }
});

// Handle window resize
window.addEventListener('resize', function() {
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburger = document.querySelector('.hamburger');
    
    // Hide mobile menu on desktop view
    if (window.innerWidth > 768) {
        mobileMenu.style.display = 'none';
        hamburger.classList.remove('active');
    }
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});