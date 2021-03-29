// function alphabeticShift(inputString) {
//   //create output variable
//   let shiftedString = "";
//   //create alphabet array
//   let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
//   //iterate over input string
//   for (let i = 0; i < inputString.length; i++) {
//     //find current letter index in alphabet array
//     let currentLetterIndex = alphabet.indexOf(inputString[i]);
//     console.log(currentLetterIndex)
//     if (currentLetterIndex === 25) {
//       shiftedString += "a";
//       continue;
//     }
//     shiftedString += alphabet[currentLetterIndex + 1];
//     //if letter is z, push A to shifted string
    
//     //take index + 1 of the alphabet array and 
//     //add to output string
//   }
//   //return the shifted output
//   return shiftedString;
// }


// console.log(alphabeticShift("crazy"))

function isIPv4Address(inputString) {
  //4 8 bit itegers separated by periods
  //0-255 inclusive
  //no leading 0s

  //create array by spliiting on .s
  let inputArray = inputString.split(".")
  //if array length is less than 4 or more than 5
  if (inputArray.length !== 4) {
    return false;
  }
  
  for (let i = 0; i < inputArray.length; i ++) {
    //create current number number
    let currentNumber = +inputArray[i];
    if (isNaN(currentNumber)) {
      return false;
    }
    //if n > 255 or less than 0
    if (currentNumber > 255 || currentNumber < 0) {
      //return false
      return false;
    }
    //if arrray[i] string has 0 and length is greater than 1, iterate over it
    if (inputArray[i].indexOf("0") !== -1 && inputArray[i].length > 1) {
      console.log("yes");
      if (inputArray[i][inputArray[i].length - 1] !== 0) {
        return false;
      }
    }
    if (inputArray[i].length === 0) {
      return false;
    }
  }
  return true;
}

console.log(isIPv4Address("1.1.1.1a"))
console.log(+"a")
