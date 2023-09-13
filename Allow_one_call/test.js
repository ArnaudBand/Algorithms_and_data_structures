const assert = require('assert');
const once = require('./index');

describe('once', () => {
  it('should ensure the original function is called at most once', () => {
    const fn1 = (a, b, c) => a + b + c;
    const onceFn1 = once(fn1);

    // First call should return the result of fn1
    assert.strictEqual(onceFn1(1, 2, 3), 6);

    // Subsequent calls should return undefined
    assert.strictEqual(onceFn1(2, 3, 6), undefined);
    assert.strictEqual(onceFn1(4, 5, 6), undefined);

    const fn2 = (a, b, c) => a * b * c;
    const onceFn2 = once(fn2);

    // First call should return the result of fn2
    assert.strictEqual(onceFn2(5, 7, 4), 140);

    // Subsequent calls should return undefined
    assert.strictEqual(onceFn2(2, 3, 6), undefined);
    assert.strictEqual(onceFn2(4, 6, 8), undefined);
  });
});
