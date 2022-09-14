/* 
leetcode medium

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

https://leetcode.com/problems/group-anagrams/ 
*/

var groupAnagrams = function (strs) {
  //create a new array for the final results
  const result = [];
  //maps have key value pairs that will help with sorting the words
  const map = new Map();

  //loop through the words in the array
  for (let i = 0; i < strs.length; i++) {
    //the split method turns the string into an array which then can be sorted and joined together back into a string
    //the string ends up being sorted alphabetically, with multiple of the same wods if it is an anagram
    //same logic as leetcode 242
    const newArr = strs[i].split("").sort().join("");
    //check if the map contains the same values as newArr
    //with newArr variable, the map goes through each word in the array and creates a key value pair for each match
    //so the sorted key of 'aet' will have values that use the exact same letters (anagrams)
    if (map.has(newArr)) {
      //if it has the same letters, we have to push it into an array
      map.get(newArr).push(strs[i]);
    } else {
      //if it doesnt, push it into the map with the sorted string as the key
      map.set(newArr, [strs[i]]);
    }
  }

  //loop through the created map and push the values into the results array
  //we're only looking for the values, which are the original words that were sorted, not the already sorted keys
  for (let [key, value] of map) {
    result.push(value);
  }
  console.log(result);
  return result;
};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
groupAnagrams(strs);
