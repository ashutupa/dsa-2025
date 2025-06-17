/**
 * @param {number[]} nums - The input array of integers sorted in ascending order
 * @param {number} target - The target sum to find
 * @return {number[]} - Array containing indexes of two numbers that sum to target
 */
function findPairSum(nums, target) {
  // Edge case: if array has less than 2 elements, return empty array
  if (nums.length < 2) return [];

  let left = 0;
  let right = nums.length - 1;

  // Use two pointers to find the pair
  while (left < right) {
    const currentSum = nums[left] + nums[right];

    // If we found the target sum, return the indices
    if (currentSum === target) {
      return [left, right];
    }

    // If sum is less than target, we need a bigger number, move left pointer
    if (currentSum < target) {
      left++;
    }
    // If sum is more than target, we need a smaller number, move right pointer
    else {
      right--;
    }
  }

  // If no pair is found, return empty array
  return [];
}

module.exports = findPairSum;
