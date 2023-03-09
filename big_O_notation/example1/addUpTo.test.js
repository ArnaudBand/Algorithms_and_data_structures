// Import the assert module
const assert = require('assert');

// Import the addUpTo function
const addUpTo = require('./addUpTo');

describe('addUpTo function', function() {
  it('should return the sum of all numbers up to n', function() {
    // Test the function for n = 5
    assert.strictEqual(addUpTo(5), 15);

    // Test the function for n = 10
    assert.strictEqual(addUpTo(10), 55);

    // Test the function for n = 100
    assert.strictEqual(addUpTo(100), 5050);
  });

  it('should handle edge cases gracefully', function() {
    // Test the function for n = 0
    assert.strictEqual(addUpTo(0), 0);

    // Test the function for n = 1
    assert.strictEqual(addUpTo(1), 1);

    // Test the function for a large value of n
    assert.strictEqual(addUpTo(100000), 5000050000);
  });
});
