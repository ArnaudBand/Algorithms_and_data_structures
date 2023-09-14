const assert = require('assert');
const nonDivisibleSubset = require('./index');

describe('nonDivisibleSubset', () => {
    it('should return the correct result 5', () => {
        const n = 10;
        const k = 4;
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        assert.equal(nonDivisibleSubset(k, arr), 5); // Replace with the expected result
    });

    it('should return the correct result 3', () => {
      const n = 6;
      const k = 4;
      const arr = [19, 10, 12, 24, 25, 22];
      assert.equal(nonDivisibleSubset(k, arr), 3);
    });
});
