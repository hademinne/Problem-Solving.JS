/*

Formatting decimal places:
each number should be formatted that it is rounded to two decimal places. you don't need to check whether the input is a valid number because only valid numbers are used in the tests.

ex: 5.5589 is rounded 5.26
3.3424 is rounded 3.34
*/

function twoDecimalPlaces(n) {
  // return Math.round(n * 100) / 100;
  return Number(n.toFixed(2));
}

console.log(twoDecimalPlaces(3.3424));
