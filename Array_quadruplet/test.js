const assert = require('assert');
const four_sum = require('./index');

describe('fourSum', () => {
  it('should return the correct four-element combinations that sum to the target', () => {
    const nums = [1, 0, -1, 0, -2, 2];
    const target = 0;
    const expected = [
      [-2, -1, 1, 2],
      [-2, 0, 0, 2],
      [-1, 0, 0, 1]
    ];
    const result = four_sum(nums, target);
    assert.deepStrictEqual(result, expected);
  });

  it('should handle an empty input array', () => {
    const nums = [];
    const target = 0;
    const expected = [];
    const result = four_sum(nums, target);
    assert.deepStrictEqual(result, expected);
  });

  it('should handle a target that cannot be achieved', () => {
    const nums = [1, 2, 3, 4, 5];
    const target = 10;
    const expected = [[1, 2, 3, 4]];
    const result = four_sum(nums, target);
    assert.deepStrictEqual(result, expected);
  });
});
