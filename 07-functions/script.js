'use strict';
/*
const bookings = [];

const createBookings = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 1999;

  // object shorthand
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBookings('HW123');
createBookings('HW123', undefined, 123);
createBookings('HT858', 12, 500);
createBookings('POKE', 34, 1000);
createBookings('HER45', 54, undefined);


const flight = 'LH234';
const samir = {
  name: 'Samir Jadhaw',
  passport: 345435537463,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 345435537466) {
    alert('Checked in');
  } else {
    alert('Wrong passport');
  }
};

//this is same as doing...

// checkIn(flight, samir);
// console.log(flight);
// console.log(samir);

const newPassport = function (person) {
  person.passenger = Math.trunc(Math.random() * 1000000000);
};

newPassport(samir);
checkIn(flight, samir);

// Functions accepting callback function
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split('');
  return [first.toUpperCase(), ...others].join('');
};

// Higher-order function
const tranformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Tansformed by: ${fn.name}`);
};
tranformer('javascript is the best language', upperFirstWord);
tranformer('javascript is the best language', oneWord);

//js user callbacks all the time
const high5 = function () {
  console.log('👋🏻');
};
document.body.addEventListener('click', high5);

['samir', 'ganesh', 'parish'].forEach(high5);
*/

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('hey');
greeterHey('samir');
greeterHey('amol');

greet('hello')('samir');

const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('hi')('samir');
