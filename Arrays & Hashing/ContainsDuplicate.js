/* Given an integer array nums, return true if any value appears more than once in the array, otherwise return false. */
/* Difficulty: Easy */

// My Solution:
class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    const uniqueNumberDictionary = {};

    for (let i = 0; i < nums.length; i++) {
      const currentElement = nums[i];
      if (!uniqueNumberDictionary[currentElement]) {
        uniqueNumberDictionary[currentElement] = true;
      } else {
        return true;
      }
    }

    return false;
  }
}

// Best solution:
class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    return new Set(nums).size < nums.length;
  }
}
