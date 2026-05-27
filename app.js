// === TOMATO APP LOGIC ===

document.addEventListener('DOMContentLoaded', () => {
  updateCartUI();
  initPage();
  initNavScroll();
  initHamburger();
});

function initPage() {
  const page = document.body.dataset.page || detectPage();
  if (page === 'home') renderHome();
  if (page === 'restaurants') renderRestaurantsPage();
  if (page === 'menu') renderMenuPage();
  if (page === 'offers') renderOffersPage();
}

function detectPage() {
  const path = window.location.pathname;
  if (path.includes('restaurants')) return 'restaurants';
  if (path.includes('menu')) return 'menu';
  if (path.includes('offers')) return 'offers';
  if (path.includes('about')) return 'about';
  return 'home';
}

function initNavScroll() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  });
}

function initHamburger() {
  const btn = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');
  if (!btn || !links) return;
  btn.addEventListener('click', () => {
    links.classList.toggle('open');
  });
}

// ---- HOME PAGE ----
function renderHome() {
  renderFeaturedRestaurants();
  renderPopularDishes();
}

function renderFeaturedRestaurants() {
  const container = document.getElementById('featuredRestaurants');
  if (!container) return;
  const featured = RESTAURANTS.filter(r => r.open).slice(0, 6);
  container.innerHTML = featured.map(r => restaurantCard(r)).join('');
}

function renderPopularDishes() {
  const container = document.getElementById('popularDishes');
  if (!container) return;
  const popular = DISHES.slice(0, 8);
  container.innerHTML = popular.map(d => dishCard(d)).join('');
}

// ---- RESTAURANTS PAGE ----
function renderRestaurantsPage() {
  const container = document.getElementById('restaurantsGrid');
  if (!container) return;
  const params = new URLSearchParams(window.location.search);
  const cat = params.get('cat') || 'all';
  const search = params.get('q') || '';
  filterAndRenderRestaurants(cat, search);
  // Set active filter
  document.querySelectorAll('.filter-btn').forEach(btn => {
    if (btn.dataset.cat === cat || (cat === 'all' && btn.dataset.cat === 'all')) {
      btn.classList.add('active');
    }
  });
  const si = document.getElementById('restaurantSearch');
  if (si && search) si.value = search;
}

function filterAndRenderRestaurants(cat, search, sort) {
  const container = document.getElementById('restaurantsGrid');
  if (!container) return;
  let list = [...RESTAURANTS];
  if (cat && cat !== 'all') list = list.filter(r => r.category === cat);
  if (search) list = list.filter(r => r.name.toLowerCase().includes(search.toLowerCase()) || r.cuisine.toLowerCase().includes(search.toLowerCase()));
  if (sort === 'rating') list.sort((a,b) => b.rating - a.rating);
  if (sort === 'time') list.sort((a,b) => parseInt(a.time) - parseInt(b.time));
  if (list.length === 0) {
    container.innerHTML = '<div class="no-results"><i class="fas fa-search"></i><p>No restaurants found. Try a different search.</p></div>';
    return;
  }
  container.innerHTML = list.map(r => restaurantCard(r)).join('');
}

// ---- MENU PAGE ----
function renderMenuPage() {
  const container = document.getElementById('menuGrid');
  if (!container) return;
  renderMenuItems('all');
}

function renderMenuItems(cat, search, veg) {
  const container = document.getElementById('menuGrid');
  if (!container) return;
  let list = [...DISHES];
  if (cat && cat !== 'all') list = list.filter(d => d.category === cat);
  if (search) list = list.filter(d => d.name.toLowerCase().includes(search.toLowerCase()) || d.restaurant.toLowerCase().includes(search.toLowerCase()));
  if (veg === 'veg') list = list.filter(d => d.veg);
  if (veg === 'nonveg') list = list.filter(d => !d.veg);
  if (list.length === 0) {
    container.innerHTML = '<div class="no-results"><i class="fas fa-utensils"></i><p>No dishes found.</p></div>';
    return;
  }
  container.innerHTML = list.map(d => dishCard(d)).join('');
}

// ---- OFFERS PAGE ----
function renderOffersPage() {
  const container = document.getElementById('offersGrid');
  if (!container) return;
  container.innerHTML = OFFERS.map(o => offerCard(o)).join('');
}

