function countUniqueValues(arr) {
  if(arr.length === 0) return 0;
  let i = 0;

  for(let j = 1; j < arr.length; j++) {
    if(arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j]
    }
  }
  return i + 1;
}

let t1 = performance.now();
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
let t2 = performance.now();
console.log(`Time Elapse ${(t2 - t1) / 1000} seconds.`)

module.exports = countUniqueValues;