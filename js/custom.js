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
  // BACKPACKS
  {
    id: 1,
    name: 'Alpine Backpack',
    price: 120,
    image: 'images/cat-bp1.jpg',
    description: 'The Alpine Backpack is perfect for day hikes and overnight adventures. Features multiple compartments, padded straps and a hydration sleeve.',
    stars: 4,
    reviews: '24 Reviews',
    models: ['30L', '45L', '60L'],
    category: 'backpack',
    reviewList: [
      { name: 'James Wilson', date: 'January 12, 2024', stars: 5, comment: 'Perfect for the Tongariro Alpine Crossing! Very comfortable and durable.' },
      { name: 'Sarah Thompson', date: 'February 8, 2024', stars: 3, comment: 'Good quality but the straps could be more padded for longer hikes.' }
    ]
  },
  {
    id: 2,
    name: 'Trek Backpack',
    price: 140,
    image: 'images/cat-bp2.jpg',
    description: 'The Trek Backpack is ideal for multi-day hikes. Durable, lightweight and packed with storage.',
    stars: 4,
    reviews: '19 Reviews',
    models: ['40L', '55L'],
    category: 'backpack',
    reviewList: [
      { name: 'Mike Harrington', date: 'March 5, 2024', stars: 4, comment: 'Used this on the Milford Track. Plenty of space and very comfortable.' },
      { name: 'Emma Clarke', date: 'April 2, 2024', stars: 4, comment: 'Great backpack for the price. Highly recommend for multi-day trips.' }
    ]
  },
  {
    id: 3,
    name: 'Adventure Backpack',
    price: 160,
    image: 'images/cat-bp3.jpg',
    description: 'The Adventure Backpack is built for serious trekkers. Ergonomic design with rain cover included.',
    stars: 5,
    reviews: '27 Reviews',
    models: ['50L', '65L'],
    category: 'backpack',
    reviewList: [
      { name: 'Tom Henderson', date: 'May 14, 2024', stars: 5, comment: 'Best backpack I have ever owned. The rain cover saved me on the Routeburn Track!' },
      { name: 'Lucy Patterson', date: 'June 20, 2024', stars: 5, comment: 'Absolutely love this pack. Worth every dollar.' }
    ]
  },
  {
    id: 4,
    name: 'Summit Backpack',
    price: 180,
    image: 'images/cat-bp4.jpg',
    description: 'The Summit Backpack is designed for alpine adventures. Lightweight frame with ice axe loops.',
    stars: 5,
    reviews: '15 Reviews',
    models: ['35L', '50L'],
    category: 'backpack',
    reviewList: [
      { name: 'Chris Anderson', date: 'July 3, 2024', stars: 5, comment: 'Perfect for Mount Cook climbing. The ice axe loops are a great feature.' },
      { name: 'Rachel Green', date: 'August 11, 2024', stars: 4, comment: 'Lightweight and sturdy. Great for alpine conditions.' }
    ]
  },

  // TENTS
  {
    id: 5,
    name: 'Explorer Tent',
    price: 300,
    image: 'images/cat-t1.jpg',
    description: 'The Explorer Tent is a lightweight 3-season tent perfect for camping in New Zealand conditions. Easy to set up and weather resistant.',
    stars: 4,
    reviews: '18 Reviews',
    models: ['2 Person', '3 Person', '4 Person'],
    category: 'tent',
    reviewList: [
      { name: 'David Murray', date: 'January 25, 2024', stars: 4, comment: 'Great tent for NZ weather. Survived a stormy night in Fiordland!' },
      { name: 'Sophie Baker', date: 'February 14, 2024', stars: 4, comment: 'Easy to set up and very weatherproof. Happy with this purchase.' }
    ]
  },
  {
    id: 6,
    name: 'Basecamp Tent',
    price: 350,
    image: 'images/cat-t2.jpg',
    description: 'The Basecamp Tent is a spacious 4-season tent built for harsh NZ conditions.',
    stars: 4,
    reviews: '15 Reviews',
    models: ['3 Person', '4 Person'],
    category: 'tent',
    reviewList: [
      { name: 'Mark Stevens', date: 'March 18, 2024', stars: 5, comment: 'Used this in winter conditions near Queenstown. Stayed perfectly dry and warm.' },
      { name: 'Anna Mitchell', date: 'April 22, 2024', stars: 3, comment: 'Good tent but quite heavy to carry on longer treks.' }
    ]
  },
  {
    id: 7,
    name: 'Ultralight Tent',
    price: 280,
    image: 'images/cat-t3.jpg',
    description: 'The Ultralight Tent is perfect for fast and light adventures. Packs down to the size of a water bottle.',
    stars: 4,
    reviews: '22 Reviews',
    models: ['1 Person', '2 Person'],
    category: 'tent',
    reviewList: [
      { name: 'Paul Robinson', date: 'May 7, 2024', stars: 4, comment: 'Incredibly light and compact. Perfect for solo treks on the Te Araroa trail.' },
      { name: 'Claire Watson', date: 'June 15, 2024', stars: 4, comment: 'Amazing how small this packs down. Great for ultralight hiking.' }
    ]
  },
  {
    id: 8,
    name: 'TrailBlazer Tent',
    price: 320,
    image: 'images/cat-t4.jpg',
    description: 'The TrailBlazer Tent is built for serious adventurers. Lightweight and easy to pitch in any conditions.',
    stars: 5,
    reviews: '12 Reviews',
    models: ['2 Person', '3 Person'],
    category: 'tent',
    reviewList: [
      { name: 'Nathan Ford', date: 'July 19, 2024', stars: 5, comment: 'Pitched this in strong winds near Mt Aspiring. Held up brilliantly!' },
      { name: 'Olivia Reed', date: 'August 5, 2024', stars: 5, comment: 'Best tent I have used in NZ conditions. Highly recommend.' }
    ]
  },

  // SLEEPING BAGS
  {
    id: 9,
    name: 'Summit Sleeping Bag',
    price: 150,
    image: 'images/cat-s1.jpg',
    description: 'Stay warm on cold nights with the Summit Sleeping Bag. Rated to -10°C and packed with premium insulation.',
    stars: 3,
    reviews: '12 Reviews',
    models: ['Regular', 'Long'],
    category: 'sleeping-bag',
    reviewList: [
      { name: 'Ben Carter', date: 'January 30, 2024', stars: 3, comment: 'Decent sleeping bag but I found it a bit cold at -10C. Good for milder conditions.' },
      { name: 'Mia Turner', date: 'February 20, 2024', stars: 3, comment: 'Good value for money but not the warmest at extreme temperatures.' }
    ]
  },
  {
    id: 10,
    name: 'Alpine Sleeping Bag',
    price: 200,
    image: 'images/cat-s2.jpg',
    description: 'The Alpine Sleeping Bag is rated to -20°C for extreme cold conditions.',
    stars: 5,
    reviews: '16 Reviews',
    models: ['Regular', 'Long'],
    category: 'sleeping-bag',
    reviewList: [
      { name: 'Jack Phillips', date: 'March 10, 2024', stars: 5, comment: 'Incredibly warm! Used this on a winter trip to the Southern Alps. Perfect.' },
      { name: 'Zoe Campbell', date: 'April 5, 2024', stars: 5, comment: 'Worth every cent. Stayed warm in -15C conditions near Mount Cook.' }
    ]
  },
  {
    id: 11,
    name: 'Ultralight Sleeping Bag',
    price: 130,
    image: 'images/cat-s3.jpg',
    description: 'The Ultralight Sleeping Bag is perfect for summer camping. Lightweight and compact.',
    stars: 3,
    reviews: '9 Reviews',
    models: ['Regular'],
    category: 'sleeping-bag',
    reviewList: [
      { name: 'Liam Evans', date: 'May 22, 2024', stars: 3, comment: 'Great for summer camping in Abel Tasman. Would not use it in winter though.' },
      { name: 'Isabelle Young', date: 'June 30, 2024', stars: 3, comment: 'Light and compact but only suitable for warmer conditions.' }
    ]
  },
  {
    id: 12,
    name: 'Base Sleeping Bag',
    price: 170,
    image: 'images/cat-s4.jpg',
    description: 'The Base Sleeping Bag is a versatile 3-season bag perfect for NZ campsites.',
    stars: 4,
    reviews: '20 Reviews',
    models: ['Regular', 'Long'],
    category: 'sleeping-bag',
    reviewList: [
      { name: 'Harry Scott', date: 'July 14, 2024', stars: 4, comment: 'Great all-round sleeping bag. Used it across three seasons in NZ.' },
      { name: 'Grace Adams', date: 'August 22, 2024', stars: 4, comment: 'Very comfortable and warm enough for most NZ conditions.' }
    ]
  },

  // BOOTS
  {
    id: 13,
    name: 'Trail Boots',
    price: 180,
    image: 'images/cat-b1.jpg',
    description: 'The Trail Boots are built for NZ terrain. Waterproof, lightweight and extremely durable.',
    stars: 4,
    reviews: '33 Reviews',
    models: ['Size 7', 'Size 8', 'Size 9', 'Size 10', 'Size 11'],
    category: 'boots',
    reviewList: [
      { name: 'Connor Hughes', date: 'January 8, 2024', stars: 4, comment: 'Excellent grip on wet NZ trails. Very comfortable for all day hiking.' },
      { name: 'Ella Morgan', date: 'February 16, 2024', stars: 4, comment: 'Waterproof and durable. Perfect for the Kepler Track.' }
    ]
  },
  {
    id: 14,
    name: 'Alpine Boots',
    price: 220,
    image: 'images/cat-b2.jpg',
    description: 'The Alpine Boots are designed for serious mountain terrain. Stiff sole for crampon compatibility.',
    stars: 5,
    reviews: '18 Reviews',
    models: ['Size 7', 'Size 8', 'Size 9', 'Size 10', 'Size 11'],
    category: 'boots',
    reviewList: [
      { name: 'Ryan Cooper', date: 'March 24, 2024', stars: 5, comment: 'Used these with crampons on Mount Ruapehu. Performed brilliantly!' },
      { name: 'Lily Parker', date: 'April 12, 2024', stars: 5, comment: 'Best alpine boots I have owned. Stiff sole is perfect for technical terrain.' }
    ]
  },
  {
    id: 15,
    name: 'Trek Boots',
    price: 160,
    image: 'images/cat-b3.jpg',
    description: 'The Trek Boots are perfect for day hikes and trail running in NZ conditions.',
    stars: 3,
    reviews: '11 Reviews',
    models: ['Size 7', 'Size 8', 'Size 9', 'Size 10', 'Size 11'],
    category: 'boots',
    reviewList: [
      { name: 'Owen Bailey', date: 'May 18, 2024', stars: 3, comment: 'Good for day hikes but not suitable for longer multi-day treks.' },
      { name: 'Chloe Rivera', date: 'June 25, 2024', stars: 3, comment: 'Decent boots for the price. Comfortable but not the most durable.' }
    ]
  },
  {
    id: 16,
    name: 'Summit Boots',
    price: 260,
    image: 'images/cat-b4.jpg',
    description: 'The Summit Boots are the ultimate footwear for NZ alpine adventures.',
    stars: 5,
    reviews: '25 Reviews',
    models: ['Size 7', 'Size 8', 'Size 9', 'Size 10', 'Size 11'],
    category: 'boots',
    reviewList: [
      { name: 'Ethan Price', date: 'July 8, 2024', stars: 5, comment: 'Incredible boots for alpine climbing. Used them on the Mueller Hut Route.' },
      { name: 'Ava Richardson', date: 'August 16, 2024', stars: 5, comment: 'Worth the investment. Best boots for serious NZ mountain adventures.' }
    ]
  },

  // RAIN JACKETS
  {
    id: 17,
    name: 'Summit Rain Jacket',
    price: 180,
    image: 'images/cat-r1.jpg',
    description: 'Stay dry in any conditions with the Summit Rain Jacket. Fully waterproof, breathable and packable.',
    stars: 5,
    reviews: '31 Reviews',
    models: ['Small', 'Medium', 'Large', 'XL'],
    category: 'jacket',
    reviewList: [
      { name: 'Lucas Bennett', date: 'January 20, 2024', stars: 5, comment: 'Kept me completely dry on a very wet day on the Routeburn Track. Excellent!' },
      { name: 'Charlotte Wood', date: 'February 28, 2024', stars: 5, comment: 'Lightweight and fully waterproof. Best rain jacket I have owned.' }
    ]
  },
  {
    id: 18,
    name: 'Storm Shell Jacket',
    price: 220,
    image: 'images/cat-r2.jpg',
    description: 'The Storm Shell Jacket is built for extreme NZ weather. Fully seam-sealed and windproof.',
    stars: 4,
    reviews: '14 Reviews',
    models: ['Small', 'Medium', 'Large', 'XL'],
    category: 'jacket',
    reviewList: [
      { name: 'Mason Turner', date: 'March 15, 2024', stars: 4, comment: 'Great jacket for Fiordland weather. The seam sealing really works.' },
      { name: 'Amelia Collins', date: 'April 28, 2024', stars: 4, comment: 'Very windproof and waterproof. A bit pricey but worth it.' }
    ]
  },
  {
    id: 19,
    name: 'Fleece Jacket',
    price: 140,
    image: 'images/cat-r3.jpg',
    description: 'The Fleece Jacket is perfect for layering on cold NZ mountain days.',
    stars: 4,
    reviews: '21 Reviews',
    models: ['Small', 'Medium', 'Large', 'XL'],
    category: 'jacket',
    reviewList: [
      { name: 'Logan Peterson', date: 'May 10, 2024', stars: 4, comment: 'Great layering piece for cold Canterbury days. Very warm and comfortable.' },
      { name: 'Harper Stewart', date: 'June 18, 2024', stars: 4, comment: 'Perfect mid layer for NZ mountain conditions. Highly recommend.' }
    ]
  },
  {
    id: 20,
    name: 'Alpine Jacket',
    price: 260,
    image: 'images/cat-r4.jpg',
    description: 'The Alpine Jacket is the ultimate layering piece for NZ alpine adventures.',
    stars: 5,
    reviews: '17 Reviews',
    models: ['Small', 'Medium', 'Large', 'XL'],
    category: 'jacket',
    reviewList: [
      { name: 'Elijah Sanders', date: 'July 22, 2024', stars: 5, comment: 'Exceptional jacket for alpine conditions. Used it on Aoraki/Mount Cook.' },
      { name: 'Scarlett Price', date: 'August 30, 2024', stars: 5, comment: 'Premium quality jacket. Worth every dollar for serious alpine adventures.' }
    ]
  },

  // PANTS
  {
    id: 21,
    name: 'Trekking Pants',
    price: 110,
    image: 'images/cat-p1.jpg',
    description: 'The Trekking Pants are perfect for long days on the trail. Lightweight, breathable and quick-drying.',
    stars: 4,
    reviews: '28 Reviews',
    models: ['XS', 'S', 'M', 'L', 'XL'],
    category: 'pants',
    reviewList: [
      { name: 'Sebastian Foster', date: 'January 15, 2024', stars: 4, comment: 'Very comfortable for long days on the trail. Dried quickly after stream crossings.' },
      { name: 'Victoria Hughes', date: 'February 22, 2024', stars: 4, comment: 'Great fit and very breathable. Perfect for NZ summer hiking.' }
    ]
  },
  {
    id: 22,
    name: 'Alpine Pants',
    price: 150,
    image: 'images/cat-p2.jpg',
    description: 'The Alpine Pants are built for NZ mountain conditions. Windproof and water resistant.',
    stars: 4,
    reviews: '16 Reviews',
    models: ['XS', 'S', 'M', 'L', 'XL'],
    category: 'pants',
    reviewList: [
      { name: 'Julian Ross', date: 'March 28, 2024', stars: 4, comment: 'Excellent windproof pants for alpine conditions. Kept me warm and dry.' },
      { name: 'Penelope Gray', date: 'April 16, 2024', stars: 4, comment: 'Great fit and very functional for mountain conditions.' }
    ]
  },
  {
    id: 23,
    name: 'Summit Pants',
    price: 180,
    image: 'images/cat-p3.jpg',
    description: 'The Summit Pants are designed for serious alpine adventurers. Reinforced knees and seat.',
    stars: 5,
    reviews: '22 Reviews',
    models: ['XS', 'S', 'M', 'L', 'XL'],
    category: 'pants',
    reviewList: [
      { name: 'Xavier Bell', date: 'May 24, 2024', stars: 5, comment: 'The reinforced knees are a great feature for technical climbing in NZ.' },
      { name: 'Aria Jenkins', date: 'June 10, 2024', stars: 5, comment: 'Best alpine pants I have owned. Very durable and comfortable.' }
    ]
  },
  {
    id: 24,
    name: 'Trail Pants',
    price: 130,
    image: 'images/cat-p4.jpg',
    description: 'The Trail Pants are versatile pants for hiking and outdoor activities in NZ.',
    stars: 3,
    reviews: '14 Reviews',
    models: ['XS', 'S', 'M', 'L', 'XL'],
    category: 'pants',
    reviewList: [
      { name: 'Finn Cooper', date: 'July 28, 2024', stars: 3, comment: 'Decent trail pants for the price. Good for casual hiking.' },
      { name: 'Isla Morgan', date: 'August 14, 2024', stars: 3, comment: 'Comfortable but not the most durable. Good for lighter trails.' }
    ]
  }
];

