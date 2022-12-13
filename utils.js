

const timer = (testFunc, ...vals) => {
  console.time('benchmark')
  let functionOutput = testFunc(...vals)
  console.timeEnd('benchmark')
  console.log(functionOutput)
}


module.exports = {
  timer
}