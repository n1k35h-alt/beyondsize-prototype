const products = [
  {
    id: 1,
    name: "Woolen-Scarf-red",
    price: 650,
    image: "assets/products/red-scarf",
    stock: true
  },
  {
    id: 2,
    name: "Woolen-Scarf-Black",
    price: 650,
    image: "assets/products/black-scarf",
    stock: true
  },
  {
    id: 3,
    name: "Woolen-Scarf-",
    price: 3800,
    image: "assets/products/jacket3.png",
    stock: false
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
