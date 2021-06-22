/* eslint-disable max-len */
// arguments object - no longer bound with arrow functions * arguments lists all the parameters for a given function.

const add = (a, b) => a + b;
console.log(add(55, 1));

// this keyword - no longer bound with arrorw functions

const user = {
  name: 'Nate',
  cities: ['Detroit', 'Denver', 'St. Louis'],
  printPlacesLived() {
    return this.cities.map((city) => `${this.name} has lived in ${city}`);
  },
};

console.log(user.printPlacesLived());

// Challenge Area

const multiplier = {
  // numbers - array of numbers
  numbers: [10, 20, 30],
  // multiplyBy - single number
  multiplyBy: 3,
  // multiply method - return a new array where the numbers have been mulitplied by multiplyBy
  multiply() {
    return this.numbers.map((nums) => nums * this.multiplyBy);
  },
};

console.log(multiplier.multiply());
