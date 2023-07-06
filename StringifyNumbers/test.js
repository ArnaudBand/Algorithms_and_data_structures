const assert = require('assert');
const { describe, it } = require('mocha');

const stringifyNumbers = require('./index');

describe('stringifyNumbers', () => {
    it('should convert number values to strings in the object', () => {
      const obj = {
        a: 123,
        b: 4.56,
        c: {
          d: 789,
          e: {
            f: 0
          }
        }
      };
  
      const expected = {
        a: '123',
        b: '4.56',
        c: {
          d: '789',
          e: {
            f: '0'
          }
        }
      };
  
      const result = stringifyNumbers(obj);
      assert.deepStrictEqual(result, expected);
    });
  });