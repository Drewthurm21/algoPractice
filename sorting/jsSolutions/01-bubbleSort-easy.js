const bubbleSort = (arr) => {
  let count = 0, swapped;
  do {
    swapped = false
    for (let i = 0; i < arr.length - count; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        swapped = true
      }
    }
  } while (swapped)
  return arr
}

console.log(bubbleSort([2, 9, 3, 3, 4, 5, 76, 96, 453, 46, 8, 6,]))


