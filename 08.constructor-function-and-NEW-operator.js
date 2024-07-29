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

console.log(samiul);
console.log(abbu);
console.log(borshon);

const ammu = "Ruma";
// check the instance of object
console.log("Samiul is instance of Person", samiul instanceof Person); // true
console.log("Ammu is instance of Person", ammu instanceof Person); //false

//
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}
