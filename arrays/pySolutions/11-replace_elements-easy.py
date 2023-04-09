'''
Given an array arr, replace every element in that array with the greatest element among 
the elements to its right, and replace the last element with -1.

After doing so, return the array.

Example 1:
Input: arr = [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1]
Explanation: 
- index 0 --> the greatest element to the right of index 0 is index 1 (18).
- index 1 --> the greatest element to the right of index 1 is index 4 (6).
- index 2 --> the greatest element to the right of index 2 is index 4 (6).
- index 3 --> the greatest element to the right of index 3 is index 4 (6).
- index 4 --> the greatest element to the right of index 4 is index 5 (1).
- index 5 --> there are no elements to the right of index 5, so we put -1.

Example 2:
Input: arr = [400]
Output: [-1]
Explanation: There are no elements to the right of index 0.
 
Constraints:

1 <= arr.length <= 104
1 <= arr[i] <= 105
'''

'''
    create a variable current_max
      initialize it to -1
    create a result variable
      initialize it to new array
    iterate backwards through the given array
      append current_max to result
      set current_max to max(current_max, nums[i])
    return reversed result array
'''


def replace_elements(nums):
    current_max = -1
    res = []

    for num in nums[::-1]:
        res.append(current_max)
        current_max = max(current_max, num)

    return list(reversed(res))


print(replace_elements([17, 18, 5, 4, 6, 1]))
