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
    category: 'backpack'
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
    category: 'backpack'
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
    category: 'backpack'
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
    category: 'backpack'
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
    category: 'tent'
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
    category: 'tent'
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
    category: 'tent'
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
    category: 'tent'
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
    category: 'sleeping-bag'
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
    category: 'sleeping-bag'
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
    category: 'sleeping-bag'
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
    category: 'sleeping-bag'
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
    category: 'boots'
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
    category: 'boots'
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
    category: 'boots'
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
    category: 'boots'
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
    category: 'jacket'
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
    category: 'jacket'
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
    category: 'jacket'
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
    category: 'jacket'
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
    category: 'pants'
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
    category: 'pants'
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
    category: 'pants'
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
    category: 'pants'
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

  let starsHTML = '';
  for (let i = 1; i <= 5; i++) {
    starsHTML += i <= product.stars
      ? '<i class="bi bi-star-fill"></i>'
      : '<i class="bi bi-star"></i>';
  }
  document.getElementById('productStars').innerHTML = starsHTML;

  const modelSelect = document.getElementById('productModel');
  product.models.forEach(function(model) {
    const option = document.createElement('option');
    option.value = model;
    option.textContent = model;
    modelSelect.appendChild(option);
  });

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
// ADD TO CART
// ==================
function addToCart() {
  const title = document.getElementById('productTitle').textContent;
  const price = document.getElementById('productPrice').textContent;
  const model = document.getElementById('productModel').value;
  const image = document.getElementById('productImage').src;

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

  // Show toast instead of alert
  const toastMessage = document.getElementById('toastMessage');
  if (toastMessage) {
    toastMessage.textContent = `${title} (${model}) added to cart!`;
    const toast = new bootstrap.Toast(document.getElementById('cartToast'), {
      delay: 2500
    });
    toast.show();
  }

  // Update badge
  updateCartBadge();
}
// ==================
// SHOP PRODUCT FILTER
// ==================
function renderShopProducts(filter) {
  const grid = document.getElementById('shopProductGrid');
  if (!grid) return;

  // Show one product from each category by default
  const featuredIds = [1, 5, 9, 13, 17, 21];
  const filtered = filter === 'all'
    ? products.filter(p => featuredIds.includes(p.id))
    : products.filter(p => p.category === filter);

  if (filtered.length === 0) {
    grid.innerHTML = '<p class="text-muted">No products found in this category.</p>';
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
// RUN ON PAGE LOAD
// ==================
document.addEventListener('DOMContentLoaded', loadProduct);
document.addEventListener('DOMContentLoaded', loadCart);
document.addEventListener('DOMContentLoaded', updateCartBadge);
document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('shopProductGrid')) {
    renderShopProducts('all');
  }
});