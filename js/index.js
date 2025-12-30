// Index Page Main JavaScript - index.js

// ============================================
// PRODUCT DETAILS FUNCTIONALITY
// ============================================

function showProductDetails(productName) {
    alert(`You selected: ${productName}\n\nContact us for detailed specifications, pricing, and availability.`);
}

// ============================================
// FORM SUBMISSION HANDLER
// ============================================

function handleSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const project = formData.get('project');
    const message = formData.get('message');

    // Simulate form submission
    alert(`Thank you, ${name}! We've received your inquiry about "${project}". We'll contact you at ${email} within 24 hours.`);
    
    // Reset form
    event.target.reset();
}

// ============================================
// SCROLL ANIMATIONS (INTERSECTION OBSERVER)
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// ============================================
// INITIALIZE ON PAGE LOAD
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Animate product cards and gallery items on scroll
    const animatedElements = document.querySelectorAll('.product-card, .gallery-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});