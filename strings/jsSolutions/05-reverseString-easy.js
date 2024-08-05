/*

Write a function that reverses a string. 
The input string is given as an array of characters s.

you must do this in-place without allocating extra space.

*/

const reverseString = (s) => {
  let l = -1, r = s.length
  while (l++ < r--) [s[l], s[r]] = [s[r], s[l]]
  return s
}

console.log(reverseString(["h", "e", "l", "l", "o"]))