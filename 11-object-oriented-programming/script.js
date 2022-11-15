"use strict";

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person("jonas", 1990);
console.log(jonas);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const mitilda = new Person("mitilda", 2003);
const jack = new Person("jack", 2019);
console.log(mitilda, jack);
console.log(jonas instanceof Person);
