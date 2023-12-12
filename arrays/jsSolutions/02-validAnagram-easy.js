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
const { timer } = require('../../utils.js')

//simple solution - easy to read
//uses for of loop & Map object
const validAnagram = (s, t) => {
  if (s.length !== t.length) return false
  let charsMap = new Map()

  for (let char of s) charsMap.set(char, charsMap.get(char) + 1 || 1)

  for (let char of t) {
    if (charsMap.get(char)) charsMap.set(char, charsMap.get(char) - 1)
    else return false
  }

  return true
}

//uses for loop & Map object
const validAnagram2 = (s, t) => {
  if (s.length !== t.length) return false
  let charsMap = new Map()

  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    charsMap.set(char, charsMap.get(char) + 1 || 1)
  }

  for (let i = 0; i < t.length; i++) {
    let char = t[i]
    if (charsMap.get(char)) charsMap.set(char, charsMap.get(char) - 1)
    else return false
  }

  return true
}


//object solution
/*
  The plan:
  1. create an object to keep track of the letters we've seen so far
  2. iterate over s and increment the count of the letter in the object
  3. iterate over t and decrement the count of the letter in the object
  4. iterate over the object and return false if any of the counts are not 0
  5. return true
*/
const validAnagram4 = (s, t) => {
  if (s.length !== t.length) return false
  let charsCounter = {}
  for (let char of s) charsCounter[char] = charsCounter[char] + 1 || 1

  for (let char of t) {
    if (charsCounter[char]) charsCounter[char] = charsCounter[char] - 1
    else return false
  }

  return true
}

//array buckets solutions
/*
  The plan:
  We know that there are 26 letters in the alphabet, so we can create an array of 26 buckets
  to keep track of the letters we've seen so far. This is more performant than using a Map object 
  because we don't have to worry about hashing the keys.

  1. create an array of 26 buckets
  2. iterate over s and increment the bucket at the index of the charCode
  3. iterate over t and decrement the bucket at the index of the charCode
  4. iterate over the buckets and return false if any of the buckets are not 0
  5. return true
*/

const validAnagram3 = (s, t) => {
  if (s.length !== t.length) return false
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

  return lettersArr.every(el => el === 0)
}

//unicode solution
const validAnagramUnicode = (s, t) => {
  if (s.length !== t.length) return false
  let lettersArr = new Array(26).fill(0)
  s = s.split(',')
  t = t.split(',')

  for (let i = 0; i < s.length; i++) {
    let letterIdx = Number(s[i]) - 97
    lettersArr[letterIdx]++
  }

  for (let i = 0; i < t.length; i++) {
    let letterIdx = Number(s[i]) - 97
    if (lettersArr[letterIdx] === 0) return false
    lettersArr[letterIdx]--
  }

  return lettersArr.every(el => el === 0)
}

let longString = Array(50000).fill('a').join()

console.log('running validAnagram2')
timer(validAnagram4, 10, longString, longString)
console.log(`\n\n\n`)
console.log('running validAnagram3')
timer(validAnagram4, 10, longString, longString)
console.log(`\n\n\n`)
console.log('running validAnagram4')
timer(validAnagram4, 10, longString, longString)
console.log(`\n\n\n`)
console.log('running validAnagram')
timer(validAnagram4, 10, longString, longString)


// console.log(validAnagram("nagaram", "anagram"))
// console.log(validAnagram("nagarapdam", "anagraprmm"))
// console.log(validAnagram("nappgaram", "anappgram"))
// console.log(validAnagramUnicode('110,97,103,97,114,97,109', '97,110,97,103,97,114,109'))