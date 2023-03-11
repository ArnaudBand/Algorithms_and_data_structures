const charCount = require('./index');

const assert = require('assert');

describe('charCount', function() {
  it('should return an object', function() {
    assert.strictEqual(typeof charCount('hello'), 'object');
  });

  it('should count the number of characters in a string', function() {
    assert.strictEqual(charCount('hello').h, 1);
    assert.strictEqual(charCount('hello').l, 2);
    assert.strictEqual(charCount('hello').o, 1);
  });

  it('should ignore whitespace', function() {
    assert.strictEqual(charCount('hello world').h, 1);
    assert.strictEqual(charCount('hello world').l, 3);
    assert.strictEqual(charCount('hello world').o, 2);
    assert.strictEqual(charCount('hello world').w, 1);
    assert.strictEqual(charCount('hello world').r, 1);
    assert.strictEqual(charCount('hello world').d, 1);
  });

  it('should handle empty strings', function() {
    assert.deepStrictEqual(charCount(''), {});
  });
});
