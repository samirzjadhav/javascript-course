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

// Function Returning Funnctions
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


// The call and apply method
const lufthansa = {
  airline: 'lufthansa',
  iataCode: 'Lh',
  bookings: [],
  // book: function(){}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};

lufthansa.book(239, 'samir jadhav');
lufthansa.book(166, 'pawan jadhaw');
console.log(lufthansa);

const eurowings = {
  airline: 'eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does Not Work
//book(23, 'jonh smith')

// Call Method
book.call(eurowings, 23, 'samir jadhav');
console.log(eurowings);

const swiss = {
  airline: 'Swiss Air Line',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 12, 'mark jonsan');
console.log(swiss);

//Apply Method
const flightData = [586, 'George copper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// The Bind method
// book.call(enrowings, 23,'sarah williams');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookLH(23, 'samir jadhav');
bookEW(37, 'ganesh shelke');
bookLX(54, 'jonh smith');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('samir jadhav');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

// lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
//addVAT = value => value + value * 0.23;
console.log(addVAT(145));

// function returning function
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
*/

/*
// Coding challange 1 

Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an
array with the number of replies for each option. This data is stored in the starter
'poll' object below.

Your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The
method does 2 things:

1.1. Display a prompt window for the user to input the number of the
selected option. The prompt should look like this:
What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)

1.2. Based on the input number, update the 'answers' array property. For
example, if the option is 3, increase the value at position 3 of the array by

1. Make sure to check if the input is a number and if the number makes
sense (e.g. answer 52 wouldn't make sense, right?)

2. Call this method whenever the user clicks the "Answer poll" button.

3. Create a method 'displayResults' which displays the poll results. The
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using
console.log(). This should be the default option. If type is 'string', display a
string like "Poll results are 13, 2, 4, 1".

4. Run the 'displayResults' method at the end of each
'registerNewAnswer' method call.

5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
object! So what should the this keyword look like in this situation?

The Complete JavaScript Course 21
Test data for bonus:
§ Data 1: [5, 2, 3]
§ Data 2: [1, 5, 3, 9, 6, 1]

Hints: Use many of the tools you learned about in this and the last section 😉
GOOD LUCK 😀
*/
/*
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    // Get answer
    const answer = Number(
      prompt(
        `${this.question}\n ${this.options.join('\n')}\n (Write option number)`
      )
    );
    console.log(answer);
    //  Register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answer[answer]++;
    this.displayResult();
    this.displayResult('string');

    console.log(this.answers);
  },

  displayResult(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll result are ${this.answers.join(' ,')} `);
    }
  },
};
//poll.registerNewAnswer();

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResult.call({ answers: [5, 2, 3] }, 'string');
poll.displayResult.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
*/

// Immediately Invoked function expression (IIFE)
const runOnce = function () {
  console.log(`this will never run again`);
};

runOnce();

(function () {
  console.log(`this will never run again`);
  // const isPrivate = 23;
})();

(() => console.log(`this will ALSO never run again`))();

{
  const isPrivate = 23;
  var notPrivate = 23;
}

//console.log(isPrivate);
console.log(notPrivate);
