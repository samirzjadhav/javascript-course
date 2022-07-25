// ALERT SECTION

let js = "amazing";
if (js === "amazing") alert("javascript is FUN!");

// STRING AND NUMBER

console.log(34 + 45 + 5 - 13);
console.log("samir");
console.log(18);

// VARIABLE NAME CONVENSTIONS

let firstName = "samir";
let middleName = "zaduji";
let lastName = "jadhav";

console.log(firstName + " " + middleName + " " + lastName);
console.log(lastName + " " + firstName + " " + middleName);

// using array.prototype.join to join using spaces
console.log([firstName, middleName, lastName].join(" "));
console.log([firstName, middleName, lastName].reverse().join(" "));

//  template strings
console.log(`${firstName} ${middleName} ${lastName}`);

let myFirstJob = "programmer";
let myCurrentJob = "teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);
console.log(myCurrentJob);

let person = "jonas";
let PI = 23.435;

// BOOLEAN
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof "jonas");
console.log(typeof false);
console.log(typeof 23);

// THIS IS DYNAMIC TYPING
javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

// UNDEFINED
let year;
console.log(year);
console.log(typeof year);

// DYNAMIC TYPING
year = 2004;
console.log(typeof year);

// NULL
console.log(typeof null);

// LET
// let are use in changing variable and not constant.

let age = 30;
age = 31;

// CONST
// const are use in constant variable are the variable not change.

const bithYear = 2004;
brthYear = 2003;

// NO DECLERATION
firstName = "samir";
console.log(firstName);

// MATHEMATICALL AND ARITHAMATIC OPERATORS
// MATH OPERATOR
const now = 2050;
const ageSamir = now - 2004; // 2050 - 2004 = 46;
const ageCuties = now - 2030; // 2050 - 2030 = 20;

console.log(ageSamir, ageCuties);
console.log(ageSamir * 2, ageSamir / 2, 3 ** 2); // 46 + 46 = 92; // 46 / 2 = 23 ;  // 3 x 3 = 9;
// 3 ** 2 mean 3 to the power of 2 = 3 * 3 //

// ASSIGNMENT OPERATOR
let x = 10 + 5; // 17 ;
x += 10; // 15 + 10 = 25;
x *= 4; // 42 x 4 = 100;
x++;
x--;
console.log(x);

// Comparison operators
console.log(ageSamir > ageCuties);
console.log(ageSamir < ageCuties);

console.log(ageSamir < x);
console.log(ageSamir >= 20);

const myFullAge = ageSamir >= 20;

console.log(now - 2004 > now - 2020);

const now = 2050;
const ageSamir = now - 2004; // 2050 - 2004 = 46;
const ageCuties = now - 2030; // 2050 - 2030 = 20;

console.log(now - 2004 > now - 2020);

let x, y;
x = y = 25 - 10 - 5; // 25 - 10 - 5 = 10
console.log(x, y);

// const averageAge = ageSamir + ageCuties / 2;

const averageAge = (ageSamir + ageCuties) / 2;

console.log(ageSamir, ageCuties, averageAge);

/*
JavaScript Fundamentals – Part 1

Coding Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:

BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).

Your tasks:

1. Store Mark's and John's mass and height in variables

2. Calculate both their BMIs using the formula (you can even implement both
versions)

3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

Test data:

§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.

§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/

const markMass = 78;
const markHeight = 1.69;
const jonhMass = 92;
const jonhHeight = 1.95;

const markMass = 95;
const markHeight = 1.88;
const jonhMass = 85;
const jonhHeight = 1.76;

const BMImark = markMass / markHeight ** 2;
const BMIjonh = jonhMass / (jonhHeight * jonhHeight);
const markHeigherBMI = BMImark > BMIjonh;

console.log(BMImark, BMIjonh, markHeigherBMI);

//TEMPLATE STRING
const firstName = "samir";
const year = 2022;
const birthYear = 2004;
const job = "student";

const samir =
  "I'm " +
  firstName +
  ", a " +
  (year - birthYear) +
  "" +
  " year old " +
  job +
  "!";

console.log(samir);

// TEMPLATE LITERALS
const samirNew = `I'm ${firstName}, a ${year - birthYear}  year old  ${job} !`;

console.log(samirNew);

console.log(`just a regular string...`);

// MULTILINE STRING
console.log("string with \n\
 multiple \n\
 lines ");

console.log(`string with
 multiple
 lines`);

//IF AND ELSE CONTROLS STRACTURE
const age = 18;
if (age >= 18) {
  console.log(`Sarah can start driving license 🚗 `);
} else {
  const yearLeft = 18 - age;
  console.log(`Sarah is too young. wait another ${yearLeft} years :)`);
}

const birthYear = 2004;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

/*
Coding Challenge #2

Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.

Your tasks:

1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"

Hint: Use an if/else statement 😉

GOOD LUCK 😀
*/

