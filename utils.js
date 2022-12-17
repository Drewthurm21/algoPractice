

const timer = (testFunc, numTimes, ...vals) => {

  for (let i = 0; i <= numTimes; i++) {
    console.time('benchmark')
    let functionOutput = testFunc(...vals)
    console.timeEnd('benchmark')
    console.log(functionOutput)
  }
}


module.exports = {
  timer
}