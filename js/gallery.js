// Product data with Sri Lankan wood types and realistic pricing
const products = [
    {
        id: 1,
        name: "Albesia Wood",
        description: "High-quality Albesia wood planks, lightweight and perfect for furniture making and construction projects.",
        category: "Softwood",
        features: ["Lightweight", "Easy to Work", "Fast Growing"],
        onSale: true,
        price: 45,
        originalPrice: 60,
        image: "../TimberPhoto/albizia2.jpg",
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
        features: ["Luxurious", "Rich Color", "Fine Grain"],
        onSale: false,
        price: 125,
        image: "../TimberPhoto/mahogani.webp",
        specs: {
            "Material": "Mahogany Wood",
            "Dimensions": "2500mm x 200mm x 30mm",
            "Moisture Content": "6-10%",
            "Density": "Medium to High",
            "Origin": "Central America"
        }
    },
    {
        id: 9,
        name: "Coconut Wood",
        description: "Sustainable coconut palm wood, known for its unique grain patterns and eco-friendly properties, perfect for furniture and decorative items.",
        category: "Hardwood",
        features: ["Sustainable", "Unique Grain", "Eco-Friendly"],
        onSale: false,
        price: 40,
        image: "../TimberPhoto/coconut.jpg",
        specs: {
            "Material": "Coconut Palm Wood",
            "Dimensions": "2500mm x 200mm x 30mm",
            "Moisture Content": "8-12%",
            "Density": "Medium",
            "Origin": "Sri Lanka"
        }
    },
    {
        id: 10,
        name: "Toona",
        description: "Premium Toona wood with reddish-brown heartwood, highly valued for furniture making and construction due to its durability and workability.",
        category: "Hardwood",
        features: ["Durable", "Reddish-Brown", "Workable"],
        onSale: false,
        price: 80,
        image: "../TimberPhoto/toona.jpg",
        specs: {
            "Material": "Toona Wood",
            "Dimensions": "2500mm x 200mm x 30mm",
            "Moisture Content": "6-10%",
            "Density": "Medium to High",
            "Origin": "Asia"
        }
    },
    {
        id: 11,
        name: "Lunumidella Wood",
        description: "Native Sri Lankan hardwood with excellent strength properties, traditionally used for construction and quality furniture making.",
        category: "Hardwood",
        features: ["Strong", "Traditional", "Local Species"],
        onSale: false,
        price: 70,
        image: "../TimberPhoto/lunumidella.jpg",
        specs: {
            "Material": "Lunumidella Wood",
            "Dimensions": "2500mm x 200mm x 30mm",
            "Moisture Content": "8-12%",
            "Density": "High",
            "Origin": "Sri Lanka"
        }
    },
    {
        id: 12,
        name: "JackWood",
        description: "Jackfruit tree wood with golden-yellow heartwood, known for its termite resistance and suitability for both indoor and outdoor applications.",
        category: "Hardwood",
        features: ["Termite Resistant", "Golden Color", "Versatile"],
        onSale: false,
        price: 50,
        image: "../TimberPhoto/jack wood.jpg",
        specs: {
            "Material": "Jackfruit Wood",
            "Dimensions": "2500mm x 200mm x 30mm",
            "Moisture Content": "8-12%",
            "Density": "Medium",
            "Origin": "South Asia"
        }
    },
    {
        id: 13,
        name: "Sooriyamara",
        description: "Premium Sri Lankan hardwood known for its beautiful grain and excellent finishing properties, ideal for high-end furniture and cabinetry.",
        category: "Hardwood",
        features: ["Beautiful Grain", "Premium Quality", "Fine Finish"],
        onSale: false,
        price: 90,
        image: "../TimberPhoto/suriyamara.webp",
        specs: {
            "Material": "Sooriyamara Wood",
            "Dimensions": "2500mm x 200mm x 30mm",
            "Moisture Content": "6-10%",
            "Density": "High",
            "Origin": "Sri Lanka"
        }
    },
    {
        id: 14,
        name: "Durian",
        description: "Tropical hardwood from durian trees, featuring light-colored wood with good strength properties, suitable for furniture and construction.",
        category: "Hardwood",
        features: ["Light Colored", "Strong", "Tropical Species"],
        onSale: false,
        price: 65,
        image: "../TimberPhoto/Durian.jpeg",
        specs: {
            "Material": "Durian Wood",
            "Dimensions": "2500mm x 200mm x 30mm",
            "Moisture Content": "8-12%",
            "Density": "Medium to High",
            "Origin": "Southeast Asia"
        }
    },
    {
        id: 15,
        name: "Mango",
        description: "Mango wood with attractive grain patterns and warm golden tones, increasingly popular for sustainable furniture and decorative pieces.",
        category: "Softwood",
        features: ["Sustainable", "Golden Tones", "Attractive Grain"],
        onSale: false,
        price: 55,
        image: "../TimberPhoto/mango-wood.jpg",
        specs: {
            "Material": "Mango Wood",
            "Dimensions": "2500mm x 200mm x 30mm",
            "Moisture Content": "8-12%",
            "Density": "Medium",
            "Origin": "India/Southeast Asia"
        }
    },
    {
        id: 16,
        name: "Kumbuk",
        description: "Traditional Sri Lankan hardwood with excellent durability and weather resistance, commonly used for construction and outdoor applications.",
        category: "Hardwood",
        features: ["Weather Resistant", "Durable", "Traditional Use"],
        onSale: false,
        price: 60,
        image: "../TimberPhoto/kumbuk.webp",
        specs: {
            "Material": "Kumbuk Wood",
            "Dimensions": "2500mm x 200mm x 30mm",
            "Moisture Content": "8-12%",
            "Density": "High",
            "Origin": "Sri Lanka"
        }
    },
    {
        id: 17,
        name: "Kasai",
        description: "Imported hardwood with fine texture and good finishing properties, valued for premium furniture making and interior applications.",
        category: ["Hardwood", "Imported"], // Keep as Imported
        features: ["Fine Texture", "Premium Quality", "Good Finish"],
        onSale: false,
        price: 105,
        image: "../TimberPhoto/kasai.jpeg",
        specs: {
            "Material": "Kasai Wood",
            "Dimensions": "2500mm x 200mm x 30mm",
            "Moisture Content": "6-10%",
            "Density": "Medium to High",
            "Origin": "Africa"
        }
    },
    {
    id: 18,
    name: "Aja (Durian)",
    description: "Imported durian variety with superior grain quality and consistency, perfect for high-end furniture and architectural millwork.",
    category: ["Hardwood", "Imported"], // Keep as Imported
    features: ["Superior Grain", "Consistent Quality", "Premium Grade"],
    onSale: false,
    price: 115,
    image: "../TimberPhoto/aja.webp",
    specs: {
        "Material": "Aja (Durian) Wood",
        "Dimensions": "2500mm x 200mm x 30mm",
        "Moisture Content": "6-10%",
        "Density": "Medium to High",
        "Origin": "Malaysia"
    }
    },
    {
        id: 19,
        name: "Kekatong",
        description: "Malaysian hardwood known for its stability and attractive appearance, excellent for furniture making and interior construction work.",
        category: ["Hardwood", "Imported"], // Keep as Imported
        features: ["Stable", "Attractive", "Versatile"],
        onSale: false,
        price: 100,
        image: "../TimberPhoto/kekatong.jpeg",
        specs: {
            "Material": "Kekatong Wood",
            "Dimensions": "2500mm x 200mm x 30mm",
            "Moisture Content": "6-10%",
            "Density": "Medium to High",
            "Origin": "Malaysia"
        }
    },
    {
        id: 20,
        name: "Pine Wood",
        description: "Classic softwood with light color and straight grain, widely used for construction, furniture, and general carpentry applications.",
        category: ["Softwood", "Imported"], // This is already correct
        features: ["Light Color", "Straight Grain", "Versatile"],
        onSale: false,
        price: 30,
        image: "../TimberPhoto/pine.jpeg",
        specs: {
            "Material": "Pine Wood",
            "Dimensions": "2500mm x 200mm x 30mm",
            "Moisture Content": "8-15%",
            "Density": "Low to Medium",
            "Origin": "Europe/North America"
        }
    },
];

