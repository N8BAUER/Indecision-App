// when working with classes the class name starts with an upper case
class Person {
  // constructor is called when a new class is made
  // can use argument default values in the constructor function
  // constructor is called implicitly while methods are of a class have to be called explicitly
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    // interpolate means to inject as we see below with the template literals
    return `Hi I am ${this.name}!`;
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

// use extends to implement inheritance
// classes start with an upper case letter
class Student extends Person {
  constructor(name, age, major) {
    // super refers to the parent class - call it as a function
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    //this is a cute way to return undefined as false in instance of no value
    return !!this.major;
  }
  // example of overriding a method
  getDescription() {
    let description = super.getDescription();

   this.hasMajor() && (description += ` Their major is ${this.major}.`);

    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super();
    this.homeLocation = homeLocation;
  }

  getGreeting() {
    let travelersGreeting = super.getGreeting();

    !!this.homeLocation && (travelersGreeting += ` I'm visiting from ${this.homeLocation}.`)

    return travelersGreeting;
  }
}
const me = new Traveler("N8BIZ", 34, "Lakeport, Michigan");
const me2 = new Traveler(undefined, undefined, "Nowhere Ville");

console.log(me.getGreeting(), me2.getGreeting());
