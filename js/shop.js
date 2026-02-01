const products = [
  {
    id: 1,
    name: "Woolen-Scarf-red",
    price: 650,
    image: "assets/red-scarf.jpg",
    stock: true
  },
  {
    id: 2,
    name: "Woolen-Scarf-Black",
    price: 650,
    image: "assets/black-scarf.jpg",
    stock: true
  },
  {
    id: 3,
    name: "Woolen-Scarf-blue",
    price: 650,
    image: "assets/blue-scarf.jpg",
    stock: true
  }
];

const grid = document.getElementById("products");

products.forEach(p => {
  grid.innerHTML += `
    <div class="product">
      <img src="${p.image}">
      <h3>${p.name}</h3>
      ${
        p.stock
          ? `<p>Rs ${p.price}</p><a class="btn" onclick="addToCart(${p.id})">Add</a>`
          : `<div class="out">Out of stock</div>`
      }
    </div>
  `;
});

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(products.find(p => p.id === id));
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
}