let filteredProducts = [...products];

// Initialize the page
function initializePage() {
    displayProducts(products);
    setupEventListeners();
}

// Setup event listeners
function setupEventListeners() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', debounce(applyFilters, 300));
    
    const priceInputs = document.querySelectorAll('.price-input');
    priceInputs.forEach(input => {
        input.addEventListener('input', debounce(applyFilters, 300));
    });
    
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });
}

// Display products function with price integration
function displayProducts(products) {
    const grid = document.getElementById('productsGrid');
    const noResults = document.getElementById('noResults');
    
    if (products.length === 0) {
        grid.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }
    
    noResults.style.display = 'none';
    grid.innerHTML = products.map(product => `
        <div class="product-card" onclick="showProductDetails(${product.id})">
            <div class="product-image" style="background-image: url('${product.image}'); background-size: cover; background-position: center;">
                ${product.onSale ? '<div class="sale-badge">Sale!</div>' : ''}
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">
                    <span class="current-price">${product.price}</span>
                    ${product.originalPrice ? `<span class="original-price">${product.originalPrice}</span>` : ''}
                </div>
                <div class="product-features">
                    ${product.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// Apply filters with price range
function applyFilters() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const minPrice = parseFloat(document.getElementById('minPrice').value) || 0;
    const maxPrice = parseFloat(document.getElementById('maxPrice').value) || Infinity;
    const selectedCategories = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
        .map(cb => cb.value);

    filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm);
        const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
        const matchesCategory = selectedCategories.length === 0 ||
            selectedCategories.some(category => product.category.includes(category));

        return matchesSearch && matchesPrice && matchesCategory;
    });

    displayProducts(filteredProducts);
}

// Sort products with price options
function sortProducts() {
    const sortValue = document.getElementById('sortSelect').value;
    let sorted = [...filteredProducts];
    
    switch(sortValue) {
        case 'price-low':
            sorted.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sorted.sort((a, b) => b.price - a.price);
            break;
        case 'name-asc':
            sorted.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            sorted.sort((a, b) => b.name.localeCompare(a.name));
            break;
        default:
            sorted = [...filteredProducts];
    }
    
    displayProducts(sorted);
}

// Show product details modal function
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Update modal image to show actual product image
    const modalImage = document.getElementById('modalImage');
    modalImage.style.backgroundImage = `url('${product.image}')`;
    modalImage.style.backgroundSize = 'cover';
    modalImage.style.backgroundPosition = 'center';
    modalImage.textContent = ''; // Remove any text content

    document.getElementById('modalTitle').textContent = product.name;
    document.getElementById('modalDescription').textContent = product.description;
    document.getElementById('modalCurrentPrice').textContent = `${product.price}`;

    const originalPriceEl = document.getElementById('modalOriginalPrice');
    if (product.originalPrice) {
        originalPriceEl.textContent = `${product.originalPrice}`;
        originalPriceEl.style.display = 'inline';
    } else {
        originalPriceEl.style.display = 'none';
    }

    const specsEl = document.getElementById('modalSpecs');
    specsEl.innerHTML = Object.entries(product.specs)
        .map(([key, value]) => `
            <div class="spec-item">
                <span class="spec-label">${key}:</span>
                <span>${value}</span>
            </div>
        `).join('');

    document.getElementById('productModal').style.display = 'block';
}

// Close modal
function closeModal() {
    document.getElementById('productModal').style.display = 'none';
}

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('productModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Initialize page when loaded
document.addEventListener('DOMContentLoaded', initializePage);
