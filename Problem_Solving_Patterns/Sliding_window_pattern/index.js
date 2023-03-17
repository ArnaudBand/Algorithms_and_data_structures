// const maxSubarraySum = (arr, num) => {
//   if(arr.length < num) return null;

//   let max = -Infinity;

//   for(let i = 0; i < arr.length - num + 1; i++) {
//     let temp = 0
//     for(let j = 0; j < num; j++) {
//       temp += arr[i + j];
//       if(temp > max) {
//         max = temp;
//       }
//     }
//   }
//   return max;
// }

function maxSubarraySum(arr, num) {
  if (arr.length < num) {
    return null;
  }

  let maxSum = 0;
  let currentSum = 0;

  // Compute the sum of the first `num` elements
  for (let i = 0; i < num; i++) {
    currentSum += arr[i];
  }
  maxSum = currentSum;

  // Slide the window and update the maximum sum
  for (let i = num; i < arr.length; i++) {
    currentSum = currentSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3))

module.exports = maxSubarraySum;