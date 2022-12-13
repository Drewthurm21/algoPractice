

const timer = (testFunc, ...vals) => {
  let startTime = Date.now()
  let functionOutput = testFunc(...vals)
  let endTime = Date.now()
  let elapsedTime = endTime - startTime

  console.log(functionOutput, startTime, endTime, elapsedTime)
}


module.exports = {
  timer
}