var Car = function(color) {
  const carInstance = Object.create(Car.prototype);
  return carInstance;
}

Car.prototype = {
  location: 0,
  drive: function() {
    this.location++;
  },
  color: this.color
}

var honda = Car();
honda.drive();
honda.color = "white";
console.log(honda.color);