'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 enchanced object literals
  openingHours,

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // orderDelivery: function (obj) {
  //   console.log(obj);
  // },

  //Delivery section
  // orderDelivery: function ({
  //   starterIndex = 1,
  //   mainIndex = 0,
  //   time = '20:30',
  //   address,
  // }) {
  //   console.log(
  //     `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
  //   );
  // },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:30', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  // orderPasta: function (ing1, ing2, ing3) {
  //   console.log(
  //     `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
  //   );
  // },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  // orderPizza: function (mainIngredient, ...otherIngredient) {
  //   console.log(mainIngredient);
  //   console.log(otherIngredient);
  // },

  orderPizza(mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

// Working with string - part - 3
console.log('a+very+nice+string'.split('+'));
console.log('Samir Jadhaw'.split(' '));

const [firstName, lastName] = 'Samir Jadhaw'.split(' ');
console.log([firstName, lastName]);

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalization = function (name) {
  const names = name.split(' ');
  const nameUpper = [];

  for (const n of names) {
    // nameUpper.push(n[0].toUpperCase() + n.slice(1));
    nameUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(nameUpper.join(' '));
};

capitalization('samir om roshan ganesh yash');
capitalization('samir jadhaw');

// padding a string
const massage = 'Go to gate 23!';
console.log(massage.padStart(20, '+').padEnd(30, '+'));
console.log('jonas'.padStart(20, '+').padEnd(30, '+'));

//Real world example
const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(32133212));
console.log(maskCreditCard(32133212574383234));
console.log(maskCreditCard('957863687829898934'));

// Repeat
const massage2 = 'Bad waether... All  Departues Delayed...';
console.log(massage2.repeat(5));

const planeInLine = function (n) {
  console.log(`There are ${n} plane in line ${'✈'.repeat(n)}`);
};
planeInLine(5);
planeInLine(3);

/*
// Working with string - part - 2
const airline = 'TAP Air Portugal';
console.log(airline.toLocaleLowerCase());
console.log(airline.toLocaleUpperCase());

// Fix Capitalization in name
const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = 'hello@samir.io';
const loginEmail = '  Hello@samir.Io  \n';
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();

console.log(trimmedEmail);

// Best ways to normalized
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// relacing
const priceGB = '288,97$';
const priceUS = priceGB.replace('$', '@').replace(',', '.');
console.log(priceUS);

const announcement = 'ALL passangers come boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

//Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('boinf'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

//Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('you are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};
checkBaggage('I have a laptop, some Food and a Pocket Knife');
checkBaggage('Socks and  camera');
checkBaggage('Got some snacks and gun for protection');

// Working with string - part- 1
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(airline[0]);
console.log(plane[0]);

console.log(airline.length);
console.log('B342'.length);

console.log(airline.indexOf('o'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

//The length of the extracted string is always going to end minus beginning (7-4 = 3 )
console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMIddleSeat = function (seat) {
  // B and E are middle seat
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('you got the middle seat 😬');
  } else {
    console.log('you got lucky');
  }
};
checkMIddleSeat('11B');
checkMIddleSeat('23C');
checkMIddleSeat('3E');

console.log(new String('Jonas'));
console.log(typeof new String('Jonas'));
console.log(typeof new String('Jonas').slice(1));


//Maps Fundamentals
const rest = new Map();
rest.set('name', 'Classica Italioo');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');

console.log(rest.get('name'));
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open :D')
  .set(false, 'we are close :(');

console.log(rest.get('open'));
console.log(rest.get('categories'));

const time = 10;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
//rest.clear();
console.log(rest.size);

const arr = [1, 2];
rest.set(arr, 'test');
console.log(rest.get(arr));
console.log(document.querySelector('h1'), 'heading');
console.log(rest);

//Maps Iteration
const question = new Map([
  ['question', 'What is the best programing language in the world?'],
  [1, 'c'],
  [2, 'java'],
  [3, 'javaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again'],
]);

console.log(question);

//Covert object to map
console.log(Object.entries(openingHours));
const HoursMap = new Map(Object.entries(openingHours));
console.log(HoursMap);

//Quiz  app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

const answer = 3;
//const answer = Number(prompt('your answer'));
console.log(answer);

console.log(question.get(question.get('correct') === answer));

//Convert map to array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);

const ordersSet = new Set([
  'pasta',
  'pizza',
  'pizza',
  'risotto',
  'risotto',
  'pasta',
]);

console.log(ordersSet);

console.log(new Set('jonas'));
console.log(ordersSet.size);
console.log(ordersSet.has('pizza'));
console.log(ordersSet.has('bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('risotto');
//ordersSet.clear();
console.log(ordersSet);

//for loop sets
for (const order of ordersSet) console.log(order);
//Example
const staff = ['waiter', 'manager', 'chef', 'waiter', 'chef'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set(['waiter', 'manager', 'chef', 'waiter', 'chef']).size);

console.log(new Set('samirjadhaw').size);

console.log(`we are open on ${properties}`);

for (const day of Object.keys(openingHours)) {
  console.log(day);
}

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

//WITH optional chaining
console.log(restaurant.openingHours.fri?.open);
console.log(restaurant.openingHours?.fri?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Method
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRotten?.(0, 1) ?? 'Method does not exist');

//Arrays
//const users = [];
const users = [{ name: 'jonas', email: 'hello@gmail.com' }];
console.log(users[0]?.email ?? 'user empty array');

if (users.length > 0) console.log(users[0].email);
else console.log('user array empty');


//Looping arrays: the for-of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  //console.log(`${item[0] + 1}:${item[1]}`);
  console.log(`${i + 1}: ${el}`);
}

//console.log([...menu.entries()]);

//Logical assigment operator
const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'la piazza',
  owner: 'roshan gupta',
};

// OR assignment operator
rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;

rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

//Nullish assignment operator (null and undifined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//AND assignment operator
rest1.owner = rest1.owner && '<ANONYMOUS>';
rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

// Nullish coalescing operator
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

// ---- OR OPERATOR ----
// Use ANY data Type, return Any data type, short-circuiting
console.log('--- OR ---');
console.log(3 || 'jonas');
console.log('jonas' || 3 || 34);
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'hello' || 23 || null);

// --- AND OPERATOR ----
console.log('--- AND ----');
console.log(0 && 'jonas');
console.log(23 && 'samir');
console.log('hello' && 23 && null && 'jonas');

// practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

//restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

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
  // console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(1, 2, 3, 4);
add(5, 6, 7);
add(8, 9, 10);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

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
*/
