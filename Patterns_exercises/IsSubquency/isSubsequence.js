const isSubsequence = (str1, str2) => {
  if(str1.length === 0) return true;

  // if(str1.length > str2.length) return false;

  let i = 0;
  let j = 0;

  while(j < str2.length) {
    if(str1[i] === str2[j]) {
      i++;
    }

    if(i === str1.length) return true;

    j++;
  }

  return false;
}

module.exports = isSubsequence;