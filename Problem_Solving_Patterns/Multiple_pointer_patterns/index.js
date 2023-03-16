// Solve sumZero in naive way

const sumZero = (arr) => {
  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

let t1 = performance.now();
console.log(sumZero([-3, -2, -1, 0, 1]))
let t2 = performance.now();
console.log(`Time Elapse ${(t2 - t1) / 1000} seconds.`)

module.exports = sumZero;