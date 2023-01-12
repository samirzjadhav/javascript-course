//  Importing modules
// import { addToCart, totalPrice as price, tq } from "./shoppingCart.js";
// console.log(shippingCost);
// addToCart("bread", 5);
// sconsole.log(price, tq);

console.log("importing modules");

// import * as ShoppingCart from "./shoppingCart.js";
// ShoppingCart.addToCart("bread", 6);
// console.log(ShoppingCart.totalPrice);

// import add, { addToCart, totalPrice as price, tq } from "./ShoppingCart.js";
// import add from "./ShoppingCart.js";
// add("apple", 3);

// import add, { cart } from "./ShoppingCart.js";
// add("pizza", 2);
// add("cola", 5);
// add("coffe", 2);

// console.log(cart);

// // Top Level Await not work on modules
// // console.log("Start fetching");
// // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
// // const data = await res.json();
// // console.log(data);
// // console.log("End fetching");

// const getLastPost = async function () {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json();
//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// const lastPost = getLastPost();

// // not very clean
// lastPost.then((last) => console.log(last));

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

// IMPLEMENTATION OF THE MODULES PATTERN
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${product} ${quantity} added to cart (shipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity},${product} ordered from supplier`);
  };
  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart("pizza", 3);
ShoppingCart2.addToCart("bread", 4);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);
