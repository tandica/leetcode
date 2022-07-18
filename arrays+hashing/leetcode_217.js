//leetcode easy

const nums = [1, 2, 3, 4];

var containsDuplicate = function (nums) {
  //the Set method creates a set of data with unique values
  const noDupes = new Set(nums);

  //since the Set method only includes unique values, it erases any duplicates
  //this means that the length of the original array and the Set version will be different if the original array contained duplicates
  if (noDupes.size === nums.length) {
    return false;
  } else {
    return true;
  }
};

containsDuplicate(nums);
