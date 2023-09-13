let compose = function(functions) {
  return function(input) {
    return functions.reduceRight((acc, fn) => fn(acc), input);
  }
}

module.exports = compose;