const assert = require('assert');
const collectStrings = require('./index');

describe('collectStrings', () => {
  it('should collect all string values from the object', () => {
    const obj = {
      a: 'hello',
      b: 123,
      c: {
        d: 'world',
        e: {
          f: 'javascript',
          g: 456
        }
      }
    };

    const expected = ['hello', 'world', 'javascript'];

    const result = collectStrings(obj);
    assert.deepStrictEqual(result, expected);
  });
});
