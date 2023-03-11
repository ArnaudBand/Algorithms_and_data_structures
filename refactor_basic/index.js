// function charCount(str) {
//   let res = {};
//   for(let i = 0; i < str.length; i++) {
//     let char = str[i].toLowerCase();

//     if(/[a-z0-9]/.test(char)) {
//       if(res[char] > 0) {
//         res[char]++;
//       } else {
//         res[char] = 1;
//       }
//     }
//   }
//   return res;
// }

// Refactor the code

function charCount(str) {
  let obj = {};

  for (let char of str) {
    char = char.toLowerCase();
    if(/[a-z0-9]/.test(char)) {
      obj[char] = ++obj[char] || 1
    }
  }
  return obj
}

module.exports = charCount;