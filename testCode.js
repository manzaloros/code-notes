var githubStickers = [
  {
    name: "Octocat",
    qty: 12
  },
  {
    name: "Luchadortocat",
    qty: 2
  },
  {
    name: "Gracehoppertocat",
    qty: 5
  }
]

let reduced = githubStickers.reduce((array, current) => {
  if (current.qty < 5) {
    array.push(current);
  }
  return array;
}, []); 

console.log(reduced)

