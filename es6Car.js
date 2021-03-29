// You have to declare the class before you can use it
// Classes are not hoisted like functions are
class Car {
  //constructor is a function
  constructor(color) {
    this.color = color;
  }
  location = 0;
  // Don't need to declare function keyword
  drive() {
    console.log("driving...");
    return this.location++;
  }

}

let lambo = new Car("red");
lambo.drive();
console.log(lambo.color)
console.log(lambo.location)