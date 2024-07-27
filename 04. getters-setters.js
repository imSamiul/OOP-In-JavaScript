// Abstraction means hiding the complexity/details and showing only the essentials.
// We can hide the details by using private members. Replace "this" with "let".

function Circle(radius) {
  // Public member
  this.radius = radius;

  // Private member
  let defaultLocation = {};
}

// To define a getter/setter, use Object.defineProperty():

Object.defineProperty(this, "defaultLocation", {
  get: function () {
    return defaultLocation;
  },
  set: function (value) {
    defaultLocation = value;
  },
});
