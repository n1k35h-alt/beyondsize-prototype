function placeOrder() {
  const order = {
    name: name.value,
    phone: phone.value,
    address: address.value,
    txn: txn.value,
    cart: JSON.parse(localStorage.getItem("cart"))
  };

  console.log(order);
  alert("Order placed! Owner will confirm.");

  localStorage.removeItem("cart");
}
