const rockPaperPermutation = roundCount => {
  // edge case, return empty set if 0 rounds
  if (roundCount === 0) return [];
  // array to put every case we find
  const permutations = [];
  // Use call stack to track which branch of decision tree we are in
  // Inner function has closure over permutations array
  // No matter how many times playRound is recursively invoked, all invocations will still only update permutations array 
  function playRound(plays) {
    // Base case, stopping case, if the string has a length equal to the number of rounds
    if (plays.length === roundCount) {
      // Push it to the permutations array
      console.log("pushing", plays)
      permutations.push(plays);
      // Only stops recursive iteration if we return in the base case
      return;
    }
    // Recursive case
    // In a decision tree you have to iterate over all possible options before applying them to the current state
    // RPS options are always the same
    ['r','p','s'].forEach(play => {
      // Add the play option to the current set of plays
      // Recursively check newly concatenated string to see if length matches desired round count
      // If so, add it to the array
      console.log(`plays "${plays}" + play "${play}"`)
      playRound(plays + play);
    })
  }
  // Starts with empty string since no hands have been played yet
  playRound('');
  return permutations;
}

console.log(rockPaperPermutation(3))