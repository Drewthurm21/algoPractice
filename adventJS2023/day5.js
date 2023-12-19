/*
Santa 🎅 is testing his new electric sled, the CyberReindeer, on a North Pole road. The road is represented by a string of characters, where:

. = Road
S = Santa's Sled
* = Open barrier
| = Closed barrier
Example of a road: S...|....|.....

Each unit of time, the sled moves one position to the right. If it encounters a closed barrier, it stops until 
the barrier opens. If it is open, it goes through directly.

All barriers start closed, but after 5 units of time, they all open forever.

Create a function that simulates the sled's movement for a given time and returns an array of strings representing 
the state of the road at each unit of time:

const road = 'S..|...|..'
const time = 10 // units of time
const result = cyberReindeer(road, time)

 -> result:
[
  'S..|...|..', // initial state
  '.S.|...|..', // sled advances on the road
  '..S|...|..', // sled advances on the road
  '..S|...|..', // sled waits at the barrier
  '..S|...|..', // sled waits at the barrier
  '...S...*..', // barrier opens, sled advances
  '...*S..*..', // sled advances on the road
  '...*.S.*..', // sled advances on the road
  '...*..S*..', // sled advances on the road
  '...*...S..', // passes through the open barrier
]

The result is an array where each element shows the road at each unit of time.

Take into account that if the sled is in the same position as a barrier, then it takes its place in the array.

The elves were inspired by this Code Wars challenge.
*/


/*

  start with the original word in the array
  set a pointer at the sled index
  save a reference to the next character in the array

  start a loop that will the given number of times, "time"
    once i == 5, replace all barriers with *

    if the sled is at a barrier
      return the string - continue to the next iteration

    if the sled is not at a barrier
      replace the sled with the next character
      increment the pointer
      save a reference to the next character

    
    push the new string into the array

*/

function cyberDeer(road, time, moves = [], char = '.') {
  if (time === 0) return moves
  if (time === 5) road = road.replace(/\|/g, '*')

  let sledIdx = road.indexOf('S')

  if (road[sledIdx + 1] === '|') {
    moves.push(road)
    return cyberDeer(road, time - 1, moves, char)
  }


  let newRoad = road.slice(0, sledIdx) + char + 'S' + road.slice(sledIdx + 2)

  sledIdx++
  char = char === "|" ? char = "." : road[sledIdx + 1]

  moves.push(newRoad)

  return cyberDeer(newRoad, time - 1, moves, char)
}



function cyberReindeer(road, time) {
  let moves = [road]
  let sledIdx = road.indexOf('S')
  let char = road[sledIdx + 1]

  for (let i = 1; i < time; i++) {
    if (i === 5) road = road.replace(/\|/g, '*')

    const newRoad = road.replace(/S[\.\*]/g, `${char}S`)

    if (road != newRoad) {
      sledIdx++
      char = road[sledIdx]
    }

    road = newRoad
    moves.push(road)
  }

  return moves
}


const road = 'S..|...|..'
const time = 10 // units of time
const result = cyberDeer(road, time)
console.log(result)

// [
//   'S..|...|..', // initial state
//   '.S.|...|..', // sled advances on the road
//   '..S|...|..', // sled advances on the road
//   '..S|...|..', // sled waits at the barrier
//   '..S|...|..', // sled waits at the barrier
//   '...S...*..', // barrier opens, sled advances
//   '...*S..*..', // sled advances on the road
//   '...*.S.*..', // sled advances on the road
//   '...*..S*..', // sled advances on the road
//   '...*...S..', // passes through the open barrier
// ]
