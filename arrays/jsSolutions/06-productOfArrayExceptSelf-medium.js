/*
Given an integer array nums, return an array answer such that answer[i] is equal to the 
product of all the elements of nums except nums[i]. The product of any prefix or suffix
of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.
 
Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 
Constraints:
2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 
Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)
*/


//brute force
const productOfArrayExceptSelf = (nums) => {
  let result = []

  for (let i = 0; i < nums.length; i++) {
    let product = 1

    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        product *= nums[j]
      }
    }

    result.push(product)
  }

  return result
}

// console.log(productOfArrayExceptSelf([1, 2, 3, 4]))
// console.log(productOfArrayExceptSelf([-1, 1, 0, -3, 3])

/* 
[1,1,2,6] - 1
[1,2,3,4]

[24,12,4,1]
*/

//refactor using arrays - O(2n) space
const prodExceptSelf = (nums) => {
  let n = nums.length
  let prev = new Array(n)
  let post = new Array(n)
  let prod = new Array(n)

  prev[0] = 1
  post[n - 1] = 1

  //iterate over nums to fill the prev products array
  for (let i = 1; i < nums.length; i++) {
    prev[i] = nums[i - 1] * prev[i - 1]
  }

  //iterate over nums backward to fill the post products array
  for (let i = nums.length - 2; i >= 0; i--) {
    post[i] = nums[i + 1] * post[i + 1]
  }

  for (let i = 0; i < nums.length; i++) {
    prod[i] = post[i] * prev[i]
  }

  return prod
}

// console.log(prodExceptSelf([1, 2, 3, 4]))


//refactor using one array - O(n) space
const prodXeptSelf = (nums) => {
  const res = [];
  let prod = 1;

  // iterate over nums
  // use prod as a product accumulator
  // push current prefix product into res
  for (let k of nums) res.push(prod *= k);

  //iterate backwards over nums
  //use prod as a product accumulator, multiplying by nums[i]
  //prod should hold postfix from end to start+1
  for (let prod = 1, i = nums.length - 1; i >= 0; prod *= nums[i--]) {
    //assign res[i] to current product * trailing res index
    //use accumulated prod for last index (res[0]) 
    res[i] = i ? prod * res[i - 1] : prod;
  }

  return res;
}
console.log(prodXeptSelf([1, 2, 3, 4]))