const longestPalindrome = (s) => {
  const len = s.length;
  if(len <= 1) return s;

  let start = 0;
  let end = 1;

  const isPalindrome = (left, right) => {
    while(left >= 0 && right < len && s[left] === s[right]) {
      left--;
      right++;
    }
    return s.slice(left + 1, right);
  }

  for(let i = 0; i < len; i++) {
    const palindrome1 = isPalindrome(i, i);
    const palindrome2 = isPalindrome(i, i + 1);

    if(palindrome1.length > end) {
      end = palindrome1.length;
      start = i - Math.floor(palindrome1.length / 2);
    }

    if(palindrome2.length > end) {
      end = palindrome2.length;
      start = i - Math.floor(palindrome2.length / 2) + 1;
    }
  }

  return s.slice(start, start + end);
}

module.exports = longestPalindrome;