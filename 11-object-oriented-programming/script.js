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

// Prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

const samir = new Person("samir", 2004);
samir.calcAge();
jonas.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(mitilda));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototypeOfLinkedObjects
Person.prototype.species = "homo species";
console.log(jonas.species, mitilda.species);

console.log(jonas.hasOwnProperty("firstName"));
console.log(jonas.hasOwnProperty("birthYear"));
