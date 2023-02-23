/*
A robot has been given a list of movement instructions. Each instruction 
is either left, right, up or down, followed by a distance to move. 
The robot starts at [0, 0]. You want to calculate where the robot will 
end up and return its final position as a list. 

For example, if the robot is given the instructions: 
["right 10", "up 50", "left 30", "down 10"]

it will end its path 20 left and 40 up from where it started, so you 
should return [-20, 40].
*/

const robotTracker = (path) => {
  let location = {
    'up': 0,
    'down': 0,
    'left': 0,
    'right': 0
  }

  for (let i = 0; i < path.length; i++) {
    let [direction, distance] = path[i].split(' ')
    location[direction] = +distance
  }

  return [location['left'] - location['right'], location['up'] - location['down']]
}

console.log(robotTracker(["right 10", "up 50", "left 30", "down 10"]))
