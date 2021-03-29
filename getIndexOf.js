function getIndexOf(char, str) {
  return str.split("").filter((word, index) => {
    str[index] === char;
  })

}

var output = getIndexOf('a', 'I am a hacker');
console.log(output);