const assert = require('assert');
const sameFrequency = require('./index'); // assuming the function is in a separate file called sameFrequency.js

describe('sameFrequency', function() {
  it('should return true if two positive integers have the same frequency of digits', function() {
    assert.equal(sameFrequency(182, 281), true);
    assert.equal(sameFrequency(3589578, 5879385), true);
    assert.equal(sameFrequency(123456789, 987654321), true);
    assert.equal(sameFrequency(0, 0), true);
  });

  it('should return false if two positive integers do not have the same frequency of digits', function() {
    assert.equal(sameFrequency(34, 14), false);
    assert.equal(sameFrequency(22, 222), false);
    assert.equal(sameFrequency(123, 1234), false);
  });
});
