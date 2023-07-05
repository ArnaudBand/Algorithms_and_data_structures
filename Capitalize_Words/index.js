const capitalizeWords = (words) => {
  // Base case: if words's length equal to zero return empty array
  if(words.length === 0) return [];

  // Recurcive case: Capitalize the first word and concatenate it with the rest of the words
  let capitalizedWords = words[0].toUpperCase();
  let remainingWords = capitalizeWords(words.slice(1));

  return [capitalizedWords, ...remainingWords];
}

module.exports = capitalizeWords;