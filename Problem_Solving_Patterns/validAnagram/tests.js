const assert = require('assert');
const validAnagram = require('./index');

describe('validAnagram', function() {
  it('returns true for empty strings', function() {
    assert.strictEqual(validAnagram('', ''), true);
  });

  it('returns false if strings have different lengths', function() {
    assert.strictEqual(validAnagram('a', ''), false);
    assert.strictEqual(validAnagram('ab', 'a'), false);
    assert.strictEqual(validAnagram('abc', 'defg'), false);
  });

  it('returns true if strings are anagrams', function() {
    assert.strictEqual(validAnagram('rat', 'tar'), true);
    assert.strictEqual(validAnagram('listen', 'silent'), true);
    assert.strictEqual(validAnagram('racecar', 'carrace'), true);
  });
});
