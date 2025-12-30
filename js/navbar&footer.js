// Navigation & Footer JavaScript - navbar-footer.js

// ============================================
// THEME TOGGLE FUNCTIONALITY
// ============================================

function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update icons
    updateThemeIcons(newTheme);
}

function updateThemeIcons(theme) {
    const icon = document.getElementById('themeIcon');
    if (icon) {
        if (theme === 'dark') {
            icon.className = 'fas fa-moon';
        } else {
            icon.className = 'fas fa-sun';
        }
    }
}

// Load saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcons(savedTheme);
    
    // Initialize mobile menu state
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
        mobileMenu.style.display = 'none';
    }
    
    // Add pulse animation to scroll button initially
    const scrollButton = document.getElementById('scrollBtn');
    if (scrollButton) {
        scrollButton.classList.add('pulse');
        
        // Remove pulse after 6 seconds
        setTimeout(() => {
            scrollButton.classList.remove('pulse');
        }, 6000);
    }
});

// ============================================
// MOBILE MENU FUNCTIONALITY
// ============================================

function toggleMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburger = document.querySelector('.hamburger');
    
    if (!mobileMenu || !hamburger) return;
    
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
    
    if (!mobileMenu || !navbar) return;
    
    // Check if click is outside navbar
    if (!navbar.contains(event.target) && mobileMenu.style.display === 'flex') {
        mobileMenu.style.display = 'none';
        if (hamburger) {
            hamburger.classList.remove('active');
        }
    }
});

// Close mobile menu when pressing Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const mobileMenu = document.getElementById('mobileMenu');
        const hamburger = document.querySelector('.hamburger');
        
        if (mobileMenu && mobileMenu.style.display === 'flex') {
            mobileMenu.style.display = 'none';
            if (hamburger) {
                hamburger.classList.remove('active');
            }
        }
    }
});

// Handle window resize
window.addEventListener('resize', function() {
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburger = document.querySelector('.hamburger');
    
    // Hide mobile menu on desktop view
    if (window.innerWidth > 768 && mobileMenu) {
        mobileMenu.style.display = 'none';
        if (hamburger) {
            hamburger.classList.remove('active');
        }
    }
});

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// ============================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ============================================

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
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// ============================================
// SCROLL BUTTON FUNCTIONALITY
// ============================================

let isAtBottom = false;
let scrollButton = null;
let scrollIcon = null;

// Initialize scroll button when page loads
document.addEventListener('DOMContentLoaded', function() {
    scrollButton = document.getElementById('scrollBtn');
    scrollIcon = document.getElementById('scrollIcon');
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
                scrollButton.style.background = 'linear-gradient(135deg, var(--accent-color), var(--accent-hover))';
            }
        }
    } else {
        // At top of page
        if (isAtBottom) {
            isAtBottom = false;
            scrollIcon.innerHTML = '⬇️';
            scrollButton.title = 'Go to Bottom';
            scrollButton.style.background = 'linear-gradient(135deg, var(--accent-color), var(--accent-hover))';
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