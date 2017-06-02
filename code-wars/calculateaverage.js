// Write function avg which calculates average of numbers in given list.

function findAverage (array) {
  return array.reduce((result, current) => result + current, 0) / array.length
}

console.log(findAverage())
