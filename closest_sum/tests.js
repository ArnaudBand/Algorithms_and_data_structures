const assert = require('assert');
const findClosestTriplet = require('./index');

describe('findClosestTriplet', () => {
  it('should return the closest triplet to the target value', () => {
    const array = [-1, 2, 1, -4];
    const target = 1;
    const expectedTriplet = [-1, 1, 2];
    const result = findClosestTriplet(array, target);
    assert.deepEqual(result, expectedTriplet);
  });

  it('should return null if the input array has less than three elements', () => {
    const array = [1, 2];
    const target = 3;
    const expectedTriplet = null;
    const result = findClosestTriplet(array, target);
    assert.deepEqual(result, expectedTriplet);
  });

  it('should handle negative target values', () => {
    const array = [-1, 2, 1, -4];
    const target = -2;
    const expectedTriplet = [-4, -1, 2];
    const result = findClosestTriplet(array, target);
    assert.deepEqual(result, expectedTriplet);
  });

  it('should handle target values that are equal to the sum of all elements in the array', () => {
    const array = [1, 2, 3];
    const target = 6;
    const expectedTriplet = [1, 2, 3];
    const result = findClosestTriplet(array, target);
    assert.deepEqual(result, expectedTriplet);
  });
});
