`
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Constraints:
1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
`

/*   The plan:

  1. setup a stack to keep track of the brackets we've seen so far
  2. setup a map of closing brackets to opening brackets - this is how we'll check if the brackets match
  3. iterate over the string
    3a. if we find an opening parenthesis, 
      --push it into the stack - we'll use this to check if the brackets match
    
    3b. if we find a closing parenthesis, pop the stack and compare the values
      --if the values don't match, return false
      --if the stack is empty at the end, return true

*/


const validPerentheses = (st) => {

  const stack = []
  const chars = { '}': '{', ']': '[', ')': '(' }

  for (const char of st) {
    if (chars[char] && chars[char] === stack[stack.length - 1]) stack.pop()
    else stack.push(char)
  }

  return stack.length === 0
}

console.log(validPerentheses("()"))
console.log(validPerentheses("()[]{}"))
console.log(validPerentheses("({[]})"))
console.log(validPerentheses("({}"))
console.log(validPerentheses("(()])"))
console.log(validPerentheses("([()]{}{})"))