// ---- CARD TEMPLATES ----
function restaurantCard(r) {
  return `
  <div class="restaurant-card" onclick="window.location.href='menu.html?rest=${r.id}'">
    <div class="r-img-wrap">
      <img src="${r.image}" alt="${r.name}" loading="lazy">
      ${r.badge ? `<span class="r-badge">${r.badge}</span>` : ''}
      ${r.discount ? `<span class="r-discount">${r.discount}</span>` : ''}
      <div class="r-overlay"><i class="fas fa-arrow-right"></i></div>
    </div>
    <div class="r-info">
      <div class="r-top">
        <h3>${r.name}</h3>
        <span class="r-rating">⭐ ${r.rating}</span>
      </div>
      <p class="r-cuisine">${r.cuisine}</p>
      <div class="r-meta">
        <span><i class="fas fa-clock"></i> ${r.time}</span>
        <span><i class="fas fa-receipt"></i> ${r.price}</span>
        <span class="${r.open ? 'open-tag' : 'closed-tag'}">${r.open ? 'Open' : 'Closed'}</span>
      </div>
    </div>
  </div>`;
}

function dishCard(d) {
  const inCart = cart.find(c => c.id === d.id);
  const qty = inCart ? inCart.qty : 0;
  return `
  <div class="dish-card">
    <div class="dish-img-wrap">
      <img src="${d.image}" alt="${d.name}" loading="lazy">
      <span class="veg-badge ${d.veg ? 'veg' : 'nonveg'}">${d.veg ? '🟢' : '🔴'}</span>
      ${d.spicy ? '<span class="spicy-badge">🌶️</span>' : ''}
    </div>
    <div class="dish-info">
      <div class="dish-top">
        <h3>${d.name}</h3>
        <span class="dish-rating">⭐ ${d.rating}</span>
      </div>
      <p class="dish-restaurant"><i class="fas fa-store"></i> ${d.restaurant}</p>
      <p class="dish-desc">${d.description}</p>
      <div class="dish-footer">
        <div class="dish-price">
          <span class="price-main">₹${d.price}</span>
          <span class="price-orig">₹${d.originalPrice}</span>
        </div>
        <div class="qty-control" id="qty-${d.id}">
          ${qty === 0 
            ? `<button class="btn-add" onclick="addToCart(${d.id})">Add +</button>`
            : `<div class="qty-btns">
                <button onclick="decreaseQty(${d.id})">−</button>
                <span>${qty}</span>
                <button onclick="increaseQty(${d.id})">+</button>
               </div>`
          }
        </div>
      </div>
    </div>
  </div>`;
}

function offerCard(o) {
  return `
  <div class="offer-card">
    <div class="offer-card-img">
      <img src="${o.image}" alt="${o.title}">
      <div class="offer-discount-badge">${o.discount}</div>
    </div>
    <div class="offer-card-body">
      <h3>${o.title}</h3>
      <p>${o.desc}</p>
      <div class="offer-meta">
        <span><i class="fas fa-tag"></i> ${o.code}</span>
        <span><i class="fas fa-calendar"></i> ${o.expiry}</span>
      </div>
      ${o.minOrder > 0 ? `<p class="min-order">Min. order: ₹${o.minOrder}</p>` : ''}
      <button class="btn-copy-code" onclick="copyCode('${o.code}')">Copy Code</button>
    </div>
  </div>`;
}

// ---- CART LOGIC ----
function addToCart(dishId) {
  const dish = DISHES.find(d => d.id === dishId);
  if (!dish) return;
  const existing = cart.find(c => c.id === dishId);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id: dish.id, name: dish.name, price: dish.price, image: dish.image, qty: 1 });
  }
  saveCart();
  updateCartUI();
  refreshDishCard(dishId);
  showToast(`${dish.name} added to cart! 🛒`);
}

function increaseQty(dishId) {
  const item = cart.find(c => c.id === dishId);
  if (item) { item.qty++; saveCart(); updateCartUI(); refreshDishCard(dishId); }
}

function decreaseQty(dishId) {
  const item = cart.find(c => c.id === dishId);
  if (!item) return;
  item.qty--;
  if (item.qty <= 0) cart = cart.filter(c => c.id !== dishId);
  saveCart();
  updateCartUI();
  refreshDishCard(dishId);
}

function refreshDishCard(dishId) {
  const el = document.getElementById(`qty-${dishId}`);
  if (!el) return;
  const inCart = cart.find(c => c.id === dishId);
  const qty = inCart ? inCart.qty : 0;
  if (qty === 0) {
    el.innerHTML = `<button class="btn-add" onclick="addToCart(${dishId})">Add +</button>`;
  } else {
    el.innerHTML = `<div class="qty-btns">
      <button onclick="decreaseQty(${dishId})">−</button>
      <span>${qty}</span>
      <button onclick="increaseQty(${dishId})">+</button>
    </div>`;
  }
}

