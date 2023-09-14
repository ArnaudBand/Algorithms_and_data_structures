function nonDivisibleSubset(k, s) {
  // Create an array to store the count of reminders
const remains = new Array(k).fill(0);

  for (let i = 0; i < s.length; i++) {
      remains[s[i] % k]++;
  }

  let result = 0;

  if (remains[0] > 0) {
      result++;
  }

  for (let i = 1; i < remains.length; i++) {
      if (i === (k - i)) {
          result++;
      } else {
          if (remains[i] >= remains[k - i]) {
              result += remains[i];
          } else {
              result += remains[k - i];
          }
          remains[i] = 0;
          remains[k - i] = 0;
      }
  }

  return result;
  
}

module.exports = nonDivisibleSubset;