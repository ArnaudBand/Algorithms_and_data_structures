function findClosestTriplet(array, target) {
  // Sort the input array
  array.sort((a, b) => a - b);

  // Initialize closest sum and triplet
  let closestSum = Infinity;
  let closestTriplet = null;

  // Loop through the array with the first pointer
  for (let i = 0; i < array.length - 2; i++) {
    // Initialize pointers for the inner loop
    let j = i + 1;
    let k = array.length - 1;

    // Loop through the remaining array with the inner pointers
    while (j < k) {
      const sum = array[i] + array[j] + array[k];
      const diff = Math.abs(sum - target);

      // Check if the new sum is closer to the target than the current closest sum
      if (diff < Math.abs(closestSum - target)) {
        closestSum = sum;
        closestTriplet = [array[i], array[j], array[k]];
      }

      // Move the pointers depending on whether the sum is less than or greater than the target
      if (sum < target) {
        j++;
      } else {
        k--;
      }
    }
  }

  return closestTriplet;
}

// Test the function
const array = [-1, 2, 1, -4];
const target = 1;
console.log(findClosestTriplet(array, target)); // Output: [-1, 1, 2]
