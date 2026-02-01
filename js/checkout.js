function placeOrder() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  localStorage.setItem("orders", JSON.stringify(cart));
  localStorage.removeItem("cart");
  alert("Order placed (prototype)");
  location.href = "index.html";
}
