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

function decode(message) {

}


//stack approach
// 1. setup a stack
// 2. iterate over the message
// 3. if we find an opening parenthesis - remove / skip it
//    a1. push letters into the stack until we find a closing parenthesis
//    a2. when we find a closing parenthesis, pop the letters from the stack and add them to the message

//    b1. if we find a second opening perenthesis before a closing perenthesis, store the letters until we find a closing parenthesis
//    b2. when we find a closing parenthesis, begin adding letters to the stack again until we find a closing parenthesis
//    b3. when we find a closing parenthesis, pop the letters from the stack and add them to the message

//two pointers approach
// 1. set up proper variables
//    a. l = 0
//    b. r = message.length - 1
//    e. reverse = false
//    f. message = [] (len === message.length)

// 2. move l forward, pushing letters into 'start', until we find an opening parenthesis
//    a. if we find an opening parenthesis, set reverse = true
//    b. start moving j backwards, pushing letters into 'end', until we find a closing parenthesis
//    c. when we find a closing parenthesis, set reverse = false
//    d. push letters from 'start' into the message
//    

// 3. while reverse === true and l < r 
//    a. push letters from 'end' into the message

//  san(cat)laus