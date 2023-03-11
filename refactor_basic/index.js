function charCount(str) {
  let res = {};
  for(let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();

    if(/[a-z0-9]/.test(char)) {
      if(res[char] > 0) {
        res[char]++;
      } else {
        res[char] = 1;
      }
    }
  }
  return res;
}

module.exports = charCount;