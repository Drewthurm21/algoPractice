'''
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
'''

# Solution 1

def longestCommonPrefix(strs):
    pre = ''

    for i in range(len(strs[0])):
        pre = pre + strs[0][i]
        for word in strs:
            if not word.startswith(pre):
                return pre[0:-1]

    return pre


# Solution 2

def longestCommonPrefix(strs):
    if not strs:
        return ''

    for i in range(len(strs[0])):
        for word in strs[1:]:
            if i >= len(word) or word[i] != strs[0][i]:
                return strs[0][:i]

    return strs[0]