// ==================
// LOAD PRODUCT PAGE
// ==================
function loadProduct() {
  const productSection = document.getElementById('productTitle');
  if (!productSection) return;

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id')) || 1;
  const product = products.find(p => p.id === id) || products[0];

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

  // Load dynamic reviews
  const reviewsContainer = document.getElementById('reviewsContainer');
  if (reviewsContainer && product.reviewList) {
    let reviewsHTML = '';
    product.reviewList.forEach(function(review, index) {
      let reviewStars = '';
      for (let i = 1; i <= 5; i++) {
        reviewStars += i <= review.stars
          ? '<i class="bi bi-star-fill"></i>'
          : '<i class="bi bi-star"></i>';
      }
      reviewsHTML += `
        <div class="row mb-4">
          <div class="col-12 col-md-3">
            <div class="d-flex align-items-center mb-2">
              <div class="review-avatar me-3">
                <i class="bi bi-person-circle fs-2"></i>
              </div>
              <div>
                <p class="fw-bold mb-0">${review.name.toUpperCase()}</p>
                <p class="text-muted small mb-1">${review.date}</p>
                <div class="star-rating small">${reviewStars}</div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-9">
            <p class="text-muted">${review.comment}</p>
          </div>
        </div>
        ${index < product.reviewList.length - 1 ? '<hr>' : ''}
      `;
    });
    reviewsContainer.innerHTML = reviewsHTML;
  }
}

