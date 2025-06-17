const { threeSum } = require("./solution");

describe("threeSum", () => {
  // Basic test cases
  test("should find triplets that sum to zero", () => {
    const nums = [0, -1, 2, -3, 1];
    const expected = [
      [-3, 1, 2],
      [-1, 0, 1],
    ];
    expect(threeSum(nums)).toEqual(expect.arrayContaining(expected));
  });

  // Edge cases
  test("should return empty array for single element array", () => {
    const nums = [1];
    expect(threeSum(nums)).toEqual([]);
  });

  test("should return empty array for two elements array", () => {
    const nums = [1, 2];
    expect(threeSum(nums)).toEqual([]);
  });

  test("should handle all zeros", () => {
    const nums = [0, 0, 0, 0];
    expect(threeSum(nums)).toEqual([[0, 0, 0]]);
  });

  // Corner cases
  test("should handle all negative numbers", () => {
    const nums = [-1, -2, -3, -4, -5];
    expect(threeSum(nums)).toEqual([]);
  });

  test("should handle all positive numbers", () => {
    const nums = [1, 2, 3, 4, 5];
    expect(threeSum(nums)).toEqual([]);
  });

  test("should handle duplicates correctly", () => {
    const nums = [-1, 0, 1, 2, -1, -4];
    const expected = [
      [-1, -1, 2],
      [-1, 0, 1],
    ];
    expect(threeSum(nums)).toEqual(expect.arrayContaining(expected));
  });

  // Large input cases
  test("should handle large inputs", () => {
    const nums = Array(1000).fill(0);
    expect(threeSum(nums)).toEqual([[0, 0, 0]]);
  });

  // Special cases
  test("should handle mixed positive and negative numbers", () => {
    const nums = [-4, -1, -1, 0, 1, 2];
    const expected = [
      [-1, -1, 2],
      [-1, 0, 1],
    ];
    expect(threeSum(nums)).toEqual(expect.arrayContaining(expected));
  });

  test("should handle multiple valid triplets", () => {
    const nums = [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6];
    const expected = [
      [-4, -2, 6],
      [-4, 0, 4],
      [-4, 1, 3],
      [-4, 2, 2],
      [-2, -2, 4],
      [-2, 0, 2],
    ];
    const result = threeSum(nums);

    // Check that all expected triplets are present in the result
    expected.forEach((triplet) => {
      const found = result.some(
        (t) => JSON.stringify(t) === JSON.stringify(triplet)
      );
      if (!found) {
        console.log("Missing triplet:", triplet);
      }
      expect(found).toBe(true);
    });

    // Check that there are no unexpected triplets
    result.forEach((triplet) => {
      expect(
        expected.some((t) => JSON.stringify(t) === JSON.stringify(triplet))
      ).toBe(true);
    });
  });

  // Edge cases with extreme values
  test("should handle large numbers", () => {
    const nums = [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, 0];
    const expected = [[Number.MIN_SAFE_INTEGER, 0, Number.MAX_SAFE_INTEGER]];
    expect(threeSum(nums)).toEqual(expect.arrayContaining(expected));
  });

  test("should handle array with zeros and one", () => {
    const nums = [0, 0, 0, 1];
    expect(threeSum(nums)).toEqual([[0, 0, 0]]);
  });
});
