let orders = JSON.parse(localStorage.getItem("orders")) || [];
let div = document.getElementById("orders");

if (orders.length === 0) {
  div.innerHTML = "No orders";
} else {
  orders.forEach(o => {
    div.innerHTML += `<p>${o.name} - Rs.${o.price}</p>`;
  });
}
