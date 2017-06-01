require('../helperfunctionspart1')
let _ = require('ramda')


// Exercise 1
//==============
// Refactor to remove all arguments by partially applying the function.

let words = _.split(' ')

// Exercise 1a
//==============
// Use map to make a new words fn that works on an array of strings.

let sentences = _.map(words)


// Exercise 2
//==============
// Refactor to remove all arguments by partially applying the functions.


let filterQs = _.filter(match(/q/i))


// Exercise 3
//==============
// Use the helper function _keepHighest to refactor max to not reference any
// arguments.

// LEAVE BE:
let _keepHighest = function(x, y) {
  return x >= y ? x : y;
}

// REFACTOR THIS ONE:
let max = _.reduce(_keepHighest, -Infinity)



// Bonus 1:
// ============
// Wrap array's slice to be functional and curried.
// //[1, 2, 3].slice(0, 2)
let slice = _.curry(function(start, end, xs){ return xs.slice(start, end) })


// Bonus 2:
// ============
// Use slice to define a function "take" that returns n elements from the beginning of an array. Make it curried.
// For ['a', 'b', 'c'] with n=2 it should return ['a', 'b'].
let take = slice(0)

module.exports = { words: words,
                   sentences: sentences,
                   filterQs: filterQs,
                   max: max,
                   slice: slice,
                   take: take
                 }
