// var x = 10;

// function strangeAdd (x) {
//   function add (y) {
//     return x + y;
//   }
//   return add(x) + add(x);
// }

// var result = strangeAdd(5);

// console.log(result);

// var myArray = [2,3,4,5];
// function doStuff(arr) {
//   arr.splice(0);

//   console.log("within function:",arr);
// }
// doStuff(myArray);
// console.log(myArray);

function add (x, y) {
  return x + y
}

function double (x) {
  return add(x, x)
}
