//leetcode easy

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
