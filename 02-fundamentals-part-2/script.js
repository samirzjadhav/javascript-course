/*
// ACTIVETING STRICT MODE
"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can Drive :D");

// const interface = "audio";
// const private = 324;
//const if = 234;

// console.log(interface, private);
*/

/*
//FUNCTION
function logger() {
  console.log("My name is Samir");
}

// CALLING / RUNNING / INVOKKING FUNCTION
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 1);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");
*/

/*
//FUNCTION DECLARATIONS
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(2004);
console.log(age1);

//FUNCTION EXPRESSIONS
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge1(2002);
console.log(age1, age2);
*/

/*
//ARROW FUNCTION
const calsAge3 = (birthYear) => 2022 - birthYear;
const age3 = calsAge3(2004);
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearUntilRetirement(2004, "samir"));
console.log(yearUntilRetirement(2000, "sam"));
console.log(yearUntilRetirement(1990, "ganesh"));
*/

/*
// FUNCTIONS CALLING OTHER FUNCTIONS
const cutPieces = function (fruit) {
  return fruit * 4;
};

function fruitProcessor(apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangPieces = cutPieces(oranges);

  const juice = `juice with ${applePieces} pieces of apple and ${orangPieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 5));
*/
