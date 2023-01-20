

const timer = (testFunc, numTimes, ...vals) => {

  for (let i = 0; i <= numTimes; i++) {
    console.time('benchmark')
    let functionOutput = testFunc(...vals)
    console.timeEnd('benchmark')
    console.log(functionOutput)
  }
}


const classSorter = (list) => {
  const teams = { 0: [], 1: [], 2: [], 3: [], 4: [] }
  for (let i in list) teams[i % 5].push(list[i])
  console.log(teams)
}

const students = [
  'student names here'
]

classSorter(students)

module.exports = {
  timer
}