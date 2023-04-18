const assert = require('assert');
const averagePair = require('./index');

describe('averagePair', function() {
  it('should return true for [1,2,3] and 2.5', function() {
    assert.strictEqual(averagePair([1,2,3], 2.5), true);
  });

  it('should return true for [1,3,3,5,6,7,10,12,19] and 8', function() {
    assert.strictEqual(averagePair([1,3,3,5,6,7,10,12,19], 8), true);
  });

  it('should return false for [-1,0,3,4,5,6] and 4.1', function() {
    assert.strictEqual(averagePair([-1,0,3,4,5,6], 4.1), false);
  });

  it('should return false for [] and 4', function() {
    assert.strictEqual(averagePair([], 4), false);
  });

  it('should return false for [1,2,3,4,5,6,7,8,9] and 1', function() {
    assert.strictEqual(averagePair([1,2,3,4,5,6,7,8,9], 1), false);
  });
});
