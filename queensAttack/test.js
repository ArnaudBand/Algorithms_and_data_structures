const assert = require('assert');
const queensAttack = require('./index');

describe('queensAttack', () => {
    it('should return the correct result for a sample test case', () => {
        const n = 5;
        const k = 3;
        const r_q = 4;
        const c_q = 3;
        const obstacles = [[5, 5], [4, 2], [2, 3]];
        assert.deepStrictEqual(queensAttack(n, k, r_q, c_q, obstacles), 10);
    });

    it('should handle obstacles that block all directions', () => {
        const n = 5;
        const k = 3;
        const r_q = 3;
        const c_q = 3;
        const obstacles = [[4, 3], [4, 2], [4, 4]];
        assert.equal(queensAttack(n, k, r_q, c_q, obstacles), 10);
    });

    it('should handle obstacles that partially block the queen', () => {
        const n = 6;
        const k = 3;
        const r_q = 4;
        const c_q = 3;
        const obstacles = [[5, 3], [3, 3], [5, 5]];
        assert.equal(queensAttack(n, k, r_q, c_q, obstacles), 14);
    });

    it('should handle no obstacles', () => {
        const n = 5;
        const k = 0;
        const r_q = 3;
        const c_q = 3;
        const obstacles = [];
        // const result = queensAttack(n, k, r_q, c_q, obstacles);
        // expect(result).to.equal(16);
        assert.equal(queensAttack(n, k, r_q, c_q, obstacles), 16);
    });
});
