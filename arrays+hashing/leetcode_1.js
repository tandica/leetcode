//leetcode easy

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
