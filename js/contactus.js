// Form submission
function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const projectType = formData.get('projectType');
    const budget = formData.get('budget');
    const timeline = formData.get('timeline');
    const message = formData.get('message');

    // Simulate form submission
    let responseMessage = `Thank you, ${firstName} ${lastName}! We've received your inquiry`;
    if (projectType) {
        responseMessage += ` about ${projectType}`;
    }
    responseMessage += `. We'll contact you at ${email}`;
    if (phone) {
        responseMessage += ` or ${phone}`;
    }
    responseMessage += ` within 24 hours with a detailed response and quote.`;

    alert(responseMessage);
    
    // Reset form
    event.target.reset();
}

// Animation on scroll
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

document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.contact-info-card, .hours-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});