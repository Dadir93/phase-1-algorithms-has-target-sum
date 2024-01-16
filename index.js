function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
}

// Time complexity: O(n^2)

/*
  Pseudocode:
  - Iterate over the array with two nested loops to check all pairs of numbers.
  - If the sum of any pair equals the target, return true.
  - If no such pair is found, return false.
*/

/*
  Written explanation of the solution:
  The function iterates over the array using two nested loops, checking all possible pairs of numbers. If any pair's sum equals the target, the function returns true. If no such pair is found after checking all combinations, the function returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
