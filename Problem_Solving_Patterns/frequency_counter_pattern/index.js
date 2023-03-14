function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const map = {};
  for(let num of arr1) {
    let square = num ** 2;

    map[square] = (map[square] ?? 0 ) + 1;
  }
  
  for(let num of arr2) {
    if(!map[num]) {
      return false;
    }
  }

  return true;
}

let t1 = performance.now();
console.log(same([1,2,3], [1,4,9]))
let t2 = performance.now();
console.log(`Time Elapse ${(t2 - t1) / 1000} seconds.`)

module.exports = same;