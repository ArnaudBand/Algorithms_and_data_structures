const maxSubarraySum = (arr, target) => {

  if(arr.length < target) return null;

  let maxSum = 0
  let tempSum = 0;

  for(let i = 0; i < target; i++) {
    maxSum += arr[i]
  }

  tempSum = maxSum;

  for(let i = target; i < arr.length; i++) {
    tempSum = tempSum - arr[i - target] + arr[i]
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

module.exports = maxSubarraySum;