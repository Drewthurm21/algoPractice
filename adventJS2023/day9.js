/*
They are turning on the Christmas lights 🎄 in the city and, as every year, they have to be fixed!

The lights are of two colors: 🔴 and 🟢 . For the effect to be appropriate, they must always alternate. That is, if the first light is red, the second must be green, the third red, the fourth green, etc.

We have been asked to write a function adjustLights that, given an array of strings with the color of each light, return the minimum number of lights that need to be changed for the colors to alternate.

adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])
// -> 1 (you change the fourth light to 🔴)

adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])
// -> 2 (you change the second light to 🟢 and the third to 🔴)

adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])
// -> 0 (they are already alternating)

adjustLights(['🔴', '🔴', '🔴'])
// -> 1 (you change the second light to 🟢)
*/

function adjustLights(lights) {
  let L = lights.length
  let change1 = 0, change2 = 0
  let odd = true

  for (const light of lights) {
    if (odd && light === "🟢") change1++
    if (!odd && light === "🔴") change1++

    if (odd && light === "🔴") change2++
    if (!odd && light === "🟢") change2++

    odd = !odd
  }

  return Math.min(change1, change2)
}

let a = adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])
console.log(a)
let b = adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])
console.log(b)
let c = adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])
console.log(c)
let d = adjustLights(['🔴', '🔴', '🔴'])
console.log(d)