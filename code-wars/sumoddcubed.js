// Find the sum of the odd numbers within an array, after cubing the initial integers. This function will return undefined if any of the values aren't numbers.


function cubeOdd(arr) {
  if(arr.filter(x=>isNaN(x)).length > 0) {
    return undefined;
  } else {
    return arr.filter(x => Math.abs(x) % 2 === 1).reduce((sum, x)=> sum + Math.pow(x, 3), 0);
  }
}
