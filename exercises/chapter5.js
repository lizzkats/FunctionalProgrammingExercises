require('../helperfunctionspart1')
const _ = require('ramda')
const accounting = require('accounting')

// Example Data
let CARS = [{
  name: 'Ferrari FF',
  horsepower: 660,
  dollar_value: 700000,
  in_stock: true
}, {
  name: 'Spyker C12 Zagato',
  horsepower: 650,
  dollar_value: 648000,
  in_stock: false
}, {
  name: 'Jaguar XKR-S',
  horsepower: 550,
  dollar_value: 132000,
  in_stock: false
}, {
  name: 'Audi R8',
  horsepower: 525,
  dollar_value: 114200,
  in_stock: false
}, {
  name: 'Aston Martin One-77',
  horsepower: 750,
  dollar_value: 1850000,
  in_stock: true
}, {
  name: 'Pagani Huayra',
  horsepower: 700,
  dollar_value: 1300000,
  in_stock: false
}]

// Exercise 1:
// ============
// Use _.compose() to rewrite the function below. Hint: _.prop() is curried.
let isLastInStock = _.compose(_.prop('in_stock'), _.last)

// Exercise 2:
// ============
// Use _.compose(), _.prop() and _.head() to retrieve the name of the first car.
let nameOfFirstCar = _.compose(_.prop('name'), _.head)

// Exercise 3:
// ============
// Use the helper function _average to refactor averageDollarValue as a composition.
let _average = function (xs) {
  return _.reduce(_.add, 0, xs) / xs.length
} // <- leave be

let averageDollarValue = _.compose(_average, _.map(_.prop('dollar_value')))

// Exercise 4:
// ============
// Write a function: sanitizeNames() using compose that returns a list of lowercase and underscored car's names: e.g: sanitizeNames([{name: 'Ferrari FF', horsepower: 660, dollar_value: 700000, in_stock: true}]) //=> ['ferrari_ff'].

let _underscore = _.replace(/\W+/g, '_') // <-- leave this alone and use to sanitize

let sanitizeNames = _.map(_.compose(_underscore, toLowerCase, _.prop('name')))

// Bonus 1:
// ============
// Refactor availablePrices with compose.

let formatPrice = _.compose(accounting.formatMoney, _.prop('dollar_value'))
let availablePrices = _.compose(_.join(', '), _.map(formatPrice), _.filter(_.prop('in_stock')))

// Bonus 2:
// ============
// Refactor to pointfree. Hint: you can use _.flip().

let append = _.flip(_.concat)
let fastestCar = _.compose(append(' is the fastest'),
   _.prop('name'),
   _.last,
   _.sortBy(_.prop('horsepower')))

module.exports = {
  CARS: CARS,
  isLastInStock: isLastInStock,
  nameOfFirstCar: nameOfFirstCar,
  fastestCar: fastestCar,
  averageDollarValue: averageDollarValue,
  availablePrices: availablePrices,
  sanitizeNames: sanitizeNames
}
