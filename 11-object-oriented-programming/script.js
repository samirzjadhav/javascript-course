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

console.log(jonas.__proto__);
// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr.__proto__);
console.log(arr.__proto__.__proto__);
console.log(arr.__proto__ === Array.prototype);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique);

/*Coding Challenge #1
Your tasks:
1. Use a constructor function to implementa 'Car'.
 Acarhasa 'make' anda 'speed' property. The 'speed' property
 is the current speed of the car in km/h
2. Implementan 'accelerate' method that will increase the 
car 's speed by 10, and log the new speed to the console
3. Implementa 'brake' method that will decrease the car 
 's speed by 5,and log the new speed to the console
4. Create2 'Car' objects and experiment with calling 'accelerate'
and 'brake' multiple times on each of them
Test data:
§ Data car 1: 'BMW' going at 120 km/h
§ Data car 2: 'Mercedes' going at 95 km/h
GOOD LUCK 😀
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car("BMW", 120);
const mercedes = new Car("mercedes", 95);

bmw.accelerate();
bmw.brake();
bmw.accelerate();
bmw.accelerate();

// class expression
// const PersonCl =

// class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const sam = new PersonCl("samir", 2004);
console.log(sam);
sam.calcAge();

console.log(sam.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
sam.greet();

// 1. Classes is Not Hoisted
// 2. Classes are first-class citizes
// 3. Classes are excuted in strict mode
