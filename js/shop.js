// shop.js

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Update cart count
function updateCartCount() {
  const countSpan = document.getElementById("cart-count");
  if(countSpan) countSpan.textContent = cart.length;
}

// Add product to cart
function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(`${name} added to cart`);
}

// Remove product by index (used in cart page)
function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  renderCart();
}

// Render cart on cart.html
function renderCart() {
  const container = document.getElementById("cart-items");
  if (!container) return;

  container.innerHTML = "";
  let total = 0;

  if(cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty</p>";
    return;
  }

  cart.forEach((item, i) => {
    total += item.price;
    container.innerHTML += `
      <p>${item.name} - Rs. ${item.price} 
        <button onclick="removeFromCart(${i})">Remove</button>
      </p>
    `;
  });

  container.innerHTML += `<hr><strong>Total: Rs. ${total}</strong>`;
}

// Initialize
updateCartCount();
renderCart();
