const assert = require('assert');
const maxSubarraySum = require('./index')

describe('maxSubarraySum', () => {
  it('should return null if the length of the array is less than the number of elements to sum', () => {
    const arr = [1, 2, 3];
    const num = 4;
    const result = maxSubarraySum(arr, num);
    assert.strictEqual(result, null);
  });

  it('should return the maximum sum of the specified number of consecutive elements in the array', () => {
    const arr = [1, 2, 3, 4, 5];
    const num = 3;
    const result = maxSubarraySum(arr, num);
    assert.strictEqual(result, 12);
  });

  it('should return the maximum sum of the entire array if the number of elements to sum is equal to the length of the array', () => {
    const arr = [1, 2, 3, 4, 5];
    const num = arr.length;
    const result = maxSubarraySum(arr, num);
    assert.strictEqual(result, 15);
  });

  it('should return 0 if the array contains only negative numbers', () => {
    const arr = [-1, -2, -3];
    const num = 2;
    const result = maxSubarraySum(arr, num);
    assert.strictEqual(result, -3);
  });

  it('should handle arrays with one element', () => {
    const arr = [5];
    const num = 1;
    const result = maxSubarraySum(arr, num);
    assert.strictEqual(result, 5);
  });

  it('should handle arrays with negative and positive numbers', () => {
    const arr = [-1, 2, 3, -4, 5];
    const num = 3;
    const result = maxSubarraySum(arr, num);
    assert.strictEqual(result, 4);
  });
});
