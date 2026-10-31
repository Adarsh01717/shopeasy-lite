function addItem(cart, name, price, qty = 1) {
  if (price < 0 || qty < 1) {
    throw new Error("Invalid price or quantity");
  }
  return [...cart, { name, price, qty }];
}

function total(cart) {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

module.exports = { addItem, total };
