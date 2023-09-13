const assert = require('assert');
const compose = require('./index');

describe('compose', () => {
  it('should compose functions and return the correct result', () => {
    const fn1 = x => x + 1;
    const fn2 = x => 2 * x;

    const composedFn = compose([fn1, fn2]);

    // Test case 1
    assert.strictEqual(composedFn(4), 9);

    // Test case 2
    assert.strictEqual(composedFn(0), 1);

    // Add more test cases as needed
  });

  it('should return the input for an empty array of functions', () => {
    const composedFn = compose([]);

    // Test case 1
    assert.strictEqual(composedFn(42), 42);

    // Test case 2
    assert.strictEqual(composedFn(-10), -10);

    // Add more test cases as needed
  });
});
