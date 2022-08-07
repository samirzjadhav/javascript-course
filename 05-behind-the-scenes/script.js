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

