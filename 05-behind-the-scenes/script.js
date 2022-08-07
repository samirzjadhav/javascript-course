'use strict';

function calAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `You are ${age}, born in ${birthYear}`;
    console.log(output);
  }
  printAge();

  if (birthYear >= 1981 && birthYear < 1996) {
    var millienial = true;
    //Creating NEW variable with same name as outer scope's variable
    const firstName = 'samir';

    //Reassigning outer scope's variable
    //output = 'new output!';

    const str = `Oh, and you're millinial, ${firstName}`;
    console.log(str);

    function add(a, b) {
      return a + b;
    }
  }

  console.log(millienial);

  return age;
}

const firstName = 'jonas';
calAge(1991);

//Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'samir';
let job = 'student';
const year = 2004;

// function
console.log(addDecl(2, 4));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(numProducts);

if (!numProducts) deleteShopingCart();
var numProducts = 10;

function deleteShopingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);


//THIS KEYWORD

console.log(this);

const calAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calAge(2004);

const calAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calAgeArrow(2006);

const jonas = {
  year: 2004,
  calAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
calAge();

// Brrowed method
const matila = {
  year: 2008,
};

matila.calAge = jonas.calAge;
matila.calAge();

const f = jonas.calAge;
f();


//Regular Function vs Arrow Function

//var firstName = 'samir';
const jonas = {
  firstName: 'samir',
  year: 1991,
  calAge: function () {
    console.log(2037 - this.year);

    SOLUTION 1
    const self = this; // self or that
    const isMillenial = function () {
      console.log(self);
      console.log(self.year >= 1991 && self.year <= 1996);
      // console.log(this);
      //console.log(this.year >= 1991 && this.year <= 1996);
    };
    isMillenial();

    //SOLUTION 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  // greet: () => console.log(`hey ${this.firstName}`),

  greet: () => {
    console.log(`hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calAge();

// Arguments Keyword

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 3, 5, 16);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 3, 5);


let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'jonas',
  age: 30,
};
const friend = me;
friend.age = 29;

console.log('Me', me);
console.log('Friend:', friend);


// Primitives vs Objects
//primitives type
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Devis';
console.log(lastName, oldLastName);

//reference type
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 25,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Devis';

console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

//Copping objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Devis';

jessicaCopy.family.push('Jonh');
jessicaCopy.family.push('Mary');

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
