/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise. An Anagram is a 
word or phrase formed by rearranging the letters of a different word or phrase, typically using all 
the original letters exactly once.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false

Constraints:
1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters ? How would you adapt your solution to such a case?
*/

//using builtins - easy to read
const validAnagram = (s, t) => {
  if (s.length !== t.length) return false
  let charsCounter = {}
  for (let char of s) charsCounter[char] = charsCounter[char] + 1 || 1

  for (let char of t) {
    if (charsCounter[char]) charsCounter[char] = charsCounter[char] - 1
    else return false
  }

  return true
}

//array buckets solution
const validAnagrams = (s, t) => {
  let lettersArr = new Array(26).fill(0)

  for (let i = 0; i < s.length; i++) {
    let letterIdx = s.charCodeAt(i) - 97
    lettersArr[letterIdx]++
  }

  for (let i = 0; i < t.length; i++) {
    let letterIdx = t.charCodeAt(i) - 97
    if (lettersArr[letterIdx] === 0) return false
    lettersArr[letterIdx]--
  }

  return true
}

console.log(validAnagram("nagaram", "anagram"))