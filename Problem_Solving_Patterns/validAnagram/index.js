function validAnagram(str1, str2) {
  // If the strings are not of equal length, they cannot be anagrams
  if (str1.length !== str2.length) {
    return false;
  }

  // Create objects to store the frequency of each character in each string
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  // Loop through each character in both strings, incrementing the frequency counters
  for (let char of str1) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
  }
  for (let char of str2) {
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
  }

  // Loop through the keys in the first frequency counter object
  for (let key in frequencyCounter1) {
    // If the current key is not present in the second frequency counter object,
    // or the frequency of the current key in the first frequency counter object
    // does not match the frequency of the current key in the second frequency counter object,
    // the strings are not anagrams
    if (!(key in frequencyCounter2) || frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }

  // If we made it through the entire loop without returning false,
  // the strings must be anagrams
  return true;
}

let t1 = performance.now();
console.log(validAnagram('anagram', 'nagaram')); // true
let t2 = performance.now();
console.log(`Time Elapse ${(t2 - t1) / 1000} seconds.`)

module.exports = same;