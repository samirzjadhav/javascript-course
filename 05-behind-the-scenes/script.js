'use strict';

/*
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
*/

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
