const assert = require('assert');
const { describe, it } = require('mocha');

const capitalizeWords = require('./index');

describe('capitalizeWords', () => {
  it('should capitalize all words in the array', () => {
    const words = ['hello', 'world', 'javascript'];
    const capitalizedWords = capitalizeWords(words);
    assert.deepStrictEqual(capitalizedWords, ['HELLO', 'WORLD', 'JAVASCRIPT']);
  });

  it('should return an empty array if the input array is empty', () => {
    const words = [];
    const capitalizedWords = capitalizeWords(words);
    assert.deepStrictEqual(capitalizedWords, []);
  });

  it('should capitalize a single word in the array', () => {
    const words = ['openai'];
    const capitalizedWords = capitalizeWords(words);
    assert.deepStrictEqual(capitalizedWords, ['OPENAI']);
  });
});