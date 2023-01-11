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

import add, { cart } from "./ShoppingCart.js";
add("pizza", 2);
add("cola", 5);
add("coffe", 2);

console.log(cart);
