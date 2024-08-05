/*
You are given a large integer represented as an array of digits, where each digits[i]
is the i'th digit of the integer. The digits are ordered from most significant to least
significant in left-to-right order. The large integer does not contain any leading 0's.



 create a var called carry and set it to 0
 check the digit at the last index
    if digit is 9
      set digit to 0
      set carry to 1
      iterate to the next digit 
      repeat
    else
      add 1 to the digit
      set carry to 0
      return digits
*/

const plusOne = (digits) => {

  let carry = 1
  let i = digits.length - 1

  while (carry && i >= 0) {
    if (digits[i] === 9) {
      digits[i] = 0
      i--
    }
    else {
      digits[i]++
      carry = 0
    }
  }

  if (carry) return [1, ...digits]

  return digits
};

console.log(plusOne([1, 2, 3])) // [1, 2, 4]
console.log(plusOne([4, 3, 2, 1])) // [4, 3, 2, 2]
console.log(plusOne([0])) // [1]
console.log(plusOne([9])) // [1, 0]
console.log(plusOne([9, 9])) // [1, 0, 0]