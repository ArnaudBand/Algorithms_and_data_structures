const { assert } = require('chai');
const { findMedianSortedArrays } = require('./index');

describe('Median of Two Sorted Array', () => {
  it('should return 2', () => {
    const nums1 = [1, 3];
    const nums2 = [2];
    const result = findMedianSortedArrays(nums1, nums2);
    assert.equal(result, 2);
  });

  it('should return 2.5', () => {
    const nums1 = [1, 2];
    const nums2 = [3, 4];
    const result = findMedianSortedArrays(nums1, nums2);
    assert.equal(result, 2.5);
  });

  it('should return 0', () => {
    const nums1 = [0, 0];
    const nums2 = [0, 0];
    const result = findMedianSortedArrays(nums1, nums2);
    assert.equal(result, 0);
  });

  it('should return 1', () => {
    const nums1 = [];
    const nums2 = [1];
    const result = findMedianSortedArrays(nums1, nums2);
    assert.equal(result, 1);
  });
});