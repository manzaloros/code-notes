// function findMinMax(list) {
//   //create output variable
//   let minMax = [];
//   //iterate over array
//   let min = list.reduce((smallest, current) => {
//     return Math.min(smallest, current);
//   })
//   let max = list.reduce((largest, current) => {
//     return Math.max(largest, current);
//   })
//   return [min].concat(max);
//     //
//   //return output
// }

// function fillGrid(n) {
//   //create output array
//   let container = [];
//   //create columns array
//   let totalN = n * n;
//   let columns = [];
//   for (let i = 1 ; i <= totalN; i++) {
//     columns.push(i);
//   }
//   console.log(columns)
//   for (let i = 0; i < totalN; i+=n) {
//     let row = columns.slice(i, i + n);
//     container.push(row);
//   }  
//   //n will be number of columns array
//   //add rows and columns to output array
//   //return output
//   return container;
// }

// function reverseSecondHalf(list) {
//   //create output array
//   //length variable
//   let length = list.length;
//   console.log(length)
//   //slice var
//   let sliceIndex = 0;
//   //if length is odd
//   if (length % 2 !== 0) {
//     //slice from length / 2 math ceil
//     sliceIndex = Math.ceil(length / 2);
//     console.log(sliceIndex)
//   } else {
//     //else 
//     //slice from length / 2
//     sliceIndex = length / 2
//   }
//   //2nd half is slice(slicevar, end of array)
//   let lastHalf = list.slice(sliceIndex, length).reverse();
//   console.log(lastHalf)
//   //1st half is arrayslice 
//   let firstHalf = list.slice(0, sliceIndex);
//   //return
//   return firstHalf.concat(lastHalf);
// }

// function map(array, iterator) {
//   const result = [];
//   each(array, item => {
//     result.push(iterator(item));
//   });
//   return result;
// }

// function each(array, iterator) {
//   assert(arguments.length === 2, 'there should be only 2 arguments in this function');
//   for (let i = 0; i < array.length; i++) {
//     iterator(array[i]);
//   }
// }

//is reversedStringBuilder "holding" the stringArray?
function reversedStringBuilder() {
  let stringArray = [];
  return function(newChunk) {
    // TODO: use the closure over the scope of the outer function ("reversedStringBuilder") to access the string and append to it.
    // The string in the outer scope will thus be built up across repeated calls to this anonymous inner function.

    stringArray.push(newChunk);
    let temp = stringArray.pop();
    stringArray.unshift(`${temp}-`);

    return stringArray.join(""); /* return the string that's been built up so far */
  }
}

function reverseAndConcatenateClosure(stringList) {
  var addString = reversedStringBuilder();
  var currentString;
  for (var i = 0; i < stringList.length; i++) {
    var string = stringList[i];
    currentString = addString(string);
  }
  return currentString;
}

console.log(JSON.stringify(reverseAndConcatenateClosure(["first", 
"second", 
"third"])));