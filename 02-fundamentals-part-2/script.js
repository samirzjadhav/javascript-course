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

/*
//DOT OPERATOR
const samir = {
  firstName: "samir",
  lastName: "jadhaw",
  age: 2022 - 2004,
  job: "student",
  friends: ["mahesh", "roshan", "om "],
};
console.log(samir.friends.length);
console.log(samir.lastName);
console.log(samir["firstName"]);

for (const key of Object.keys(samir)) {
  console.log(key + " is " + samir[key]);
}

const nameKey = "Name";
console.log(samir["first" + nameKey]);
console.log(samir["last" + nameKey]);

//console.log(samir.'last'+nameKey)

const interestedIn = prompt(
  "what do you want to know about samir? choose bewtween firstName, lastName, age, job, friends"
);

if (samir[interestedIn]) {
  console.log(samir[interestedIn]);
} else {
  console.log(
    "Wrong request! choose bewtween firstName, lastName, age, job, friends"
  );
}

samir.location = "nagpur";
samir["twitter"] = "@samirzjadhav";
console.log(samir);

//CHALLENGES
//'samir has 3 friends, and his bestfriend is called om '
console.log(
  `${samir.firstName} has ${samir.friends.length} friends, and his bestfriends is called ${samir.friends[2]}`
);
*/

/*
//CODING CHALLANGE NO 3

Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)

Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)

2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method

3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.

GOOD LUCK 😀
*/

// const jonhSmithBMI = 92 / 1.95 ** 2;
// const markMillerBMI = 78 / 1.69 ** 2;
// console.log(jonhSmithBMI, markMillerBMI);
/*
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMi: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const jonh = {
  fullName: "Jonh Smith",
  mass: 92,
  height: 1.95,
  calcBMi: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMi();
jonh.calcBMi();
console.log(mark.bmi, jonh.bmi);

if (mark.bmi > jonh.bmi) {
  console.log(
    `${mark.fullName}'s BMI ${mark.bmi} is higher than ${jonh.fullName}'s BMI ${jonh.bmi}`
  );
} else if (jonh.bmi > mark.bmi) {
  console.log(
    `${jonh.fullName}'s BMI ${jonh.bmi} is higher than ${mark.fullName}'s BMI ${mark.bmi}`
  );
}
*/
/*
//LOOP
console.log("Lifting weight repetition 1 🏋️‍♂️");
console.log("Lifting weight repetition 2 🏋️‍♂️");
console.log("Lifting weight repetition 3 🏋️‍♂️");
console.log("Lifting weight repetition 4 🏋️‍♂️");
console.log("Lifting weight repetition 5 🏋️‍♂️");
console.log("Lifting weight repetition 6 🏋️‍♂️");
console.log("Lifting weight repetition 7 🏋️‍♂️");
console.log("Lifting weight repetition 8 🏋️‍♂️");
console.log("Lifting weight repetition 9 🏋️‍♂️");
console.log("Lifting weight repetition 10 🏋️‍♂️");

//for loop keeps running while condition is True
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weight repetition ${rep} 🏋️‍♂️`);
}
*/

/*
//LOPPING ARRAYS,BREAKING AND CONTINUINGgit git
const samir = [
  "samir",
  "jadhaw",
  2022 - 2004,
  "student",
  ["mahesh, roshan, om "],
  true,
];
const types = [];
// console.log(samir[0]);
// console.log(samir[1]);
// ...
// console.log(samir[4]);
// samir[5] is NOT exist

for (let i = 0; i < samir.length; i++) {
  //Reading from samir array
  console.log(samir[i], typeof samir[i]);

  //Filling types array
  types[i] = typeof samir[i];
  types.push(typeof samir[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

//CONTINUE AND BREAK
console.log("--- CONTINUE ONLY STRING ---");
for (let i = 0; i < samir.length; i++) {
  if (typeof samir[i] !== "string") continue;
  console.log(samir[i], typeof samir[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < samir.length; i++) {
  if (typeof samir[i] === "number") break;
  console.log(samir[i], typeof samir[i]);
}
*/

/*
//LOPPING BACKWARDS AND LOPPING IN LOOPS
const samir = [
  "samir",
  "jadhaw",
  2022 - 2004,
  "student",
  ["mahesh, roshan, om "],
];

//LOPPING BACKWARDS
for (let i = samir.length - 1; i >= 0; i--) {
  console.log(i, samir[i]);
}

//LOPPING IN LOOPS
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`---Starting Execrcise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`exercise: ${exercise} Lifting weight repetition ${rep}🏋🏻`);
  }
}
*/

/*
//THE WHILE LOOP

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weight repetition ${rep}🏋🏻`);
}

let rep = 1;
while (rep <= 10) {
  console.log(`While: Lifting weight repetition ${rep}🏋🏻`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`loop is about to end...`);
}
*/

/*
// Coding Challenge #4
Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:

1. Create an array 'bills' containing all 10 test bill values

2. Create empty arrays for the tips and the totals ('tips' and 'totals')

3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!

Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays 😉

Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:

4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together

4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)

4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

const calctip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];

const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calctip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage([32, 45, 56]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