// ==================
// ADD TO CART
// ==================
function addToCart() {
  const title = document.getElementById('productTitle').textContent;
  const price = document.getElementById('productPrice').textContent;
  const model = document.getElementById('productModel').value;
  const image = document.getElementById('productImage').getAttribute('src');

  if (!model) {
    alert('Please select a model first!');
    return;
  }

  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const existing = cart.find(item => item.title === title && item.model === model);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      title: title,
      price: parseFloat(price.replace('$', '')),
      model: model,
      image: image,
      qty: 1
    });
  }

  localStorage.setItem('cart', JSON.stringify(cart));

  // Show toast
  const toastMessage = document.getElementById('toastMessage');
  if (toastMessage) {
    toastMessage.textContent = `${title} (${model}) added to cart!`;
    const toast = new bootstrap.Toast(document.getElementById('cartToast'), {
      delay: 2500
    });
    toast.show();
  }

  updateCartBadge();
}

// ==================
// UPDATE CART BADGE
// ==================
function updateCartBadge() {
  const badge = document.getElementById('cartBadge');
  if (!badge) return;

  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  if (totalItems > 0) {
    badge.textContent = totalItems;
    badge.classList.add('visible');
  } else {
    badge.classList.remove('visible');
  }
}

// ==================
// SHOP PRODUCT FILTER
// ==================
function renderShopProducts(filter, searchTerm) {
  const grid = document.getElementById('shopProductGrid');
  if (!grid) return;

  const featuredIds = [1, 5, 9, 13, 17, 21];
  let filtered;

  if (filter === 'search' && searchTerm) {
    const term = searchTerm.toLowerCase();
    filtered = products.filter(p =>
      p.name.toLowerCase().includes(term) ||
      p.category.toLowerCase().includes(term) ||
      p.description.toLowerCase().includes(term)
    );
  } else if (filter === 'all') {
    filtered = products;
  } else if (filter === 'featured') {
    filtered = products.filter(p => featuredIds.includes(p.id));
  } else {
    filtered = products.filter(p => p.category === filter);
  }

  if (filtered.length === 0) {
    grid.innerHTML = '<p class="text-muted">No products found. Try a different search term.</p>';
    return;
  }

  let html = '';
  filtered.forEach(function(p) {
    let starsHTML = '';
    for (let i = 1; i <= 5; i++) {
      starsHTML += i <= p.stars
        ? '<i class="bi bi-star-fill"></i>'
        : '<i class="bi bi-star"></i>';
    }
    html += `
      <div class="col-12 col-md-6 mb-3">
        <a href="product.html?id=${p.id}" class="text-decoration-none">
          <div class="card product-card d-flex flex-row">
            <img src="${p.image}" class="shop-product-img-horizontal" alt="${p.name}">
            <div class="card-body">
              <p class="product-name">${p.name.toUpperCase()}</p>
              <div class="star-rating mb-1">${starsHTML}</div>
              <p class="product-price">$${p.price}</p>
            </div>
          </div>
        </a>
      </div>
    `;
  });

  grid.innerHTML = html;
}

