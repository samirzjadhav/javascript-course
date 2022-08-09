'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // orderDelivery: function (obj) {
  //   console.log(obj);
  // },

  //Delivery section
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:30',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

//Rest pattern and parameters

// 1) DESTRUCTURING
//Spread, because on RIGHT side of =
const arr = [1, 2, 3, [4, 5]];

//REST, because on LEFT side of =
const [a, b, ...other] = [1, 2, 3, 4, 5, 6];
console.log(a, b, other);

const [pizza, , risotto, ...otherfood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherfood);

//Object rest pattern
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//1) FUNCTIONS
const add = function (...numbers) {
  console.log(numbers);
};
add(1, 2, 3, 4);
add(5, 6, 7);
add(8, 9, 10);

// Spread operator (...)
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);
console.log(...newMenu);

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(...menu);

//Iterables: array, string, maps, sets. Not objects
const str = 'jonas';
const letter = [...str, '', 's.'];
console.log(letter);
console.log(...str);
//console.log(`${...str} schmedtmann`)

//Real-world example
const ingredients = [
  prompt("let's make pasta! ingredients 1?"),
  prompt('ingredients 2?'),
  prompt('ingredients 3?'),
];
console.log(ingredients);

// // restaurant.orderPasta([ingredients[0], ingredients[1], ingredients[2]]);
restaurant.orderPasta(...ingredients);

//Object
const newRestaurant = {
  foundedIn: 1980,
  ...restaurant,
  founder: 'Guiseppe',
};
console.log(newRestaurant);

//copy object
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

// restauraant order delivery
restaurant.orderDelivery({
  time: '2:30',
  address: 'chotibori ward no.2',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  starterIndex: 1,
  address: 'butibori ward no.4',
});

// Object destructuring
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default value
const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

//Mutating value
let a = 111;
let b = 999;
const obj = { a: 23, b: 55, c: 45 };
({ a, b } = obj);
console.log(a, b);

//Nested objects
const {
  fri: { open = o, close = c },
} = openingHours;
console.log(o, c);

const arr = [2, 3, 4];
const a = [0];
const b = [1];
const c = [2];

const [x, y, z] = arr;
console.log([x, y, z]);

const [first, , second] = restaurant.categories;
console.log(first, second);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//Switching Variable

const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return value from a function
const [starter, mainCourse] = restaurant.order(1, 2);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 3, [4, 5]];
//const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default values
//const [p, q, r] = [2, 3];
const [p = 1, q = 1, r = 1] = [9, 2];
console.log(p, q, r);
