const assert = require('assert');
const reverse = require('./index');

describe('reverse', function() {
  it('should return an empty string when given an empty string', function() {
    assert.strictEqual(reverse(''), '');
  });

  it('should reverse a string with one character', function() {
    assert.strictEqual(reverse('a'), 'a');
  });

  it('should reverse a string with multiple characters', function() {
    assert.strictEqual(reverse('hello'), 'olleh');
    assert.strictEqual(reverse('racecar'), 'racecar');
    assert.strictEqual(reverse('12345'), '54321');
  });
});
