/* 
leetcode easy

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

https://leetcode.com/problems/two-sum/
*/

var twoSum = function (nums, target) {
  //loop through each item in the array
  for (let i = 0; i < nums.length; i++) {
    console.log("nums i", nums[i]);
    //we add one to the nested loop so it starts checking values after the first value, which is identified in the first loop
    for (let j = i + 1; j < nums.length; j++) {
      //check if the vlues are equal to target parameter
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

const nums = [2, 7, 11, 15];
const target = 9;

twoSum(nums, target);
