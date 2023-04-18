const anagrams = (str1, str2) => {

  let splitStr1 = str1.split(' ').join('');
  let splitStr2 = str2.split(' ').join('');

  if(splitStr1.length !== splitStr2.length) return false;

  let freq1 = {};
  let freq2 = {};

  for (let letter of splitStr1) {
    freq1[letter] = (freq1[letter] || 0) + 1;
  }

  for(let letter of splitStr2) {
    freq2[letter] = (freq2[letter] || 0) + 1;
  }

  for(let key in freq1) {
    if(!freq2[key]) {
      return false;
    }
  }

  return true;

}

module.exports = anagrams;