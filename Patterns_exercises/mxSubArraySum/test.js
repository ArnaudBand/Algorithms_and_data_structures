const assert = require('assert');
const maxSubarraySum = require('./maxSubArraySum');

describe('maxSubarraySum', function() {
  it('should return the maximum sum of n consecutive elements in the array', function() {
    assert.equal(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2), 10);
    assert.equal(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4), 17);
    assert.equal(maxSubarraySum([4, 2, 1, 6, 2], 1), 6);
    assert.equal(maxSubarraySum([4, 2, 1, 6, 2], 4), 13);
    assert.equal(maxSubarraySum([], 3), null);
  });

  it('should handle negative numbers', function() {
    assert.equal(maxSubarraySum([-6, -3, -2, -5, -1], 3), -8);
    assert.equal(maxSubarraySum([-6, -3, -2, -5, -1], 4), -11);
    assert.equal(maxSubarraySum([2, -1, 4, -5, 1], 2), 3);
    assert.equal(maxSubarraySum([2, -1, 4, -5, 1], 3), 5);
  });

  it('should return null if n is larger than the length of the array', function() {
    assert.equal(maxSubarraySum([1, 2, 3], 5), null);
  });
});
