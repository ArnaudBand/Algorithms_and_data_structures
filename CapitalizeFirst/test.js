const assert = require('assert');
const capitalizeFirst = require('./index'); // Assuming the function is defined in a separate file

describe('capitalizeFirst', function() {
    it('should capitalize the first letter of each string in the array', function() {
      const input = ["hello", "world", "javascript"];
      const expectedOutput = ["Hello", "World", "Javascript"];
      const actualOutput = capitalizeFirst(input);
      assert.deepStrictEqual(actualOutput, expectedOutput);
    });
  
    it('should return an empty array if the input array is empty', function() {
      const input = [];
      const expectedOutput = [];
      const actualOutput = capitalizeFirst(input);
      assert.deepStrictEqual(actualOutput, expectedOutput);
    });
  });