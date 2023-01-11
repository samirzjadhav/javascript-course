// Exporting module
console.log("Exporting module");

// bocking code
console.log("start fetching users");
await fetch("https://jsonplaceholder.typicode.com/users");
console.log("end fetching users");

const shoppingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};
console.log(addToCart);

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
