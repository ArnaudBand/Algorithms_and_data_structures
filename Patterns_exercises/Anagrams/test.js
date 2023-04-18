const assert = require('assert');
const anagrams = require('./index');

describe('anagrams', function() {
  it('should return true for "listen" and "silent"', function() {
    assert.strictEqual(anagrams('listen', 'silent'), true);
  });

  it('should return true for "debit card" and "bad credit"', function() {
    assert.strictEqual(anagrams('debit card', 'bad credit'), true);
  });

  it('should return false for "hello" and "world"', function() {
    assert.strictEqual(anagrams('hello', 'world'), false);
  });

  it('should return false for "abc" and "xyz"', function() {
    assert.strictEqual(anagrams('abc', 'xyz'), false);
  });

  it('should return false for "test" and "tests"', function() {
    assert.strictEqual(anagrams('test', 'tests'), false);
  });
});
