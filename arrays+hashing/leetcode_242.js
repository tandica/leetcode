/* 
leetcode easy

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
https://leetcode.com/problems/valid-anagram/ 
*/

var isAnagram = function (s, t) {
  //the split method turns the string into an array which then can be sorted and joined together back into a string
  //the string ends up being sorted alphabetically
  const sortedFirstString = s.split("").sort().join();
  const sortedSecondString = t.split("").sort().join();

  //compare if the sorted result is identical
  if (sortedFirstString === sortedSecondString) {
    return true;
  } else {
    return false;
  }
};

const s = "rat";
const t = "car";

isAnagram(s, t);
