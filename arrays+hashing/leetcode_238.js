/* 
leetcode medium

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.

Expected behaviour: 
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

1 * 1 * 2 * 3 * 4 = 24 

https://leetcode.com/problems/product-of-array-except-self/
*/

var productExceptSelf = function (nums) {
  const answer = [];
  let product = 1;

  for (let i = 0; i < nums.length; i++) {
    answer.push(product);
    product *= nums[i];
  }

  product = 1;

  for (let j = nums.length - 1; j >= 0; j--) {
    answer[j] *= product;
    product *= nums[j];
  }

  console.log(answer);
  return answer;
};

const nums = [1, 2, 3, 4];
productExceptSelf(nums);
