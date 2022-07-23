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

/*
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  // return retirement;
  //return `${firstName} retires in ${retirement} years`;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
};

console.log(yearUntilRetirement(1970, "samir"));
*/

/*
JavaScript Fundamentals – Part 2

Coding Challenge #1

Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).

A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!

Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores

2. Use the function to calculate the average for both teams

3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"

4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2

5. Ignore draws this time

Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 😉

GOOD LUCK 😀
*/
/*
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 7, 5));

//test 1
let scoreDolphine = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

console.log(scoreDolphine, scoreKoalas);

const checkwinner = function (avgDolhins, avgkoalas) {
  if (avgDolhins >= 2 * avgkoalas) {
    console.log(`Dolphin win 🏆 (${avgDolhins} vs. ${avgkoalas})`);
  } else if (avgkoalas >= 2 * avgDolhins) {
    console.log(`Koalas win 🏆 (${avgkoalas} vs. ${avgDolhins})`);
  } else {
    console.log(`no team wins...`);
  }
};
checkwinner(scoreDolphine, scoreKoalas);

//TEST 2
scoreDolphine = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphine, scoreKoalas);
checkwinner(scoreDolphine, scoreKoalas);
*/

/*
//ARRAYS
const friend1 = "samir";
const friend2 = "amol";
const friend3 = "ganesh";

const friends = ["samir", "parish", "om"];
console.log(friends);
console.log(friends.length);
console.log(friends[friends.length - 1]);

// const year = new Array(1991, 1989, 1878, 1789);
// console.log(year[1]);

friends[2] = "sam";
console.log(friends);
//friends = ["janas", "sam"];

const firstName = "samir";
const samir = [firstName, "jadhav", 2022 - 2004, "student", friends];
console.log(samir);

//EXECRISE
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const year = [1991, 1989, 1878, 1789, 1987];

const age1 = calcAge(year[0]);
const age2 = calcAge(year[1]);
const age3 = calcAge(year[2]);
const age4 = calcAge(year[year.lenght - 1]);
console.log(age1, age2, age3, age4);

const ages = [
  calcAge(year[0]),
  calcAge(year[1]),
  calcAge(year[2]),
  calcAge(year[3]),
  calcAge(year[year.length - 1]),
];

console.log(ages);
*/
/*
//ARRAY VARIABLE
const friends = ["samir", "mahesh", "om"];
//ADD ELEMENTS
friends.push("roshan");
console.log(friends);

friends.unshift("jonh");
console.log(friends);

//REMOVE ELEMENTS
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

//INDEXOF METHOD
friends.shift();
console.log(friends);
console.log(friends.indexOf("mahesh"));
console.log(friends.indexOf("bob"));

//INCLUDES METHOD
console.log(friends.includes("mahesh"));
console.log(friends.includes("bob"));
friends.push(23);
console.log(friends.includes(23));
console.log(friends.includes("23"));

if (friends.includes("mahesh")) {
  console.log("you have a friend called mahesh");
}
if (friends.includes("samir")) {
  console.log("ypu have a friends called samir");
}
*/

// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.

Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100.

2. And now let's use arrays! So create an array 'bills' containing the test data
below

3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before

4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44

Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array) 😉

GOOD LUCK 😀
*/
/*
const calctip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

//const calctip = (bill) => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calctip(bills[0]), calctip(bills[1]), calctip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);
*/

/*
//INTRODUCTION TO OBJECTS
const samirArray = [
  "samir",
  "jadhaw",
  2022 - 2004,
  "student",
  ["mahesh, roshan, om "],
];

console.log(samirArray);

const samir = {
  firstName: "samir",
  lastName: "jadhaw",
  age: 2022 - 2004,
  job: "student",
  friends: ["mahesh, roshan, om "],
};

console.log(samir.firstName);
*/
