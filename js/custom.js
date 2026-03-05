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
// RUN ON PAGE LOAD
// ==================
document.addEventListener('DOMContentLoaded', loadProduct);
document.addEventListener('DOMContentLoaded', loadCart);
document.addEventListener('DOMContentLoaded', loadShippingPage);
document.addEventListener('DOMContentLoaded', updateCartBadge);
document.addEventListener('DOMContentLoaded', loadPaymentPage);
document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('shopProductGrid')) {
    renderShopProducts('all');
  }
});
// ==================
// LOAD SHIPPING PAGE
// ==================
function loadShippingPage() {
  const shippingSection = document.getElementById('shippingForm');
  if (!shippingSection) return;

  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Redirect to cart if empty
  if (cart.length === 0) {
    window.location.href = 'cart.html';
    return;
  }

  // Load cart items in summary
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

  // Calculate summary
  updateShippingSummary();

  // Listen for shipping method change
  document.querySelectorAll('input[name="shippingMethod"]').forEach(function(radio) {
    radio.addEventListener('change', function() {
      updateShippingSummary();
      // Update selected style
      document.getElementById('freeShippingOption').classList.remove('selected');
      document.getElementById('nextDayOption').classList.remove('selected');
      if (this.value === 'free') {
        document.getElementById('freeShippingOption').classList.add('selected');
      } else {
        document.getElementById('nextDayOption').classList.add('selected');
      }
    });
  });

  // Set initial selected style
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
    // Free shipping logic - over $600 always free
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

  // First name
  const firstName = document.getElementById('firstName');
  if (!firstName.value.trim()) {
    firstName.classList.add('is-invalid');
    valid = false;
  } else {
    firstName.classList.remove('is-invalid');
    firstName.classList.add('is-valid');
  }

  // Last name
  const lastName = document.getElementById('lastName');
  if (!lastName.value.trim()) {
    lastName.classList.add('is-invalid');
    valid = false;
  } else {
    lastName.classList.remove('is-invalid');
    lastName.classList.add('is-valid');
  }

  // Address
  const address = document.getElementById('address');
  if (!address.value.trim()) {
    address.classList.add('is-invalid');
    valid = false;
  } else {
    address.classList.remove('is-invalid');
    address.classList.add('is-valid');
  }

  // Country
  const country = document.getElementById('country');
  if (!country.value) {
    country.classList.add('is-invalid');
    valid = false;
  } else {
    country.classList.remove('is-invalid');
    country.classList.add('is-valid');
  }

  // City
  const city = document.getElementById('city');
  if (!city.value.trim()) {
    city.classList.add('is-invalid');
    valid = false;
  } else {
    city.classList.remove('is-invalid');
    city.classList.add('is-valid');
  }

  // Zip/Postal Code - NZ format: 4 digits
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

// Phone - NZ format (improved)
const phone = document.getElementById('phoneNumber');
let phoneValue = phone.value.trim();

// Clean input: remove spaces, dashes, parentheses, dots
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
    // Optional: show cleaned version to user
    // phone.value = phoneValue;
}

if (valid) {
    // Save shipping details to localStorage
    const shippingData = {
        firstName: firstName.value.trim(),
        lastName: lastName.value.trim(),
        address: address.value.trim(),
        address2: document.getElementById('address2').value.trim(),
        country: country.value,
        city: city.value.trim(),
        zipCode: zipCode.value.trim(),
        phoneNumber: phone.value.trim(),           // keeps what user typed (with formatting)
        // phoneNumber: phoneValue,                 // alternative: save cleaned version
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

  // Redirect to cart if empty
  if (cart.length === 0) {
    window.location.href = 'cart.html';
    return;
  }

  // Load cart items in summary
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

  // Calculate summary
  updatePaymentSummary();

  // Show/hide credit card fields based on selection
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

  // Set initial selected style
  document.getElementById('creditCardOption').classList.add('selected');

  // Format card number with spaces
  const cardNumber = document.getElementById('cardNumber');
  if (cardNumber) {
    cardNumber.addEventListener('input', function() {
      let value = this.value.replace(/\D/g, '');
      value = value.replace(/(.{4})/g, '$1 ').trim();
      this.value = value;
    });
  }

  // Format expiry date
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

    // Card number - 16 digits
    const cardNumber = document.getElementById('cardNumber');
    const cardDigits = cardNumber.value.replace(/\s/g, '');
    if (!/^\d{16}$/.test(cardDigits)) {
      cardNumber.classList.add('is-invalid');
      valid = false;
    } else {
      cardNumber.classList.remove('is-invalid');
      cardNumber.classList.add('is-valid');
    }

    // Expiry date MM/YY
    const expiryDate = document.getElementById('expiryDate');
    const expiryRegex = /^(0[1-9]|1[0-2]) \/ \d{2}$/;
    if (!expiryRegex.test(expiryDate.value.trim())) {
      expiryDate.classList.add('is-invalid');
      valid = false;
    } else {
      expiryDate.classList.remove('is-invalid');
      expiryDate.classList.add('is-valid');
    }

    // CVV - 3 digits
    const cvv = document.getElementById('cvv');
    if (!/^\d{3}$/.test(cvv.value.trim())) {
      cvv.classList.add('is-invalid');
      valid = false;
    } else {
      cvv.classList.remove('is-invalid');
      cvv.classList.add('is-valid');
    }

    // Card holder name
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

  // Payment successful
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