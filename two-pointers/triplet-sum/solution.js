/**
 * Helper function to find pairs that sum to target
 * @param {number[]} nums - Sorted array
 * @param {number} target - Target sum
 * @param {number} start - Starting index
 * @returns {Array<Array<number>>} - Array of pairs that sum to target
 */
function findPairs(nums, target, start) {
  const pairs = [];
  let left = start;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum === target) {
      pairs.push([nums[left], nums[right]]);

      // Skip duplicates after finding a pair
      while (left < right && nums[left] === nums[left + 1]) left++;
      while (left < right && nums[right] === nums[right - 1]) right--;

      left++;
      right--;
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return pairs;
}

/**
 * Main function to find triplets that sum to zero
 * @param {number[]} nums
 * @return {number[][]}
 */
module.exports.threeSum = function threeSum(nums) {
  // Sort the array to use two-pointer approach
  nums.sort((a, b) => a - b);
  const result = [];

  // Iterate through the array
  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicate elements
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // Find pairs that sum to -nums[i]
    const target = -nums[i];
    const pairs = findPairs(nums, target, i + 1);

    // Add found pairs to result
    for (const pair of pairs) {
      result.push([nums[i], ...pair]);
    }
  }

  return result;
};