function filterProducts(category) {
  renderShopProducts(category);
}

// ==================
// LOAD CART PAGE
// ==================
function loadCart() {
  const cartItems = document.getElementById('cartItems');
  if (!cartItems) return;

  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="text-center py-5">
        <p class="text-muted">Your cart is empty!</p>
        <a href="shop.html" class="btn btn-dark">Continue Shopping</a>
      </div>
    `;
    updateSummary();
    return;
  }

  let html = '';
  cart.forEach(function(item, index) {
    html += `
      <div class="cart-item d-flex align-items-center mb-3 p-3 border">
        <img src="${item.image}" alt="${item.title}" class="cart-item-img me-3">
        <div class="flex-grow-1">
          <p class="cart-item-name mb-1">${item.title.toUpperCase()}</p>
          <p class="cart-item-desc text-muted small mb-1">Model: ${item.model}</p>
          <p class="cart-item-price mb-0">$${item.price}</p>
        </div>
        <div class="cart-quantity ms-3 d-flex align-items-center gap-2">
          <input
            type="number"
            class="form-control cart-qty-input"
            value="${item.qty}"
            min="1"
            max="99"
            onchange="updateQty(${index}, this.value)"
          >
          <button class="btn btn-sm btn-outline-danger" onclick="removeItem(${index})">
            <i class="bi bi-trash"></i>
          </button>
        </div>
      </div>
    `;
  });

  cartItems.innerHTML = html;
  updateSummary();
}

// ==================
// UPDATE QUANTITY
// ==================
function updateQty(index, value) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const qty = parseInt(value);
  if (isNaN(qty) || qty < 1) {
    alert('Quantity must be at least 1!');
    return;
  }
  cart[index].qty = qty;
  localStorage.setItem('cart', JSON.stringify(cart));
  updateSummary();
}

// ==================
// REMOVE ITEM
// ==================
function removeItem(index) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  loadCart();
}

// ==================
// UPDATE SUMMARY
// ==================
function updateSummary() {
  const subtotalEl = document.getElementById('subtotal');
  if (!subtotalEl) return;

  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  if (cart.length === 0) {
    document.getElementById('subtotal').textContent = '$0';
    document.getElementById('shipping').textContent = '-';
    document.getElementById('taxes').textContent = '$0';
    document.getElementById('total').textContent = '$0';
    return;
  }

  let subtotal = 0;
  cart.forEach(function(item) {
    subtotal += item.price * item.qty;
  });

  const shipping = subtotal > 600 ? 0 : 30;
  const taxes = Math.round(subtotal * 0.02);
  const total = subtotal + shipping + taxes;

  document.getElementById('subtotal').textContent = '$' + subtotal;
  document.getElementById('shipping').textContent = shipping === 0 ? 'FREE' : '$' + shipping;
  document.getElementById('taxes').textContent = '$' + taxes;
  document.getElementById('total').textContent = '$' + total;
}

// ==================
// PROCEED TO SHIPPING
// ==================
function proceedToShipping() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  if (cart.length === 0) {
    alert('Your cart is empty!');
    return;
  }
  window.location.href = 'shipping.html';
}

// ==================
// CANCEL CART
// ==================
function cancelCart() {
  if (confirm('Are you sure you want to cancel?')) {
    localStorage.removeItem('cart');
    window.location.href = 'home.html';
  }
}

// ==================
// APPLY COUPON
// ==================
function applyCoupon() {
  const coupon = document.getElementById('couponCode').value.trim();
  if (coupon === '') {
    alert('Please enter a coupon code!');
    return;
  }
  if (coupon.toUpperCase() === 'ADVENTURE10') {
    alert('Coupon applied! 10% discount added.');
  } else {
    alert('Invalid coupon code. Please try again.');
  }
}

// ==================
// LOAD SHIPPING PAGE
// ==================
function loadShippingPage() {
  const shippingSection = document.getElementById('shippingForm');
  if (!shippingSection) return;

  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  if (cart.length === 0) {
    window.location.href = 'cart.html';
    return;
  }

  let itemsHTML = '';
  cart.forEach(function(item) {
    itemsHTML += `
      <div class="d-flex align-items-center mb-3 border p-2">
        <img src="${item.image}" alt="${item.title}"
             class="cart-item-img me-3"
             style="width:70px; height:70px; object-fit:contain;">
        <div>
          <p class="product-name mb-0">${item.title.toUpperCase()}</p>
          <p class="text-muted small mb-0">Model: ${item.model}</p>
          <p class="product-price mb-0">$${item.price}</p>
        </div>
      </div>
    `;
  });
  document.getElementById('shippingSummaryItems').innerHTML = itemsHTML;

  updateShippingSummary();

  document.querySelectorAll('input[name="shippingMethod"]').forEach(function(radio) {
    radio.addEventListener('change', function() {
      updateShippingSummary();
      document.getElementById('freeShippingOption').classList.remove('selected');
      document.getElementById('nextDayOption').classList.remove('selected');
      if (this.value === 'free') {
        document.getElementById('freeShippingOption').classList.add('selected');
      } else {
        document.getElementById('nextDayOption').classList.add('selected');
      }
    });
  });

  document.getElementById('freeShippingOption').classList.add('selected');
}

// ==================
// UPDATE SHIPPING SUMMARY
// ==================
function updateShippingSummary() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  let subtotal = 0;
  cart.forEach(function(item) {
    subtotal += item.price * item.qty;
  });

  const method = document.querySelector('input[name="shippingMethod"]:checked');
  let shipping = 0;

  if (method && method.value === 'nextday') {
    shipping = 20;
  } else {
    shipping = subtotal > 600 ? 0 : 30;
  }

  const taxes = Math.round(subtotal * 0.02);
  const total = subtotal + shipping + taxes;

  document.getElementById('shippingSubtotal').textContent = '$' + subtotal;
  document.getElementById('shippingCost').textContent = shipping === 0 ? 'FREE' : '$' + shipping;
  document.getElementById('shippingTaxes').textContent = '$' + taxes;
  document.getElementById('shippingTotal').textContent = '$' + total;
}

// ==================
// TOGGLE VOUCHER
// ==================
function toggleVoucher() {
  const voucherSection = document.getElementById('voucherSection');
  const voucherIcon = document.getElementById('voucherIcon');
  voucherSection.classList.toggle('d-none');
  voucherIcon.classList.toggle('bi-chevron-down');
  voucherIcon.classList.toggle('bi-chevron-up');
}

// ==================
// APPLY VOUCHER
// ==================
function applyVoucher() {
  const code = document.getElementById('voucherCode').value.trim();
  if (code === '') {
    alert('Please enter a voucher code!');
    return;
  }
  if (code.toUpperCase() === 'ADVENTURE10') {
    alert('Voucher applied! 10% discount added.');
  } else {
    alert('Invalid voucher code. Please try again.');
  }
}

// ==================
// VALIDATE SHIPPING FORM
// ==================
function proceedToPayment() {
  const form = document.getElementById('shippingForm');
  if (!form) return;

  let valid = true;

  const firstName = document.getElementById('firstName');
  if (!firstName.value.trim()) {
    firstName.classList.add('is-invalid');
    valid = false;
  } else {
    firstName.classList.remove('is-invalid');
    firstName.classList.add('is-valid');
  }

  const lastName = document.getElementById('lastName');
  if (!lastName.value.trim()) {
    lastName.classList.add('is-invalid');
    valid = false;
  } else {
    lastName.classList.remove('is-invalid');
    lastName.classList.add('is-valid');
  }

  const address = document.getElementById('address');
  if (!address.value.trim()) {
    address.classList.add('is-invalid');
    valid = false;
  } else {
    address.classList.remove('is-invalid');
    address.classList.add('is-valid');
  }

  const country = document.getElementById('country');
  if (!country.value) {
    country.classList.add('is-invalid');
    valid = false;
  } else {
    country.classList.remove('is-invalid');
    country.classList.add('is-valid');
  }

  const city = document.getElementById('city');
  if (!city.value.trim()) {
    city.classList.add('is-invalid');
    valid = false;
  } else {
    city.classList.remove('is-invalid');
    city.classList.add('is-valid');
  }

  const zipCode = document.getElementById('zipCode');
  const zipRegex = /^\d{4}$/;
  if (!zipRegex.test(zipCode.value.trim())) {
    zipCode.classList.add('is-invalid');
    zipCode.nextElementSibling.textContent = 'Please enter a valid 4-digit NZ postal code.';
    valid = false;
  } else {
    zipCode.classList.remove('is-invalid');
    zipCode.classList.add('is-valid');
  }


const phone = document.getElementById('phoneNumber');
let phoneValue = phone.value.trim();


phoneValue = phoneValue.replace(/[\s\-\(\)\.]/g, '');

const phoneRegex = /^(?:\+64|0)2?[0-9]{7,9}$/;

if (!phoneValue || !phoneRegex.test(phoneValue)) {
    phone.classList.add('is-invalid');
    phone.classList.remove('is-valid');
    phone.nextElementSibling.textContent = 
        'Please enter a valid NZ phone number (e.g. 021 234 5678, +64212345678, 0271234567)';
    valid = false;
} else {
    phone.classList.remove('is-invalid');
    phone.classList.add('is-valid');

}

if (valid) {
   
    const shippingData = {
        firstName: firstName.value.trim(),
        lastName: lastName.value.trim(),
        address: address.value.trim(),
        address2: document.getElementById('address2').value.trim(),
        country: country.value,
        city: city.value.trim(),
        zipCode: zipCode.value.trim(),
        phoneNumber: phone.value.trim(),          
               shippingMethod: document.querySelector('input[name="shippingMethod"]:checked')?.value || 'free'
    };
    localStorage.setItem('shippingData', JSON.stringify(shippingData));
    window.location.href = 'payment.html';
}
}

// ==================
// CANCEL SHIPPING
// ==================
function cancelShipping() {
  if (confirm('Are you sure you want to cancel?')) {
    localStorage.removeItem('cart');
    localStorage.removeItem('shippingData');
    window.location.href = 'home.html';
  }
}

// ==================
// LOAD PAYMENT PAGE
// ==================
function loadPaymentPage() {
  const paymentSection = document.getElementById('paymentForm');
  if (!paymentSection) return;

  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  if (cart.length === 0) {
    window.location.href = 'cart.html';
    return;
  }

  let itemsHTML = '';
  cart.forEach(function(item) {
    itemsHTML += `
      <div class="d-flex align-items-center mb-3 border p-2">
        <img src="${item.image}" alt="${item.title}"
             class="cart-item-img me-3"
             style="width:70px; height:70px; object-fit:contain;">
        <div>
          <p class="product-name mb-0">${item.title.toUpperCase()}</p>
          <p class="text-muted small mb-0">Model: ${item.model}</p>
          <p class="product-price mb-0">$${item.price}</p>
        </div>
      </div>
    `;
  });
  document.getElementById('paymentSummaryItems').innerHTML = itemsHTML;

  updatePaymentSummary();

  document.querySelectorAll('input[name="paymentMethod"]').forEach(function(radio) {
    radio.addEventListener('change', function() {
      const creditCardFields = document.getElementById('creditCardFields');
      if (this.value === 'creditcard') {
        creditCardFields.style.display = 'block';
        document.getElementById('creditCardOption').classList.add('selected');
        document.getElementById('paypalOption').classList.remove('selected');
      } else {
        creditCardFields.style.display = 'none';
        document.getElementById('paypalOption').classList.add('selected');
        document.getElementById('creditCardOption').classList.remove('selected');
      }
    });
  });

  document.getElementById('creditCardOption').classList.add('selected');

  const cardNumber = document.getElementById('cardNumber');
  if (cardNumber) {
    cardNumber.addEventListener('input', function() {
      let value = this.value.replace(/\D/g, '');
      value = value.replace(/(.{4})/g, '$1 ').trim();
      this.value = value;
    });
  }

  const expiryDate = document.getElementById('expiryDate');
  if (expiryDate) {
    expiryDate.addEventListener('input', function() {
      let value = this.value.replace(/\D/g, '');
      if (value.length >= 2) {
        value = value.substring(0, 2) + ' / ' + value.substring(2);
      }
      this.value = value;
    });
  }
}

// ==================
// UPDATE PAYMENT SUMMARY
// ==================
function updatePaymentSummary() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const shippingData = JSON.parse(localStorage.getItem('shippingData')) || {};

  let subtotal = 0;
  cart.forEach(function(item) {
    subtotal += item.price * item.qty;
  });

  let shipping = 0;
  if (shippingData.shippingMethod === 'nextday') {
    shipping = 20;
  } else {
    shipping = subtotal > 600 ? 0 : 30;
  }

  const taxes = Math.round(subtotal * 0.02);
  const total = subtotal + shipping + taxes;

  document.getElementById('paymentSubtotal').textContent = '$' + subtotal;
  document.getElementById('paymentShipping').textContent = shipping === 0 ? 'FREE' : '$' + shipping;
  document.getElementById('paymentTaxes').textContent = '$' + taxes;
  document.getElementById('paymentTotal').textContent = '$' + total;
}

// ==================
// TOGGLE PAYMENT VOUCHER
// ==================
function togglePaymentVoucher() {
  const voucherSection = document.getElementById('paymentVoucherSection');
  const voucherIcon = document.getElementById('paymentVoucherIcon');
  voucherSection.classList.toggle('d-none');
  voucherIcon.classList.toggle('bi-chevron-down');
  voucherIcon.classList.toggle('bi-chevron-up');
}

// ==================
// APPLY PAYMENT VOUCHER
// ==================
function applyPaymentVoucher() {
  const code = document.getElementById('paymentVoucherCode').value.trim();
  if (code === '') {
    alert('Please enter a voucher code!');
    return;
  }
  if (code.toUpperCase() === 'ADVENTURE10') {
    alert('Voucher applied! 10% discount added.');
  } else {
    alert('Invalid voucher code. Please try again.');
  }
}

// ==================
// PROCESS PAYMENT
// ==================
function processPayment() {
  const method = document.querySelector('input[name="paymentMethod"]:checked').value;

  if (method === 'creditcard') {
    let valid = true;

    const cardNumber = document.getElementById('cardNumber');
    const cardDigits = cardNumber.value.replace(/\s/g, '');
    if (!/^\d{16}$/.test(cardDigits)) {
      cardNumber.classList.add('is-invalid');
      valid = false;
    } else {
      cardNumber.classList.remove('is-invalid');
      cardNumber.classList.add('is-valid');
    }

    const expiryDate = document.getElementById('expiryDate');
    const expiryRegex = /^(0[1-9]|1[0-2]) \/ \d{2}$/;
    if (!expiryRegex.test(expiryDate.value.trim())) {
      expiryDate.classList.add('is-invalid');
      valid = false;
    } else {
      expiryDate.classList.remove('is-invalid');
      expiryDate.classList.add('is-valid');
    }

    const cvv = document.getElementById('cvv');
    if (!/^\d{3}$/.test(cvv.value.trim())) {
      cvv.classList.add('is-invalid');
      valid = false;
    } else {
      cvv.classList.remove('is-invalid');
      cvv.classList.add('is-valid');
    }

    const cardHolder = document.getElementById('cardHolder');
    if (!cardHolder.value.trim()) {
      cardHolder.classList.add('is-invalid');
      valid = false;
    } else {
      cardHolder.classList.remove('is-invalid');
      cardHolder.classList.add('is-valid');
    }

    if (!valid) return;
  }

  alert('Payment successful! Thank you for your order!');
  localStorage.removeItem('cart');
  localStorage.removeItem('shippingData');
  window.location.href = 'home.html';
}

// ==================
// CANCEL PAYMENT
// ==================
function cancelPayment() {
  if (confirm('Are you sure you want to cancel?')) {
    localStorage.removeItem('cart');
    localStorage.removeItem('shippingData');
    window.location.href = 'home.html';
  }
}

// ==================
// SEARCH FUNCTIONALITY
// ==================
function initSearch() {
  // Home page search - redirect to shop with search term
  const homeSearchForm = document.getElementById('homeSearchForm');
  if (homeSearchForm) {
    homeSearchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const term = document.getElementById('homeSearchInput').value.trim();
      if (term) {
        window.location.href = 'shop.html?search=' + encodeURIComponent(term);
      }
    });
  }

  // Shop navbar search - filter products live
  const shopNavSearchForm = document.getElementById('shopNavSearchForm');
  if (shopNavSearchForm) {
    shopNavSearchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const term = document.getElementById('shopNavSearchInput').value.trim();
      if (term) {
        renderShopProducts('search', term);
        const grid = document.getElementById('productGrid');
        if (grid) grid.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Shop hero search - filter products live
  const shopSearchForm = document.getElementById('shopSearchForm');
  if (shopSearchForm) {
    shopSearchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const term = document.getElementById('shopHeroSearchInput').value.trim();
      if (term) {
        renderShopProducts('search', term);
        const grid = document.getElementById('productGrid');
        if (grid) grid.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Check URL for search parameter on shop page load
  const params = new URLSearchParams(window.location.search);
  const searchTerm = params.get('search');
  if (searchTerm && document.getElementById('shopProductGrid')) {
    renderShopProducts('search', searchTerm);
    const heroInput = document.getElementById('shopHeroSearchInput');
    const navInput = document.getElementById('shopNavSearchInput');
    if (heroInput) heroInput.value = searchTerm;
    if (navInput) navInput.value = searchTerm;
    const grid = document.getElementById('productGrid');
    if (grid) grid.scrollIntoView({ behavior: 'smooth' });
  }
}

// ==================
// RUN ON PAGE LOAD
// ==================
document.addEventListener('DOMContentLoaded', loadProduct);
document.addEventListener('DOMContentLoaded', loadCart);
document.addEventListener('DOMContentLoaded', loadShippingPage);
document.addEventListener('DOMContentLoaded', loadPaymentPage);
document.addEventListener('DOMContentLoaded', updateCartBadge);
document.addEventListener('DOMContentLoaded', initSearch);
document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('shopProductGrid')) {
    const params = new URLSearchParams(window.location.search);
    const searchTerm = params.get('search');
    if (searchTerm) {
      renderShopProducts('search', searchTerm);
      const heroInput = document.getElementById('shopHeroSearchInput');
      if (heroInput) heroInput.value = searchTerm;
    } else {
      renderShopProducts('featured');
    }
  }
});