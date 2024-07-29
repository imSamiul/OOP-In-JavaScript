"use strict";

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // never do this.
  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
};
const samiul = new Person("Samiul", 1991);

//creating multiple objects using constructor function
const abbu = new Person("Rezaul", 1965);
const borshon = new Person("Borshon", 2005);

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

samiul.calcAge();
abbu.calcAge();
borshon.calcAge();

console.log(samiul.__proto__);
console.log(samiul.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(samiul));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = "Homo Sapiens";
console.log(samiul.species, abbu.species);

console.log(samiul.hasOwnProperty("firstName"));
console.log(samiul.hasOwnProperty("species"));
