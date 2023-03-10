function addUpTo(n) {
  return n * (n + 1) / 2
}

let t1 = performance.now();
console.log(addUpTo(100000))
let t2 = performance.now();
console.log(`Time Elapse ${(t2 - t1) / 1000} seconds.`)

module.exports = addUpTo;