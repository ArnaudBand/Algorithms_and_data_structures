const findMedianSortedArrays = (nums1, nums2) => {
  const nums = nums1.concat(nums2).sort((a, b) => a - b);
  const mid = Math.floor(nums.length / 2);
  return nums.length % 2 === 0 ? (nums[mid] + nums[mid - 1]) / 2 : nums[mid];
};

module.exports = { findMedianSortedArrays };