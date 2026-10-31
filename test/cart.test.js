const test = require("node:test");
const assert = require("node:assert");
const { addItem, total } = require("../src/cart");

test("total of an empty cart is 0", () => {
  assert.strictEqual(total([]), 0);
});

test("total sums price x quantity", () => {
  let cart = addItem([], "Pen", 10, 3);
  cart = addItem(cart, "Book", 50);
  assert.strictEqual(total(cart), 80);
});

test("negative price is rejected", () => {
  assert.throws(() => addItem([], "Pen", -5), /Invalid/);
});
