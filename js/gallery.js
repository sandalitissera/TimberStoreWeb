// Updated product data with correct specifications from your provided information
const products = [
    {
        
        id: 1,
        name: "Albesia Wood",
        description: "Fast-growing, light yellowish wood with straight grain and smooth texture. Lightweight yet strong for its density, recognized for environmental benefits.",
        category: "Softwood",
        features: ["Lightweight", "Fast Growing", "Sustainable"],
        onSale: false,
        price: "LKR 45",
        priceValue: 45,
        image: "../TimberPhoto/albizia2.jpg",
        specs: {
            "Scientific Name": "Albizia falcataria",
            "Also Known As": "Sengon, Falcataria moluccana",
            "Color": "Pale yellow, lighter than most pine",
            "Growth Rate": "Rapid (harvestable in 3-5 years)",
            "Density": "Low to medium (0.24–0.30 after kiln drying)",
            "Workability": "Easy to machine, shape, and carve",
            "Common Uses": "Plywood, furniture, door cores, paper pulp"
        },
    },
    {
        id: 2,
        name: "Ginisapu Timber",
        description: "Fine-textured hardwood with yellowish to brown hue and fragrant flowers prized for perfume.",
        category: "Hardwood",
        features: ["Fine Texture", "Fragrant", "Premium Quality"],
        onSale: false,
        price: "LKR 125",
        priceValue: 125,
        image: "../TimberPhoto/mahogani.webp",
        specs: {
            "Scientific Name": "Magnolia champaca",
            "Also Known As": "Champak",
            "Color": "Yellow-brown with fine grain",
            "Growth Rate": "Moderate",
            "Density": "Medium",
            "Workability": "Easy to work, holds polish well",
            "Common Uses": "Furniture, cabinetry, decorative paneling, perfume"
        }
    },
    {
        id: 3,
        name: "Attoniya Wood",
        description: "Lightweight pale wood, good for carving and traditional medicinal applications.",
        category: "Softwood",
        features: ["Lightweight", "Easily Carved", "Medicinal Uses"],
        onSale: false,
        price: "LKR 35",
        priceValue: 35,
        image: "../TimberPhoto/attoniya.jpg",
        specs: {
            "Scientific Name": "Alstonia scholaris",
            "Also Known As": "Blackboard Tree",
            "Color": "Pale cream to light yellow",
            "Growth": "Fast-growing evergreen",
            "Density": "Low density",
            "Workability": "Easily shaped and carved",
            "Common Uses": "Pencils, household utensils, boxes, medicinal uses"
        }
    },
    {
        id: 4,
        name: "Grandis Wood",
        description: "Robust, pale yellow to reddish wood with straight grain, used in construction.",
        category: "Hardwood",
        features: ["Robust", "Straight Grain", "Construction Grade"],
        onSale: false,
        price: "LKR 75",
        priceValue: 75,
        image: "../TimberPhoto/grandis.jpeg",
        specs: {
            "Scientific Name": "Eucalyptus grandis",
            "Also Known As": "Rose Gum",
            "Color": "Pale yellow to pinkish",
            "Growth": "Fast-growing plantation species",
            "Density": "Medium to high",
            "Workability": "Moderate workability",
            "Common Uses": "Structural timber, beams, flooring, doors, plywood"
        }
    },
    {
        id: 5,
        name: "Pinus Wood",
        description: "Softwood with pale yellow to light brown color, resinous aroma, easy to machine.",
        category: "Softwood",
        features: ["Light Color", "Resinous", "Easy to Work"],
        onSale: false,
        price: "LKR 28",
        priceValue: 28,
        image: "../TimberPhoto/pinus.jpg",
        specs: {
            "Scientific Name": "Pinus spp.",
            "Color": "Pale yellow to light brown",
            "Aroma": "Resinous aroma",
            "Growth": "Fast-growing, extensively cultivated",
            "Density": "Low density",
            "Workability": "Very easy to cut, shape, and assemble",
            "Common Uses": "Construction framing, furniture, paneling, paper pulp"
        }
    },
    {
        id: 6,
        name: "Kempus Wood",
        description: "Durable hardwood with termite and fungi resistance, dense with high durability.",
        category: "Hardwood",
        features: ["Termite Resistant", "Fungi Resistant", "High Durability"],
        onSale: false,
        price: "LKR 95",
        priceValue: 95,
        image: "../TimberPhoto/kempus.jpeg",
        specs: {
            "Scientific Name": "Koompassia malaccensis",
            "Density": "Dense timber",
            "Durability": "High durability",
            "Pest Resistance": "Resistant to termites and fungi",
            "Strength": "High strength",
            "Common Uses": "Flooring, furniture, heavy construction"
        }
    },
    {
        id: 7,
        name: "Coconut Wood",
        description: "Dense, durable timber from coconut palms with natural termite resistance.",
        category: "Hardwood",
        features: ["Termite Resistant", "Dense", "Sustainable"],
        onSale: false,
        price: "LKR 40",
        priceValue: 40,
        image: "../TimberPhoto/coconut.jpg",
        specs: {
            "Scientific Name": "Cocos nucifera",
            "Color": "Light brown with distinctive grain",
            "Density": "Dense and durable",
            "Pest Resistance": "Naturally termite-resistant",
            "Workability": "Good for furniture making",
            "Common Uses": "Flooring, furniture, light construction"
        }
    },
    {
        id: 9,
        name: "Lunumidella Wood",
        description: "Light to moderate strength wood, often with insecticidal properties in bark and leaves.",
        category: "Hardwood",
        features: ["Insecticidal Properties", "Moderate Strength", "Traditional Use"],
        onSale: false,
        price: "LKR 70",
        priceValue: 70,
        image: "../TimberPhoto/lunumidella.jpg",
        specs: {
            "Scientific Name": "Melia azedarach",
            "Strength": "Light to moderate strength",
            "Special Properties": "Insecticidal properties in bark/leaves",
            "Workability": "Moderately workable",
            "Traditional Uses": "Medicine applications",
            "Common Uses": "Furniture, paneling, traditional medicine"
        }
    },
    {
        id: 10,
        name: "Toona",
        description: "Reddish durable wood prized in furniture and instruments with good stability and attractive grain.",
        category: "Hardwood",
        features: ["Durable", "Stable", "Attractive Grain"],
        onSale: false,
        price: "LKR 80",
        priceValue: 80,
        image: "../TimberPhoto/toona.jpg",
        specs: {
            "Scientific Name": "Toona ciliata, Toona sinensis",
            "Also Known As": "Red Cedar, Chinese Mahogany",
            "Color": "Reddish with attractive grain",
            "Stability": "Good dimensional stability",
            "Durability": "High durability",
            "Common Uses": "Furniture, cabinetry, musical instruments"
        }
    },
    {
        id: 11,
        name: "Teak Wood",
        description: "Highly durable wood naturally resistant to water, rot, and insects with golden-brown color and oily texture.",
        category: "Hardwood",
        features: ["Water Resistant", "Rot Resistant", "Insect Resistant"],
        onSale: false,
        price: "LKR 150",
        priceValue: 150,
        image: "../TimberPhoto/teak-wood.jpeg",
        specs: {
            "Scientific Name": "Tectona grandis",
            "Color": "Golden-brown color",
            "Texture": "Oily texture",
            "Water Resistance": "Highly water resistant",
            "Rot Resistance": "Naturally rot resistant",
            "Insect Resistance": "Naturally insect resistant",
            "Common Uses": "Outdoor furniture, shipbuilding, decking"
        }
    },
    {
        id: 12,
        name: "Kekatong Wood",
        description: "Heavy hardwood, dense and fungus resistant, suitable for indoor and outdoor use.",
        category: "Hardwood",
        features: ["Heavy Hardwood", "Fungus Resistant", "Indoor/Outdoor"],
        onSale: false,
        price: "LKR 100",
        priceValue: 100,
        image: "../TimberPhoto/kekatong.jpeg",
        specs: {
            "Scientific Name": "Cynometra spp.",
            "Wood Type": "Heavy hardwood",
            "Density": "Dense timber",
            "Fungus Resistance": "Resistant to fungus",
            "Versatility": "Indoor and outdoor use",
            "Common Uses": "Flooring, heavy construction, decorative work"
        }
    },
    {
        id: 13,
        name: "JackWood",
        description: "Light to moderate strength wood, often with insecticidal properties in bark and leaves.",
        category: "Hardwood",
        features: ["Insecticidal Properties", "Moderate Strength", "Traditional Use"],
        onSale: false,
        price: "LKR 70",
        priceValue: 70,
        image: "../TimberPhoto/lunumidella.jpg",
        specs: {
            "Scientific Name": "Melia azedarach",
            "Strength": "Light to moderate strength",
            "Special Properties": "Insecticidal properties in bark/leaves",
            "Workability": "Moderately workable",
            "Traditional Uses": "Medicine applications",
            "Common Uses": "Furniture, paneling, traditional medicine"
        }
    },
    {
        id: 14,
        name: "Sooriyamara",
        description: "Medium hardwood often used for furniture; nitrogen-fixing species benefiting soil with decorative grain.",
        category: "Hardwood",
        features: ["Decorative Grain", "Nitrogen-Fixing", "Medium Hardwood"],
        onSale: false,
        price: "LKR 90",
        priceValue: 90,
        image: "../TimberPhoto/suriyamara.webp",
        specs: {
            "Scientific Name": "Albizia lebbeck",
            "Wood Type": "Medium hardwood",
            "Grain Pattern": "Decorative grain",
            "Environmental Benefit": "Nitrogen-fixing species",
            "Soil Benefit": "Improves soil quality",
            "Common Uses": "Furniture, turnery, soil improvement"
        }
    },
    {
        id: 15,
        name: "Durian",
        description: "Light wood used locally with traditional medicinal uses in parts of the tree and moderate workability.",
        category: "Hardwood",
        features: ["Light Wood", "Medicinal Uses", "Local Species"],
        onSale: false,
        price: "LKR 65",
        priceValue: 65,
        image: "../TimberPhoto/Durian.jpeg",
        specs: {
            "Scientific Name": "Durio zibethinus",
            "Wood Type": "Light wood",
            "Workability": "Moderate workability",
            "Traditional Uses": "Medicinal applications in tree parts",
            "Usage": "Used locally",
            "Common Uses": "Construction, paneling, medicinal applications"
        }
    },
    {
        id: 16,
        name: "Mango",
        description: "Timber from fruiting trees no longer productive, eco-friendly choice with attractive finish and figure.",
        category: "Softwood",
        features: ["Eco-Friendly", "Attractive Finish", "Sustainable"],
        onSale: false,
        price: "LKR 55",
        priceValue: 55,
        image: "../TimberPhoto/mango-wood.jpg",
        specs: {
            "Scientific Name": "Mangifera indica",
            "Source": "Non-productive fruiting trees",
            "Sustainability": "Eco-friendly choice",
            "Appearance": "Attractive finish and figure",
            "Environmental Impact": "Sustainable harvesting",
            "Common Uses": "Furniture, musical instruments"
        }
    },
    {
        id: 17,
        name: "Kumbuk",
        description: "Durable, water-resistant hardwood used in boats and bridges with good rot and water resistance.",
        category: "Hardwood",
        features: ["Water Resistant", "Rot Resistant", "Marine Use"],
        onSale: false,
        price: "LKR 60",
        priceValue: 60,
        image: "../TimberPhoto/kumbuk.webp",
        specs: {
            "Scientific Name": "Terminalia arjuna",
            "Durability": "Highly durable",
            "Water Resistance": "Excellent water resistance",
            "Rot Resistance": "Good rot resistance",
            "Traditional Uses": "Traditional medicine",
            "Common Uses": "Heavy construction, boats, bridges"
        }
    },
    {
        id: 18,
        name: "Kasai",
        description: "Hard, durable timber with medicinal value in Ayurveda, featuring high strength and durability.",
        category: ["Hardwood", "Imported"],
        features: ["High Strength", "Medicinal Value", "Ayurvedic Use"],
        onSale: false,
        price: "LKR 105",
        priceValue: 105,
        image: "../TimberPhoto/kasai.jpeg",
        specs: {
            "Scientific Name": "Pterocarpus marsupium",
            "Strength": "High strength and durability",
            "Medicinal Value": "Used in Ayurveda",
            "Medical Applications": "Diabetes and wound treatment",
            "Durability": "Hard and durable timber",
            "Common Uses": "Furniture, construction, medicinal applications"
        }
    },
    {
        id: 19,
        name: "Imported Durian",
        description: "Imported durian variety with superior grain quality and consistency, perfect for high-end furniture and architectural millwork.",
        category: ["Hardwood", "Imported"],
        features: ["Superior Grain", "Consistent Quality", "Premium Grade"],
        onSale: false,
        price: "LKR 115",
        priceValue: 115,
        image: "../TimberPhoto/aja.webp",
        specs: {
            "Scientific Name": "Durio zibethinus (Premium Grade)",
            "Grade": "Superior imported variety",
            "Grain Quality": "Superior grain consistency",
            "Quality Control": "Consistent premium quality",
            "Origin": "Imported species",
            "Common Uses": "High-end furniture, architectural millwork"
        }
    },
    {
        id: 20,
        name: "Pine Wood",
        description: "Heavy hardwood, dense and fungus resistant, suitable for indoor and outdoor use.",
        category: ["Hardwood", "Imported"],
        features: ["Heavy Hardwood", "Fungus Resistant", "Indoor/Outdoor"],
        onSale: false,
        price: "LKR 100",
        priceValue: 100,
        image: "../TimberPhoto/kekatong.jpeg",
        specs: {
            "Scientific Name": "Cynometra spp.",
            "Wood Type": "Heavy hardwood",
            "Density": "Dense timber",
            "Fungus Resistance": "Resistant to fungus",
            "Versatility": "Indoor and outdoor use",
            "Common Uses": "Flooring, heavy construction, decorative work"
        }
    }
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

// Fixed apply filters function
function applyFilters() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const minPrice = parseFloat(document.getElementById('minPrice').value) || 0;
    const maxPrice = parseFloat(document.getElementById('maxPrice').value) || Infinity;
    const selectedCategories = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
        .map(cb => cb.value);

    filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.features.some(feature => feature.toLowerCase().includes(searchTerm));
        
        // Use priceValue for numeric comparison
        const matchesPrice = product.priceValue >= minPrice && product.priceValue <= maxPrice;
        
        // Handle both string and array categories
        const productCategories = Array.isArray(product.category) ? product.category : [product.category];
        const matchesCategory = selectedCategories.length === 0 ||
            selectedCategories.some(category => productCategories.includes(category));

        return matchesSearch && matchesPrice && matchesCategory;
    });

    displayProducts(filteredProducts);
}

// Fixed sort products function
function sortProducts() {
    const sortValue = document.getElementById('sortSelect').value;
    let sorted = [...filteredProducts];
    
    switch(sortValue) {
        case 'price-low':
            sorted.sort((a, b) => a.priceValue - b.priceValue);
            break;
        case 'price-high':
            sorted.sort((a, b) => b.priceValue - a.priceValue);
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