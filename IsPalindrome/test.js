const assert = require('assert');
const isPalindrome = require('./index');

describe('IsPalindrome', () => {
    it('should return true for an empty string', function() {
        assert.strictEqual(isPalindrome(''), true);
      });
    
      it('should return true for a single character string', function() {
        assert.strictEqual(isPalindrome('a'), true);
      });
    
      it('should return true for a palindrome string', function() {
        assert.strictEqual(isPalindrome('racecar'), true);
        assert.strictEqual(isPalindrome('level'), true);
        assert.strictEqual(isPalindrome('deified'), true);
      });
    
      it('should return false for a non-palindrome string', function() {
        assert.strictEqual(isPalindrome('hello'), false);
        assert.strictEqual(isPalindrome('world'), false);
        assert.strictEqual(isPalindrome('palindrome'), false);
      });
})