const findPairSum = require("./solution.js");

function isValidPair(result, nums, target) {
  if (!Array.isArray(result) || result.length !== 2) return false;
  const [i, j] = result;
  return (
    i >= 0 &&
    j >= 0 &&
    i < nums.length &&
    j < nums.length &&
    i !== j &&
    nums[i] + nums[j] === target
  );
}

describe("Pair Sum Tests", () => {
  // Basic test cases from README
  test("should find pair that sums to target in regular array", () => {
    const nums = [-5, -2, 3, 4, 6];
    const target = 7;
    const result = findPairSum(nums, target);
    expect(isValidPair(result, nums, target)).toBeTruthy();
  });

  test("should find pair with duplicate numbers", () => {
    const nums = [1, 1, 1];
    const target = 2;
    const result = findPairSum(nums, target);
    expect(isValidPair(result, nums, target)).toBeTruthy();
  });

  // Corner cases
  test("should handle empty array", () => {
    expect(findPairSum([], 5)).toEqual([]);
  });

  test("should handle array with single element", () => {
    expect(findPairSum([1], 1)).toEqual([]);
  });

  test("should handle array with no valid pairs", () => {
    expect(findPairSum([1, 2, 3], 10)).toEqual([]);
  });

  test("should handle negative numbers", () => {
    const nums = [-4, -2, -1, 0];
    const target = -3;
    const result = findPairSum(nums, target);
    expect(isValidPair(result, nums, target)).toBeTruthy();
  });

  test("should handle all negative numbers", () => {
    const nums = [-6, -5, -4, -3];
    const target = -9;
    const result = findPairSum(nums, target);
    expect(isValidPair(result, nums, target)).toBeTruthy();
  });

  test("should handle zero as target", () => {
    const nums = [-2, -1, 0, 1, 2];
    const target = 0;
    const result = findPairSum(nums, target);
    expect(isValidPair(result, nums, target)).toBeTruthy();
  });

  test("should handle large numbers", () => {
    const nums = [1000000, 2000000, 3000000];
    const target = 5000000;
    const result = findPairSum(nums, target);
    expect(isValidPair(result, nums, target)).toBeTruthy();
  });

  test("should handle pairs at array boundaries", () => {
    const nums = [1, 2, 3, 4, 5];
    const target = 6;
    const result = findPairSum(nums, target);
    expect(isValidPair(result, nums, target)).toBeTruthy();
  });

  test("should handle multiple valid pairs but return any one", () => {
    const nums = [1, 2, 2, 3, 3];
    const target = 4;
    const result = findPairSum(nums, target);
    expect(isValidPair(result, nums, target)).toBeTruthy();
  });
});
