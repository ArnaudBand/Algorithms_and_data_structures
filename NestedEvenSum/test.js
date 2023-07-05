const assert = require('assert');
const { describe, it } = require('mocha');

// Import the nestedEvenSum function
const nestedEvenSum = require('./index');

describe('nestedEvenSum', () => {
  it('should return the correct sum of even numbers in a nested object', () => {
    const obj = {
      a: 2,
      b: {
        c: 4,
        d: {
          e: 6,
          f: {
            g: 8
          }
        }
      },
      h: 10
    };

    assert.strictEqual(nestedEvenSum(obj), 30);
  });

  it('should return 0 when there are no even numbers', () => {
    const obj = {
      a: 1,
      b: {
        c: 3,
        d: {
          e: 5,
          f: {
            g: 7
          }
        }
      },
      h: 9
    };

    assert.strictEqual(nestedEvenSum(obj), 0);
  });

  it('should handle empty objects and null values', () => {
    const obj = {
      a: {},
      b: null,
      c: {
        d: {},
        e: null
      }
    };

    assert.strictEqual(nestedEvenSum(obj), 0);
  });
});
