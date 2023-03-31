/*
Given a string s, return the length of the longest substring without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.

Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

Constraints:
0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/

/*
first idea -> does not account for prev letters after a reset
  create a set to store chars
  create a max variable
  iterate through the string
    -on each letter
      -check if letter is in set
        -if so
          -set max to max(set.size, max)
          -reset set
          -add char to set
        -if not
          -add char to set
  return max
*/

const longestSubstring = (s) => {
  let chars = new Set(), max = 0;

  let i = 0, idx = 0;
  while (idx < s.length) {
    let char = char === ' ' ? 'space' : s[i]

    if (chars.has(char)) {
      max = Math.max(max, chars.size)
      chars = new Set()
      i = idx
    }

    chars.add(char)
    i++
  }

  return max
};

/*
s = "dvdf"
char = b
chars = (b, )

max = 3
*/
