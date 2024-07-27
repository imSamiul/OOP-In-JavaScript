let person = { name: "Samiul" };
// Every object (except the root object) has a prototype (parent).
// To get the prototype of an object:
// let objectBase = Object.getPrototypeOf(person);

// In Chrome, you can inspect "__proto__" property. But you should
// not use that in the code.

// To get the attributes of a property:
// let descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString");
// console.log(descriptor);

// To set the attributes for a property:
Object.defineProperty(person, "name", {
  configurable: false, // cannot be deleted
  writable: false,
  enumerable: false,
});
