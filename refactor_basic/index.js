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

// function isAlphaNumeric(char) {
//   let code = char.charCodeAt(0);
//   if(!(code > 47 && code < 58) && // numeric (0-9)
//      !(code > 64 && code < 91) && // upper alpha (A - Z)
//      !(code > 96 && code < 123)) {  // Lower alpha (a - z)}
//       return false;
//     }
//     return true;
// }

// function charCount(str) {
//   let obj = {};

//   for (let char of str) {
//     char = char.toLowerCase();
//     if(isAlphaNumeric(char)) {
//       obj[char] = ++obj[char] || 1
//     }
//   }
//   return obj
// }

function charCount(str) {
  const result = {};

  for (let char of str) {
    // ignore whitespace
    if (char.trim() !== '') {
      result[char] = result[char] ? result[char] + 1 : 1;
    }
  }

  return result;
}

let t1 = performance.now();
console.log(charCount("Hi there, Count 1234"))
let t2 = performance.now();
console.log(`Time Elapse ${(t2 - t1) / 1000} seconds.`)

module.exports = charCount;