function updateCartUI() {
  const countEl = document.getElementById('cartCount');
  if (countEl) countEl.textContent = getCartCount();
  renderCartSidebar();
}

function renderCartSidebar() {
  const itemsEl = document.getElementById('cartItems');
  const footerEl = document.getElementById('cartFooter');
  const totalEl = document.getElementById('cartTotal');
  if (!itemsEl) return;
  if (cart.length === 0) {
    itemsEl.innerHTML = '<div class="cart-empty"><i class="fas fa-shopping-bag"></i><p>Your cart is empty</p></div>';
    if (footerEl) footerEl.style.display = 'none';
    return;
  }
  itemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}">
      <div class="ci-info">
        <p class="ci-name">${item.name}</p>
        <p class="ci-price">₹${item.price} × ${item.qty}</p>
      </div>
      <div class="ci-qty">
        <button onclick="decreaseQty(${item.id})">−</button>
        <span>${item.qty}</span>
        <button onclick="increaseQty(${item.id})">+</button>
      </div>
    </div>
  `).join('');
  if (footerEl) footerEl.style.display = 'block';
  if (totalEl) totalEl.textContent = `₹${getCartTotal()}`;
}

function openCart() {
  document.getElementById('cartSidebar')?.classList.add('open');
  document.getElementById('cartOverlay')?.classList.add('open');
}
function closeCart() {
  document.getElementById('cartSidebar')?.classList.remove('open');
  document.getElementById('cartOverlay')?.classList.remove('open');
}

function checkout() {
  if (cart.length === 0) return;
  showToast('Order placed successfully! 🎉 Estimated delivery: 30 min');
  cart = [];
  saveCart();
  updateCartUI();
  closeCart();
}

// ---- SEARCH ----
function searchRestaurants() {
  const val = document.getElementById('locationInput')?.value.trim();
  if (!val) { showToast('Please enter a location or food item'); return; }
  window.location.href = `restaurants.html?q=${encodeURIComponent(val)}`;
}

// ---- LOGIN MODAL ----
function openLoginModal() {
  document.getElementById('loginModal')?.classList.add('open');
  document.getElementById('loginOverlay')?.classList.add('open');
}
function closeLoginModal() {
  document.getElementById('loginModal')?.classList.remove('open');
  document.getElementById('loginOverlay')?.classList.remove('open');
}
function switchTab(tab) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelector(`.tab[onclick="switchTab('${tab}')"]`)?.classList.add('active');
  document.getElementById('loginForm').style.display = tab === 'login' ? 'block' : 'none';
  document.getElementById('signupForm').style.display = tab === 'signup' ? 'block' : 'none';
}
function doLogin() {
  const email = document.getElementById('loginEmail')?.value;
  const pass = document.getElementById('loginPass')?.value;
  if (!email || !pass) { showToast('Please fill all fields'); return; }
  localStorage.setItem('tomatoUser', JSON.stringify({ email }));
  closeLoginModal();
  showToast('Welcome back! 👋');
  updateUserUI();
}
function doSignup() {
  const name = document.getElementById('signupName')?.value;
  const email = document.getElementById('signupEmail')?.value;
  const pass = document.getElementById('signupPass')?.value;
  if (!name || !email || !pass) { showToast('Please fill all fields'); return; }
  localStorage.setItem('tomatoUser', JSON.stringify({ name, email }));
  closeLoginModal();
  showToast(`Welcome, ${name}! 🎉`);
  updateUserUI();
}
function updateUserUI() {
  const user = JSON.parse(localStorage.getItem('tomatoUser') || 'null');
  const btn = document.querySelector('.btn-login');
  if (btn && user) btn.textContent = user.name?.split(' ')[0] || 'Account';
}

// ---- OFFERS ----
function copyCode(code) {
  navigator.clipboard.writeText(code).catch(() => {});
  showToast(`Code "${code}" copied! 📋`);
}

// ---- TOAST ----
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ---- ENTER KEY SEARCH ----
document.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    const li = document.getElementById('locationInput');
    if (document.activeElement === li) searchRestaurants();
    const rs = document.getElementById('restaurantSearch');
    if (document.activeElement === rs) {
      const cat = document.querySelector('.filter-btn.active')?.dataset.cat || 'all';
      filterAndRenderRestaurants(cat, rs.value);
    }
    const ms = document.getElementById('menuSearch');
    if (document.activeElement === ms) {
      const cat = document.querySelector('.menu-filter-btn.active')?.dataset.cat || 'all';
      renderMenuItems(cat, ms.value);
    }
  }
});

// Update user UI on load
updateUserUI();
