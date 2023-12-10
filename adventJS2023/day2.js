/*
In Santa's workshop, the elves have a gift list they wish to make and a limited set of materials.

Gifts are strings of text and materials are characters. Your task is to write a function that, given a list of gifts and the available materials, returns a list of the gifts that can be made.

A gift can be made if we have all the necessary materials to make it.

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

manufacture(gifts, materials) // ["tren", "oso"]

const gifts = ['juego', 'puzzle']
const materials = 'jlepuz'

manufacture(gifts, materials) // ["puzzle"]

const gifts = ['libro', 'ps5']
const materials = 'psli'

manufacture(gifts, materials) // []
*/

function manufacture(gifts, materials) {
  let outputs = []

  for (const gift of gifts) {
    let keep = true
    i = 0
    while (keep && i < gift.length) {
      if (!materials.includes(gift[i])) keep = false
      i++
    }

    if (keep) outputs.push(gift)
  }

  return outputs
}



console.log(manufacture(['tren', 'oso', 'pelota'], 'tronesa'))
console.log(manufacture(['juego', 'puzzle'], 'jlepuz'))
console.log(manufacture(['libro', 'ps5'], 'psli'))