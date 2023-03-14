const assert = require('assert');
const same = require('./index');

describe('same', function() {
  it('returns true for two empty arrays', function() {
    assert.strictEqual(same([], []), true);
  });

  it('returns false if arrays have different lengths', function() {
    assert.strictEqual(same([1], []), false);
    assert.strictEqual(same([1, 2], [1]), false);
    assert.strictEqual(same([1, 2, 3], [1, 2, 4]), false);
  });

  it('returns true if second array contains squares of first array', function() {
    assert.strictEqual(same([1, 2, 3], [1, 4, 9]), true);
    assert.strictEqual(same([2, 3, 4], [4, 9, 16]), true);
    assert.strictEqual(same([2, 3, 3], [4, 9, 9]), true);
  });

  it('returns false if second array does not contain squares of first array', function() {
    assert.strictEqual(same([1, 2, 3], [1, 4, 8]), false);
    assert.strictEqual(same([2, 3, 4], [4, 9, 15]), false);
    assert.strictEqual(same([2, 3, 3], [4, 9, 8]), false);
  });
});
