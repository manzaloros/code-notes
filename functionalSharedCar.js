var Car = function(color) {
  var carInstance = {color: color};
  extend(carInstance, carMethods);
  return carInstance
}

var carMethods = {

  location: 0,
  drive: function() {
    this.location++;
  },
  paint: function(newColor) {
    this.color = newColor;
  }
}

var extend = function(obj, obj2) {
  for (let key in obj2) {
      obj[key] = obj2[key];
  }
  console.log(obj)
}

var mazda3 = Car("white");
mazda3.paint("burgundy");
console.log(mazda3.color)