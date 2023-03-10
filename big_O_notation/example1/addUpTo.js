function addUpTo(num) {
  let total = 0;
  for (let i = 0; i <= num; i++) {
    total += i;
  }
  return total;
}

let t1 = performance.now();
console.log(addUpTo(1000000000))
let t2 = performance.now();
console.log(`Time Elapse ${(t2 - t1) / 1000} seconds.`)

module.exports = addUpTo;