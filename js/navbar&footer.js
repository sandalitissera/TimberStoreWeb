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

// // Navbar scroll effect
// window.addEventListener('scroll', function() {
//     const navbar = document.getElementById('navbar');
//     if (window.scrollY > 50) {
//         navbar.classList.add('scrolled');
//     } else {
//         navbar.classList.remove('scrolled');
//     }
// });

// Add this JavaScript to handle the scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Optional: Add smooth scrolling for better UX
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

let isAtBottom = false;
let scrollButton = null;
let scrollIcon = null;

// Initialize scroll button when page loads
document.addEventListener('DOMContentLoaded', function() {
    scrollButton = document.getElementById('scrollBtn');
    scrollIcon = document.getElementById('scrollIcon');
    
    // Add pulse animation initially
    scrollButton.classList.add('pulse');
    
    // Remove pulse after 6 seconds
    setTimeout(() => {
        scrollButton.classList.remove('pulse');
    }, 6000);
});

// Handle scroll button click
function handleScroll() {
    if (isAtBottom) {
        // Scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    } else {
        // Scroll to bottom
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }
}

// Monitor scroll position
window.addEventListener('scroll', function() {
    if (!scrollButton || !scrollIcon) return;

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    // Check if user has scrolled more than 300px from top
    if (scrollTop > 300) {
        // Check if near bottom (within 100px)
        if (scrollTop + windowHeight >= documentHeight - 100) {
            if (!isAtBottom) {
                isAtBottom = true;
                scrollIcon.innerHTML = '⬆️';
                scrollButton.title = 'Go to Top';
                scrollButton.style.background = 'linear-gradient(135deg, #28a745, #20c997)';
            }
        } else {
            if (isAtBottom) {
                isAtBottom = false;
                scrollIcon.innerHTML = '⬇️';
                scrollButton.title = 'Go to Bottom';
                scrollButton.style.background = 'linear-gradient(135deg, #d4a574, #e6b885)';
            }
        }
    } else {
        // At top of page
        if (isAtBottom) {
            isAtBottom = false;
            scrollIcon.innerHTML = '⬇️';
            scrollButton.title = 'Go to Bottom';
            scrollButton.style.background = 'linear-gradient(135deg, #d4a574, #e6b885)';
        }
    }
});

// Smooth scroll behavior for older browsers
if (!('scrollBehavior' in document.documentElement.style)) {
    function smoothScrollTo(targetY, duration = 1000) {
        const startY = window.scrollY;
        const difference = targetY - startY;
        const startTime = performance.now();

        function step() {
            const progress = Math.min((performance.now() - startTime) / duration, 1);
            const ease = progress * (2 - progress); // ease-out
            window.scrollTo(0, startY + difference * ease);
            if (progress < 1) {
                requestAnimationFrame(step);
            }
        }
        requestAnimationFrame(step);
    }

    // Override handleScroll for older browsers
    window.handleScroll = function() {
        if (isAtBottom) {
            smoothScrollTo(0);
        } else {
            smoothScrollTo(document.body.scrollHeight);
        }
    };
}
