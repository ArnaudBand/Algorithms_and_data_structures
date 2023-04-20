const assert = require('assert');
const isSubsequence = require('./isSubsequence');

describe('isSubsequence', function() {
  it('should return true for "abc" and "acbdc"', function() {
    assert.strictEqual(isSubsequence('abc', 'acbdc'), true);
  });

  it('should return true for "hello" and "healworldlo"', function() {
    assert.strictEqual(isSubsequence('hello', 'healworldlo'), true);
  });

  it('should return false for "abc" and "acbde"', function() {
    assert.strictEqual(isSubsequence('abc', 'acbde'), false);
  });

  it('should return false for "abc" and "defgh"', function() {
    assert.strictEqual(isSubsequence('abc', 'defgh'), false);
  });

  it('should return true for "a" and "a"', function() {
    assert.strictEqual(isSubsequence('a', 'a'), true);
  });

  it('should return true for "abc" and "ab"', function() {
    assert.strictEqual(isSubsequence('abc', 'ab'), false);
  });
});
