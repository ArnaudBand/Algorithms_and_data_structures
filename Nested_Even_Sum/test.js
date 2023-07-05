const assert = require('assert');
const { describe, it } = require('mocha');

const nestedEvenSum = require('./index');

describe('nestedEvenSum', () => {
    it('should return the correct sum of even numbers in a nested object', () => {
        let obj = {
            a: 2,
            b: {
              c: 4,
              d: {
                e: 6,
                f: {
                  g: 8
                }
              }
            },
            h: 10,
          };
          assert.strictEqual(nestedEvenSum(obj), 30);
    });

    it('should return 0 when in the nested object there no even number', () => {
      let obj = {
        a: 3,
        b: {
          c: 5,
          d: {
            e: {
              h: 7
            }
          }
        }
      }
      assert.strictEqual(nestedEvenSum(obj), 0)
    })
})