/* 

Challenge #8: 🏬 Sorting the warehouse
The elves are very busy in Santa Claus' workshop organizing gifts 🎁 for Christmas Eve 🎄.

The input format is special, as it indicates the number of gifts and the type of gift with letters from a to z. 
For example, '66a11b' means 66 a gifts and 11 b gifts.

The elves have a special system for organizing the gifts:

Every 10 gifts of the same type are packed in a box, represented by {x}. For example, 20 type a gifts are packed in two boxes like this: {a}{a}.
Every 5 boxes are stacked on a pallet, represented by [x]. For example, 10 a boxes are stacked on 2 pallets in this way: [a][a].
Any additional gift is placed in a bag, represented by () and all of them are placed inside. For example, 4 b gifts are placed in a bag like this (bbbb).
The gifts are then placed in the following order: pallets, boxes, and bags. And the gifts appear in the same order as the input string.

Your task is to write a function organizeGifts that takes a string of gifts as an argument and returns a string representing the warehouse.

const result1 = organizeGifts('76a11b')
console.log(result1)
 `[a]{a}{a}(aaaaaa){b}(b)`
  //explanation:
  76a: 76 gifts type 'a' would be packed in 7 boxes and 6 gifts would be left, resulting in 1 pallet [a] (for the first 5 boxes), 2 loose boxes {a}{a} and a bag with 6 gifts (aaaaaa)

  11b: 11 gifts type 'b' would be packed in 1 box and 1 gift would be left, resulting in 1 loose box {b} and a bag with 1 gift (b)

*/


/* 
 subproblems:
  identify each set of gifts
  convert them to a usable set of data (number / letter)


  determine how many boxes and pallets are needed for each set of gifts
  determine how many gifts are left over after boxes and pallets are filled
  create a string that represents the warehouse
*/

const convertData = (gifts) => {
  gifts = gifts.split('')
  let letter = gifts.pop()
  let number = +gifts.join('')

  return [number, letter]
}

const packageItems = (packaging, letter, number) => {
  let str = packaging.split(' ').join(letter).repeat(number)
  return str
}


function organizeGifts(gifts) {
  //setup vars
  const packaging = { '[ ]': 50, '{ }': 10 }, warehouse = []

  //identify each set of gifts
  const giftSets = [...gifts.matchAll(/(\d{1,10}\w?)/g)].map(gift => convertData(gift[0]))

  //go through each set of gifts
  for (const gift of giftSets) {
    let [number, letter] = gift
    let str = ''

    //for each gift, determine how many boxes and pallets are needed
    for (let [type, capacity] of Object.entries(packaging)) {
      let numPackages = Math.floor(number / capacity)
      if (!numPackages) continue
      number = number % capacity
      str += packageItems(type, letter, numPackages)
    }

    //determine how many gifts are left over after boxes and pallets are filled
    if (number) str += packageItems('( )', letter.repeat(number), 1)

    //store str representing the gift's packaging
    warehouse.push(str)
  }

  return warehouse.join('')
}


console.log(organizeGifts('20a'))