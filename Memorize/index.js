const memoize = (fn) => {
  let cache = {};
  let callCount = 0;

  return (...args) => {
    callCount++;
    let key = args.toString();
    if (key in cache) {
      return cache[key];
    } else {
      let result = fn(...args);
      cache[key] = result;
      return result;
    }
  }
}

module.exports = {
  memoize,
  sum: (a, b) => a + b,
  fib: (n) => { if (n <= 1) return n; return fib(n - 1) + fib(n - 2); },
  factorial: (n) => { if (n <= 1) return 1; return n * factorial(n - 1); }
};