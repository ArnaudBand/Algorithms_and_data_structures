const { expect } = require('chai');
const longestPalindrome = require('./index');

describe('Longest Palindrome', () => {
  it('should return the longest palindromic substring', () => {
    const inputString1 = 'babad';
    const inputString2 = 'cbbd';
    const inputString3 = 'a';
    const inputString4 = 'abcba';

    expect(longestPalindrome(inputString1)).to.equal('bab');
    expect(longestPalindrome(inputString2)).to.equal('bb');
    expect(longestPalindrome(inputString3)).to.equal('a');
    expect(longestPalindrome(inputString4)).to.equal('abcba');
  });

  it('should handle empty input', () => {
    const inputString = '';
    expect(longestPalindrome(inputString)).to.equal('');
  });

  it('should handle single character input', () => {
    const inputString = 'x';
    expect(longestPalindrome(inputString)).to.equal('x');
  });
});
