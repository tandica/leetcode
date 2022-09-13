/* 
leetcode medium

 Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order. 

- loop through the array
- find the element that appears the most in the array, according to the k value
k is the number of frequent elements for each input
so, for nums = [1,1,1,2,2,3], k = 2, we are looking for the TWO most frequent elements in the array
in this case it would output [1, 2] because those are the 2 values appear that the most 
*/

var topKFrequent = function (nums, k) {
  //create a map to hash through the elements
  const map = new Map();

  //check the frequency of each element by creating key value pairs that state the number of times an element appears
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }

  //sort through the values
  const list = [...map.entries()].sort((a, b) => b[1] - a[1]);

  const res = list.map((e) => e[0]);
  const result = res.splice(0, k);

  console.log(result);
  return result;
};

const nums = [1, 1, 1, 2, 2, 3];
const k = 2;

topKFrequent(nums, k);
