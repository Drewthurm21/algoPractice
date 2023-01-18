/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.
*/

const threeSum = (nums) => {
  nums.sort()
  let res = {}
  let len = nums.length - 1

  for (let i = 0; i <= len - 2; i++) {
    let left = i + 1
    let right = len

    while (left < right) {
      let str = `${nums[i]}, ${nums[left]}, ${nums[right]}`
      let sum = nums[i] + nums[left] + nums[right]

      if (sum === 0 && !(str in res)) res[str] = [nums[i], nums[left], nums[right]]
      if (sum <= 0) left++
      else right--
    }
  }

  return Object.values(res)
}


// nums = [-1, 0, 1, 2, -1, -4]
// console.log(threeSum(nums))
// nums2 = [0, 0, 0, 0]
// console.log(threeSum(nums2))
// nums3 = [-2, 0, 1, 1, 2]
// console.log(threeSum(nums3))
nums4 = [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]
console.log(threeSum(nums4))