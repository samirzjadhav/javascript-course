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
