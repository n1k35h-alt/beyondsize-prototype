const cartDiv = document.getElementById("cart");
const cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.forEach(item => {
  cartDiv.innerHTML += `
    <div class="cart-item">
      <span>${item.name}</span>
      <span>Rs ${item.price}</span>
    </div>
  `;
});
