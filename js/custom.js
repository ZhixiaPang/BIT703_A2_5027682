// ==================
// BACK TO TOP
// ==================
window.addEventListener('scroll', function() {
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    if (window.scrollY > 300) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }
});

// ==================
// NEWSLETTER FORM
// ==================
document.addEventListener('DOMContentLoaded', function() {
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for subscribing!');
      this.reset();
    });
  }

  const shopNewsletterForm = document.getElementById('shopNewsletterForm');
  if (shopNewsletterForm) {
    shopNewsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for subscribing!');
      this.reset();
    });
  }
});

// ==================
// PRODUCT DATA
// ==================
const products = [
  {
    id: 1,
    name: 'Alpine Backpack',
    price: 120,
    image: 'images/cat-bp1.jpg',
    description: 'The Alpine Backpack is perfect for day hikes and overnight adventures. Features multiple compartments, padded straps and a hydration sleeve.',
    stars: 4,
    reviews: '24 Reviews',
    models: ['30L', '45L', '60L'],
    category: 'backpack'
  },
  {
    id: 2,
    name: 'Explorer Tent',
    price: 300,
    image: 'images/cat-t1.jpg',
    description: 'The Explorer Tent is a lightweight 3-season tent perfect for camping in New Zealand conditions. Easy to set up and weather resistant.',
    stars: 4,
    reviews: '18 Reviews',
    models: ['2 Person', '3 Person', '4 Person'],
    category: 'tent'
  },
  {
    id: 3,
    name: 'Summit Sleeping Bag',
    price: 150,
    image: 'images/cat-s1.jpg',
    description: 'Stay warm on cold nights with the Summit Sleeping Bag. Rated to -10°C and packed with premium insulation.',
    stars: 3,
    reviews: '12 Reviews',
    models: ['Regular', 'Long'],
    category: 'sleeping-bag'
  },
  {
    id: 4,
    name: 'Summit Rain Jacket',
    price: 180,
    image: 'images/raincoat1.jpg',
    description: 'Stay dry in any conditions with the Summit Rain Jacket. Fully waterproof, breathable and packable.',
    stars: 5,
    reviews: '31 Reviews',
    models: ['Small', 'Medium', 'Large', 'XL'],
    category: 'jacket'
  },
  {
    id: 5,
    name: 'Trek Backpack',
    price: 140,
    image: 'images/cat-bp2.jpg',
    description: 'The Trek Backpack is ideal for multi-day hikes. Durable, lightweight and packed with storage.',
    stars: 4,
    reviews: '19 Reviews',
    models: ['40L', '55L'],
    category: 'backpack'
  },
  {
    id: 6,
    name: 'Adventure Backpack',
    price: 160,
    image: 'images/cat-bp3.jpg',
    description: 'The Adventure Backpack is built for serious trekkers. Ergonomic design with rain cover included.',
    stars: 5,
    reviews: '27 Reviews',
    models: ['50L', '65L'],
    category: 'backpack'
  },
  {
    id: 7,
    name: 'Basecamp Tent',
    price: 350,
    image: 'images/cat-t2.jpg',
    description: 'The Basecamp Tent is a spacious 4-season tent built for harsh NZ conditions.',
    stars: 4,
    reviews: '15 Reviews',
    models: ['3 Person', '4 Person'],
    category: 'tent'
  },
  {
    id: 8,
    name: 'Ultralight Tent',
    price: 280,
    image: 'images/cat-t3.jpg',
    description: 'The Ultralight Tent is perfect for fast and light adventures. Packs down to the size of a water bottle.',
    stars: 4,
    reviews: '22 Reviews',
    models: ['1 Person', '2 Person'],
    category: 'tent'
  },
  {
    id: 9,
    name: 'Alpine Sleeping Bag',
    price: 200,
    image: 'images/cat-s2.jpg',
    description: 'The Alpine Sleeping Bag is rated to -20°C for extreme cold conditions.',
    stars: 5,
    reviews: '16 Reviews',
    models: ['Regular', 'Long'],
    category: 'sleeping-bag'
  },
  {
    id: 10,
    name: 'Ultralight Sleeping Bag',
    price: 130,
    image: 'images/cat-s3.jpg',
    description: 'The Ultralight Sleeping Bag is perfect for summer camping. Lightweight and compact.',
    stars: 3,
    reviews: '9 Reviews',
    models: ['Regular'],
    category: 'sleeping-bag'
  }
];

// ==================
// LOAD PRODUCT PAGE
// ==================
function loadProduct() {
  const productSection = document.getElementById('productTitle');
  if (!productSection) return;

  // Get product id from URL
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id')) || 1;

  // Find product
  const product = products.find(p => p.id === id) || products[0];

  // Fill in product details
  document.getElementById('productTitle').textContent = product.name;
  document.getElementById('productPrice').textContent = '$' + product.price;
  document.getElementById('productDescription').textContent = product.description;
  document.getElementById('productReviews').textContent = product.reviews;
  document.getElementById('productImage').src = product.image;
  document.getElementById('productImage').alt = product.name;

  // Fill stars
  let starsHTML = '';
  for (let i = 1; i <= 5; i++) {
    starsHTML += i <= product.stars
      ? '<i class="bi bi-star-fill"></i>'
      : '<i class="bi bi-star"></i>';
  }
  document.getElementById('productStars').innerHTML = starsHTML;

  // Fill model selector
  const modelSelect = document.getElementById('productModel');
  product.models.forEach(function(model) {
    const option = document.createElement('option');
    option.value = model;
    option.textContent = model;
    modelSelect.appendChild(option);
  });

  // Load similar products
 const similar = products.filter(p => p.category === product.category && p.id !== id).slice(0, 3);
  let similarHTML = '';
  similar.forEach(function(p) {
    similarHTML += `
      <div class="col-6 col-md-3 mb-4">
        <a href="product.html?id=${p.id}" class="text-decoration-none">
          <div class="card product-card">
           <img src="${p.image}" class="card-img-top shop-product-img" alt="${p.name}">
            <div class="card-body text-center">
              <p class="product-name">${p.name.toUpperCase()}</p>
              <p class="product-price">$${p.price}</p>
            </div>
          </div>
        </a>
      </div>
    `;
  });
  document.getElementById('similarProducts').innerHTML = similarHTML;
}

// ==================
// ADD TO CART
// ==================
function addToCart() {
  const title = document.getElementById('productTitle').textContent;
  const model = document.getElementById('productModel').value;
  if (!model) {
    alert('Please select a model first!');
    return;
  }
  alert(`${title} (${model}) added to cart!`);
}

// Run on page load
document.addEventListener('DOMContentLoaded', loadProduct);