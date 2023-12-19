/* 
In 🎅 Santa's workshop, some Christmas messages have been written in a peculiar way: the words within the brackets must be read backwards.

Santa needs these messages to be correctly formatted. Your task is to write a function that takes a string and reverses the characters within each pair of parentheses, removing the parentheses as well.

However, bear in mind that there may be nested parentheses, so you should reverse the characters in the correct order.

const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

// Step by step:
// 1. Reverse the nested -> sa(ualcatn)s
// 2. Reverse the remaining one -> santaclaus
Notes:

The input strings will always be well formed with parentheses that match correctly, you do not need to validate them.
There should not be any parentheses left in the final message.
The maximum nesting level is 2.
*/

/*
  recursive approach

  base case:  there are no parens.

  recursive case:
    find innermost opening paren
    from there, iterate to the next closing paren

  recursive step:
    reverse that portion of the string, omitting the parens

  call the function again
*/

function decodeRecurse(message) {
  let l = message.lastIndexOf("(")
  if (l === -1) return message
  let r = message.indexOf(")", l)

  message =
    message.slice(0, l) +
    message.slice(l + 1, r).split("").reverse().join("") +
    message.slice(r + 1)

  return decode(message)
}


function decodeWhile(message) {
  let i;
  while ((i = message.lastIndexOf("(")) + 1) {
    const j = message.indexOf(")", i);
    if (j + 1)
      message =
        message.slice(0, i) +
        message.slice(i + 1, j).split("").reverse().join("") +
        message.slice(j + 1);
  }
  return message;
}




let a = decodeRecurse('hola (odnum)')
console.log(a) // hola mundo

let b = decodeRecurse('(olleh) (dlrow)!')
console.log(b) // hello world!
let d = decodeRecurse('hello (row)ld')
console.log(d) // hello world

let c = decodeRecurse('sa(u(cla)atn)s')
console.log(c) // santaclaus

a = decodeWhile()