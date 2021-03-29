var Car = function(color) {
  this.color = color;
  this.location = 0;
}

Car.prototype = {
  drive: function() {
    this.location++;
  },
  setMake: function(make) {
    this.make = make;
  }
}

var forerunner = new Car("white");
forerunner.drive();
forerunner.setMake("toyota");
forerunner.drive();
console.log(forerunner.color)
console.log(forerunner.location)
console.log(forerunner.make)
