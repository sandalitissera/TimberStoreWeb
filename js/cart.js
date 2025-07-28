// Product data with Sri Lankan wood types
/*
const products = [
    {
        id: 1,
        name: "Albesia Wood Planks",
        description: "High-quality Albesia wood planks, lightweight and perfect for furniture making and construction projects.",
        category: "Softwood",
        price: 65,
        originalPrice: 75,
        features: ["Lightweight", "Easy to Work", "Fast Growing"],
        onSale: true,
        image: "../images/bg1.jpeg",
        specs: {
            "Material": "Albesia Wood",
            "Dimensions": "2400mm x 200mm x 25mm",
            "Moisture Content": "8-12%",
            "Density": "Low to Medium",
            "Origin": "Tropical Asia"
        },
    },
    {
        id: 2,
        name: "Ginisapu Timber",
        description: "Premium Ginisapu wood known for its durability and beautiful grain pattern, ideal for high-end applications.",
        category: "Hardwood",
        price: 120,
        originalPrice: 140,
        features: ["Durable", "Beautiful Grain", "Premium Quality"],
        onSale: true,
        image: "../images/bg1.jpeg",
        specs: {
            "Material": "Ginisapu Wood",
            "Dimensions": "3000mm x 200mm x 30mm",
            "Moisture Content": "6-10%",
            "Density": "High",
            "Origin": "Sri Lankan Forests"
        }
    },
    {
        id: 3,
        name: "Attoniya Wood Boards",
        description: "Strong and reliable Attoniya wood boards, excellent for structural applications and heavy-duty construction.",
        category: "Hardwood",
        price: 95,
        originalPrice: null,
        features: ["Strong", "Structural", "Heavy-Duty"],
        onSale: false,
        image: "../images/bg1.jpeg",
        specs: {
            "Material": "Attoniya Wood",
            "Dimensions": "2500mm x 180mm x 25mm",
            "Moisture Content": "8-14%",
            "Density": "High",
            "Treatment": "Naturally Seasoned"
        }
    },
    {
        id: 4,
        name: "Grandis Eucalyptus",
        description: "Fast-growing Grandis eucalyptus timber, sustainable choice for various woodworking and construction needs.",
        category: "Hardwood",
        price: 80,
        originalPrice: 90,
        features: ["Sustainable", "Fast-Growing", "Versatile"],
        onSale: true,
        image: "../images/bg1.jpeg",
        specs: {
            "Material": "Grandis Eucalyptus",
            "Dimensions": "2800mm x 190mm x 22mm",
            "Moisture Content": "10-15%",
            "Density": "Medium to High",
            "Growth Rate": "Fast Growing Species"
        }
    },
    {
        id: 5,
        name: "Pinus Wood Flooring",
        description: "Affordable and versatile Pinus wood flooring, perfect for residential and commercial applications.",
        category: "Softwood",
        price: 45,
        originalPrice: null,
        features: ["Affordable", "Versatile", "Easy Installation"],
        onSale: false,
        image: "../images/bg1.jpeg",
        specs: {
            "Material": "Pinus Wood",
            "Dimensions": "2000mm x 140mm x 18mm",
            "Grade": "Construction Grade",
            "Treatment": "Kiln Dried",
            "Resin Content": "Natural Pine Resin"
        }
    },
    {
        id: 6,
        name: "Kempas Hardwood",
        description: "Extremely durable Kempas hardwood, known for its strength and resistance to wear, ideal for flooring.",
        category: "Hardwood",
        price: 150,
        originalPrice: 170,
        features: ["Extremely Durable", "Wear Resistant", "Premium"],
        onSale: true,
        image: "../images/bg1.jpeg",
        specs: {
            "Material": "Kempas Hardwood",
            "Dimensions": "2200mm x 180mm x 20mm",
            "Density": "Very High",
            "Hardness": "Extremely Hard",
            "Origin": "Southeast Asia"
        }
    },
    {
        id: 7,
        name: "Teak Wood",
        description: "Premium quality teak wood, renowned for its durability and water resistance, perfect for outdoor furniture.",
        category: "Hardwood",
        price: 200,
        originalPrice: 220,
        features: ["Water Resistant", "Durable", "Beautiful Grain"],
        onSale: true,
        image: "../images/bg1.jpeg",
        specs: {
            "Material": "Teak Wood",
            "Dimensions": "3000mm x 200mm x 25mm",
            "Moisture Content": "8-12%",
            "Density": "High",
            "Origin": "Southeast Asia"
        }
    },
    {
        id: 8,
        name: "Mahogany Lumber",
        description: "Luxurious mahogany lumber, perfect for fine furniture and cabinetry, known for its rich color and grain.",
        category: "Hardwood",
        price: 180,
        originalPrice: 200,
        features: ["Luxurious", "Rich Color", "Fine Grain"],
        onSale: false,
        image: "../images/bg1.jpeg",
        specs: {
            "Material": "Mahogany Wood",
            "Dimensions": "2500mm x 200mm x 30mm",
            "Moisture Content": "6-10%",
            "Density": "Medium to High",
            "Origin": "Central America"
        }
    }
];

// Cart functionality
let cart = JSON.parse(localStorage.getItem('timberCart')) || [];

// Initialize the cart page
function initializeCartPage() {
    displayCartItems();
    updateCartSummary();
    setupEventListeners();
}

// Setup event listeners
function setupEventListeners() {
    document.getElementById('checkoutBtn').addEventListener('click', handleCheckout);
}

// Display cart items
function displayCartItems() {
    const container = document.getElementById('cartItemsContainer');
    
    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>
                <div class="empty-cart-text">Your cart is empty</div>
                <a href="../html/gallery.html" class="continue-shopping-empty">Continue Shopping</a>
            </div>
        `;
        return;
    }

    container.innerHTML = cart.map(item => {
        const product = products.find(p => p.id === item.productId);
        if (!product) return '';
        
        return `
            <div class="cart-item" data-product-id="${product.id}">
                <div class="item-image">${product.name.charAt(0)}</div>
                <div class="item-details">
                    <h3 class="item-name">${product.name}</h3>
                    <div class="item-category">${product.category}</div>
                    <p class="item-description">${product.description}</p>
                    <div class="item-price">$${product.price.toFixed(2)}</div>
                    <div class="item-controls">
                        <div class="quantity-control">
                            <button class="quantity-btn minus-btn" data-product-id="${product.id}">-</button>
                            <input type="number" class="quantity-input" value="${item.quantity}" min="1" data-product-id="${product.id}">
                            <button class="quantity-btn plus-btn" data-product-id="${product.id}">+</button>
                        </div>
                        <button class="remove-btn" data-product-id="${product.id}">Remove</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Add event listeners to quantity buttons
    document.querySelectorAll('.minus-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.dataset.productId);
            updateQuantity(productId, -1);
        });
    });

    document.querySelectorAll('.plus-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.dataset.productId);
            updateQuantity(productId, 1);
        });
    });

    // Add event listeners to remove buttons
    document.querySelectorAll('.remove-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.dataset.productId);
            removeFromCart(productId);
        });
    });

    // Add event listeners to quantity inputs
    document.querySelectorAll('.quantity-input').forEach(input => {
        input.addEventListener('change', (e) => {
            const productId = parseInt(e.target.dataset.productId);
            const newQuantity = parseInt(e.target.value);
            if (!isNaN(newQuantity) && newQuantity > 0) {
                updateItemQuantity(productId, newQuantity);
            } else {
                e.target.value = 1;
                updateItemQuantity(productId, 1);
            }
        });
    });
}

// Update item quantity
function updateItemQuantity(productId, newQuantity) {
    const itemIndex = cart.findIndex(item => item.productId === productId);
    if (itemIndex !== -1) {
        cart[itemIndex].quantity = newQuantity;
        saveCart();
        updateCartSummary();
    }
}

// Update quantity
function updateQuantity(productId, change) {
    const itemIndex = cart.findIndex(item => item.productId === productId);
    if (itemIndex !== -1) {
        const newQuantity = cart[itemIndex].quantity + change;
        if (newQuantity > 0) {
            cart[itemIndex].quantity = newQuantity;
            saveCart();
            displayCartItems();
            updateCartSummary();
        } else {
            removeFromCart(productId);
        }
    }
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.productId !== productId);
    saveCart();
    displayCartItems();
    updateCartSummary();
    
    // Show success message
    showRemoveMessage(productId);
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('timberCart', JSON.stringify(cart));
}

// Update cart summary
function updateCartSummary() {
    const subtotal = cart.reduce((total, item) => {
        const product = products.find(p => p.id === item.productId);
        return total + (product ? product.price * item.quantity : 0);
    }, 0);
    
    const tax = subtotal * 0.1; // 10% tax
    const total = subtotal + tax;
    
    document.getElementById('subtotalValue').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('taxValue').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('totalValue').textContent = `$${total.toFixed(2)}`;
}

// Handle checkout
function handleCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    alert('Thank you for your order! This is a demo checkout process.');
    // In a real application, you would redirect to a payment page
    // window.location.href = 'checkout.html';
}

// Show remove message
function showRemoveMessage(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Create and show a temporary success message
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #e74c3c;
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        z-index: 10000;
        font-weight: 600;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        animation: slideInRight 0.5s ease;
    `;
    message.innerHTML = `
        <div>🗑️ ${product.name} removed from cart!</div>
    `;
    
    // Add slide-in animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(100%);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        @keyframes slideOutRight {
            from {
                opacity: 1;
                transform: translateX(0);
            }
            to {
                opacity: 0;
                transform: translateX(100%);
            }
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(message);
    
    // Remove message after 3 seconds
    setTimeout(() => {
        message.style.animation = 'slideOutRight 0.5s ease';
        setTimeout(() => {
            if (message.parentNode) {
                message.parentNode.removeChild(message);
            }
        }, 500);
    }, 3000);
}

// Payment Modal Variables
let currentStep = 1;
let billingData = {};
let paymentData = {};
let selectedPaymentMethod = 'card';

// Initialize payment modal functionality
function initializePaymentModal() {
    setupPaymentEventListeners();
}

// Setup event listeners for payment modal
function setupPaymentEventListeners() {
    // Payment modal controls
    document.getElementById('closePaymentModal').addEventListener('click', closePaymentModal);
    document.getElementById('closeBilling').addEventListener('click', closePaymentModal);
    document.getElementById('closeSuccessModal').addEventListener('click', closePaymentModal);

    // Step navigation
    document.getElementById('nextToPayment').addEventListener('click', validateBillingAndContinue);
    document.getElementById('backToBilling').addEventListener('click', goBackToBilling);
    document.getElementById('processPayment').addEventListener('click', processPayment);

    // Payment method selection
    document.querySelectorAll('.payment-method').forEach(method => {
        method.addEventListener('click', selectPaymentMethod);
    });

    // Form field formatting
    document.getElementById('cardNumber').addEventListener('input', formatCardNumber);
    document.getElementById('expiryDate').addEventListener('input', formatExpiryDate);
    document.getElementById('cvv').addEventListener('input', formatCVV);
    document.getElementById('phone').addEventListener('input', formatPhoneNumber);
}

// Open payment modal
function openPaymentModal() {
    document.getElementById('paymentModal').classList.add('active');
    updatePaymentSummary();
    resetPaymentForm();
}

// Close payment modal
function closePaymentModal() {
    document.getElementById('paymentModal').classList.remove('active');
    resetPaymentForm();
}

// Reset payment form to initial state
function resetPaymentForm() {
    currentStep = 1;
    updatePaymentSteps();
    clearFormData();
}

// Update payment steps visual indicator
function updatePaymentSteps() {
    document.querySelectorAll('.payment-step').forEach((step, index) => {
        step.classList.toggle('active', index + 1 <= currentStep);
    });

    document.querySelectorAll('.payment-form').forEach((form, index) => {
        form.classList.toggle('active', index + 1 === currentStep);
    });
}

// Validate billing information and continue to payment
function validateBillingAndContinue() {
    if (validateBillingForm()) {
        collectBillingData();
        currentStep = 2;
        updatePaymentSteps();
    }
}

// Go back to billing step
function goBackToBilling() {
    currentStep = 1;
    updatePaymentSteps();
}

// Validate billing form
function validateBillingForm() {
    let isValid = true;
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'postalCode'];

    requiredFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        const errorDiv = document.getElementById(fieldId + 'Error');
        
        if (!field.value.trim()) {
            showFieldError(field, errorDiv);
            isValid = false;
        } else {
            hideFieldError(field, errorDiv);
        }
    });

    // Email validation
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email.value && !emailRegex.test(email.value)) {
        showFieldError(email, emailError);
        emailError.textContent = 'Please enter a valid email address';
        isValid = false;
    }

    return isValid;
}

// Collect billing data
function collectBillingData() {
    billingData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        postalCode: document.getElementById('postalCode').value
    };
}

// Select payment method
function selectPaymentMethod(e) {
    document.querySelectorAll('.payment-method').forEach(method => {
        method.classList.remove('selected');
    });
    
    e.currentTarget.classList.add('selected');
    selectedPaymentMethod = e.currentTarget.dataset.method;
    
    // Show/hide card fields based on selection
    const cardFields = document.getElementById('cardPaymentFields');
    cardFields.style.display = selectedPaymentMethod === 'card' ? 'block' : 'none';
}

// Process payment
async function processPayment() {
    if (selectedPaymentMethod === 'card' && !validatePaymentForm()) {
        return;
    }

    // Show loading state
    const button = document.getElementById('processPayment');
    const buttonText = document.getElementById('paymentButtonText');
    const buttonSpinner = document.getElementById('paymentButtonSpinner');
    
    button.disabled = true;
    buttonText.style.display = 'none';
    buttonSpinner.style.display = 'inline-block';

    try {
        // Collect payment data
        collectPaymentData();
        
        // Simulate payment processing
        await simulatePaymentProcessing();
        
        // Send confirmation emails
        await sendConfirmationEmails();
        
        // Clear cart
        clearCart();
        
        // Show success
        currentStep = 3;
        updatePaymentSteps();
        
        // Generate order ID
        const orderId = generateOrderId();
        document.getElementById('orderConfirmationId').textContent = `Order ID: #${orderId}`;
        
    } catch (error) {
        alert('Payment processing failed. Please try again.');
        console.error('Payment error:', error);
    } finally {
        // Reset button state
        button.disabled = false;
        buttonText.style.display = 'inline';
        buttonSpinner.style.display = 'none';
    }
}

// Validate payment form
function validatePaymentForm() {
    if (selectedPaymentMethod !== 'card') return true;
    
    let isValid = true;
    const requiredFields = ['cardNumber', 'cardName', 'expiryDate', 'cvv'];

    requiredFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        const errorDiv = document.getElementById(fieldId + 'Error');
        
        if (!field.value.trim()) {
            showFieldError(field, errorDiv);
            isValid = false;
        } else {
            hideFieldError(field, errorDiv);
        }
    });

    // Card number validation
    const cardNumber = document.getElementById('cardNumber').value.replace(/\s/g, '');
    if (cardNumber && (cardNumber.length < 13 || cardNumber.length > 19)) {
        const errorDiv = document.getElementById('cardNumberError');
        showFieldError(document.getElementById('cardNumber'), errorDiv);
        errorDiv.textContent = 'Please enter a valid card number';
        isValid = false;
    }

    return isValid;
}

// Collect payment data
function collectPaymentData() {
    paymentData = {
        method: selectedPaymentMethod,
        cardNumber: selectedPaymentMethod === 'card' ? document.getElementById('cardNumber').value : null,
        cardName: selectedPaymentMethod === 'card' ? document.getElementById('cardName').value : null,
        expiryDate: selectedPaymentMethod === 'card' ? document.getElementById('expiryDate').value : null,
        cvv: selectedPaymentMethod === 'card' ? document.getElementById('cvv').value : null
    };
}

// Simulate payment processing
function simulatePaymentProcessing() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 2000);
    });
}

// Send confirmation emails
async function sendConfirmationEmails() {
    const orderDetails = {
        orderId: generateOrderId(),
        customer: billingData,
        items: cart,
        total: calculateCartTotal(),
        paymentMethod: selectedPaymentMethod,
        timestamp: new Date().toISOString()
    };

    // This would typically be done server-side
    // For demo purposes, we'll simulate the email sending
    console.log('Sending confirmation emails...');
    console.log('Customer email:', billingData.email);
    console.log('Store email: orders@sudharmatiber.com');
    console.log('Order details:', orderDetails);
    
    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 1000));
}

// Update payment summary
function updatePaymentSummary() {
    const summaryContainer = document.getElementById('paymentSummaryItems');
    const totalElement = document.getElementById('paymentTotal');
    
    let subtotal = 0;
    let summaryHTML = '';
    
    cart.forEach(item => {
        const product = products.find(p => p.id === item.productId);
        if (product) {
            const itemTotal = product.price * item.quantity;
            subtotal += itemTotal;
            summaryHTML += `
                <div class="summary-item">
                    <span>${product.name} × ${item.quantity}</span>
                    <span>$${itemTotal.toFixed(2)}</span>
                </div>
            `;
        }
    });
    
    const tax = subtotal * 0.1;
    const total = subtotal + tax;
    
    summaryHTML += `
        <div class="summary-item">
            <span>Subtotal</span>
            <span>$${subtotal.toFixed(2)}</span>
        </div>
        <div class="summary-item">
            <span>Tax (10%)</span>
            <span>$${tax.toFixed(2)}</span>
        </div>
    `;
    
    summaryContainer.innerHTML = summaryHTML;
    totalElement.textContent = `$${total.toFixed(2)}`;
}

// Calculate cart total
function calculateCartTotal() {
    const subtotal = cart.reduce((total, item) => {
        const product = products.find(p => p.id === item.productId);
        return total + (product ? product.price * item.quantity : 0);
    }, 0);
    
    const tax = subtotal * 0.1;
    return subtotal + tax;
}

// Clear cart
function clearCart() {
    cart = [];
    saveCart();
    displayCartItems();
    updateCartSummary();
}

// Generate order ID
function generateOrderId() {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 10000);
    return `ST${timestamp}${random}`.slice(-12);
}

// Form formatting functions
function formatCardNumber(e) {
    let value = e.target.value.replace(/\s/g, '').replace(/[^0-9]/gi, '');
    let formattedValue = value.match(/.{1,4}/g)?.join(' ');
    e.target.value = formattedValue ? formattedValue : value;
}

function formatExpiryDate(e) {
    let value = e.target.value.replace(/[^0-9]/g, '');
    if (value.length >= 2) {
        value = value.slice(0, 2) + '/' + value.slice(2, 4);
    }
    e.target.value = value;
}

function formatCVV(e) {
    e.target.value = e.target.value.replace(/[^0-9]/g, '');
}

function formatPhoneNumber(e) {
    let value = e.target.value.replace(/[^0-9]/g, '');
    e.target.value = value;
}

// Show field error
function showFieldError(field, errorDiv) {
    field.classList.add('error');
    errorDiv.style.display = 'block';
}

// Hide field error
function hideFieldError(field, errorDiv) {
    field.classList.remove('error');
    errorDiv.style.display = 'none';
}

// Clear form data
function clearFormData() {
    document.querySelectorAll('.payment-form input').forEach(input => {
        input.value = '';
        input.classList.remove('error');
    });
    document.querySelectorAll('.error-message').forEach(error => {
        error.style.display = 'none';
    });
}

// Update the existing handleCheckout function to open payment modal instead
function handleCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    openPaymentModal();
}

// Initialize payment functionality when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializePaymentModal();
});

// Initialize page when loaded
document.addEventListener('DOMContentLoaded', initializeCartPage);*/
