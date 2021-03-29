// Returns value of number rounded to nearest integer
Math.round = function(number) {
  // If number is whole number, return it
  // Get decimal part of number
  // Convert number to string and return new number with 0 instead of string
  var stringNum = String(number);
  var indexOfDecimal = stringNum.indexOf(".");
  if (indexOfDecimal === -1) {
    return number;
  }

  var wholeNumber = +stringNum.slice(0,indexOfDecimal);
  var decimalString = stringNum.slice(indexOfDecimal);
  var decimal = +decimalString;

  // If decimal number is lower than .5
  // Return whole number without decimal

  // If the the decimal number is higher than or equal to .5,
  // return whole number with added decimal
  return decimal < 0.5 ? wholeNumber : (wholeNumber + 1)
};

// Rounds a number up to the nearest largest integer
Math.ceil = function(number) {
  // return whole number plus 1
  return String(number).indexOf(".") !== -1 ? (number - +String(number).slice(String(number).indexOf("."))) + 1 : number;

};

// Returns largest integer less than or equal to given number
Math.floor = function(number) {
  // return whole number
  return String(number).indexOf('.') !== -1 ? +String(number).slice(0, String(number).indexOf('.')) : number;
};

console.log(Math.ceil(5.4))