const BMImark = 28.3;
const BMIjohn = 23.9;

if (BMImark < BMIjohn) {
  console.log(`mark's BMI (${BMImark}) is heigher than john's(${BMIjohn})!`);
} else {
  console.log(`jonh's BMI(${BMIjohn}) is lower than Mark's(${BMImark}) !`);
}

//TYPE CONVERSION
const inputYear = "2004";
console.log(Number(inputYear), inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(Number("samir"));
console.log(typeof NaN);

console.log(String(23), 23);

//TYPE COERCION
console.log("I am " + 18 + " year old");

//STRING CONVERTED INTO NUMBER DECAUSE -
console.log("23" - "10" - 3);

//NUMBER CONVERTED INTO STRING BECAUSE +
console.log("23" + "10" + 3);

console.log("23" * "4");

console.log("28" / "2");

console.log("25" > "18");

let n = "1" + 1; // 11
n = n - 1;
console.log(n);

// TRUTHY VALUE AND FALSY  VALUE
// 5 falsy value : 0, '', undefined, null, NaN, false
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("samir"));
console.log(Boolean({}));
console.log(Boolean(""));
console.log(Boolean("9"));

const money = 100; // 0
if (money) {
  console.log("Don't spend it all :)");
} else {
  console.log("you should get a job");
}

let height;
if (height) {
  console.log(`YAY! Height is defined ${height}`);
} else {
  console.log("Height is UNDEFINED");
}

//strick equality operator
const age = 18;
// const age ='18';
if (age === 18) console.log("you just became an adult :) (strick)");

// loose equality operator
if (age == 18) console.log("you just became an adult :) (Loose)");

const favourite = Number(prompt("What's your favourite number ?"));
console.log(favourite);

if (favourite === 23) {
  // 22 === 23 -> FALSE
  console.log("Cool! 23 is an amezing number!");
} else if (favourite === 7) {
  console.log(" 7 is also a cool number");
} else if (favourite === 9) {
  console.log(" 9 is also a cool number");
} else {
  console.log("number is not 23 or 7");
}

if (favourite !== 23) {
  console.log("Why not 23?");
}

//logical operator
const hasDriverLicense = true;
const hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

const shouldDrive = hasDriverLicense && hasGoodVision;

if (hasDriverLicense && hasGoodVision) {
  console.log("sarah is able to drive!");
} else {
  console.log("someone else should drive...");
}

const isTired = false;
console.log(hasDriverLicense && hasGoodVision && isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log("sarah is able to drive!");
} else {
  console.log("someone else should drive...");
}

/*
Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!

Your tasks:
1. Calculate the average score for each team, using the test data below

2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)

3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉

4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy

Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK 😀
*/

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy 🏆");
} else if (scoreKoalas > scoreDolphins) {
  console.log("Koalos win the trophy 🏆");
} else if (scoreKoalas === scoreDolphins) {
  console.log("both win the trophy 🏆");
}

//BONUS 1
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy 🏆");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("Koalos win the trophy 🏆");
} else if (
  scoreKoalas === scoreDolphins &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("both win the trophy 🏆");
} else {
  console.log("no one wins the trophy 😭");
}

//SWITCH STATEMENT
const day = "monday";

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory video");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examoles");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory video");
} else if (day === "wednesday || thursday") {
  console.log("Write code examoles");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday || sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day!");
}

//CONDITIONAL (TERNARY) OPERATOR
const age = 17;
age >= 18
  ? console.log("I like to drink wine 🍷")
  : console.log("I like to drink water 💧");

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);

/*
Coding Challenge #4

Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.

Your tasks:

1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)

2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”

Test data:
§ Data 1: Test for bill values 275, 40 and 430

Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
${bill + tip}`);
