/*
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
*/

/*
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
*/

/*
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
*/

/*
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

const myFullAge = ageSamir >= 20

console.log(now - 2004 > now - 2020)
*/

/*
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
*/

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

/*
// const markMass = 78;
// const markHeight = 1.69;
// const jonhMass = 92;
// const jonhHeight = 1.95;

const markMass = 95;
const markHeight = 1.88;
const jonhMass = 85;
const jonhHeight = 1.76;

const BMImark = markMass / markHeight ** 2;
const BMIjonh = jonhMass / (jonhHeight * jonhHeight);
const markHeigherBMI = BMImark > BMIjonh;

console.log(BMImark, BMIjonh, markHeigherBMI);
*/

/*
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
*/

/*
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
*/

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

/*
const BMImark = 28.3;
const BMIjohn = 23.9;

if (BMImark < BMIjohn) {
  console.log(`mark's BMI (${BMImark}) is heigher than john's(${BMIjohn})!`);
} else {
  console.log(`jonh's BMI(${BMIjohn}) is lower than Mark's(${BMImark}) !`);
}
*/

/*
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
*/

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
