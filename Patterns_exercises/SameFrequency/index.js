const sameFrequency = (num, num1) => {
  let str = num.toString();
  let str1 = num1.toString();

  if(str.length !== str1.length) return false;
  
  let freq = {};

  // Count the frequency of digits in num
  for(let digit of str) {
    freq[digit] = (freq[digit] || 0) + 1;
  }

  // Compare the two frequencies
  for(let digit of str1) {
    if(!freq[digit]) {
      return false;
    } else {
      freq[digit] -= 1;
    }
  }

  return true;
}

module.exports = sameFrequency;
