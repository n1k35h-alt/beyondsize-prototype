// CART SYSTEM USING LOCALSTORAGE
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update navbar cart count
function updateCartCount() {
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  document.getElementById('cart-count').innerText = cartCount;
}

// Add product to cart
function addToCart(name, price, image) {
  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ name, price, image, quantity: 1 });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  alert(`${name} added to cart`);
}

// Initialize navbar count
updateCartCount();
