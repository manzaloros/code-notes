var Car = function() {
  var carInstance = {};
  carInstance.location = 0;
  carInstance.drive = function() {
    carInstance.location++
  }
  return carInstance;
}

let subaru = Car();
subaru.drive();
subaru.drive();
console.log(subaru.location);