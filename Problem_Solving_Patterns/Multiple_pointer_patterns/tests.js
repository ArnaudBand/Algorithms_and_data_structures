const assert = require('assert');

describe('sumZero', function() {
  it('returns undefined when given an empty array', function() {
    assert.equal(sumZero([]), undefined);
  });

  it('returns undefined when no pair sums to 0', function() {
    assert.equal(sumZero([1, 2, 3]), undefined);
  });

  it('returns the pair that sums to 0', function() {
    assert.deepEqual(sumZero([-3, -2, -1, 0, 1, 2, 3]), [-3, 3]);
    assert.deepEqual(sumZero([-2, 0, 1, 3]), undefined);
    assert.deepEqual(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]), [-2, 2]);
  });
});


// The first test case checks if the function returns undefined when given an empty array as input.
// The second test case checks if the function returns undefined when no pair of integers in the array sum to 0.
// The third test case checks if the function correctly returns the first pair of integers in the array that sum to 0, or undefined if no such pair exists.