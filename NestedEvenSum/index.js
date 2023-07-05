function nestedEvenSum(obj) {
  let sum = 0;

  for (let key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      sum += nestedEvenSum(obj[key]); // recursively call nestedEvenSum for nested objects
    } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      sum += obj[key]; // add even numbers to the sum
    }
  }

  return sum;
}

module.exports = nestedEvenSum;