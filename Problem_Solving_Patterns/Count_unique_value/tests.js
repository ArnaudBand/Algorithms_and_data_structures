const assert = require('assert');
const countUniqueValues = require('./index');

describe('countUniqueValues', function() {
  it('should return the correct number of unique values', function() {
    const arr1 = [1, 1, 2, 3, 3, 3, 4, 5, 5];
    const arr2 = [1, 2, 3, 4, 5];
    const arr3 = [];
    
    assert.equal(countUniqueValues(arr1), 5);
    assert.equal(countUniqueValues(arr2), 5);
    assert.equal(countUniqueValues(arr3), 0);
  });
});
