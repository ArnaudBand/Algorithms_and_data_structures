const once = (fn) => {
  let hasBeenCalled = false;
  let result = 0;

  return (...args) => {
    if(!hasBeenCalled) {
      hasBeenCalled = true;
      result = fn(...args);
      return result;
    }
  };
}

module.exports = once;