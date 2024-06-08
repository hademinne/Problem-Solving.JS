//challenge: basic math operation
//your task is to create a function that does four basic mathematical operations.
// the function should take three arguments operation(string/char) , value1(number), value2(number)
// the function should return result of numbers after applying the chosen operation.

//ex: ('+', 4,7) => 11   ('-', 4,7) => -3

function basicOp(operation, value1, value2) {
  // let result = 0;
  // if ((operation = "+")) {
  //   result = value1 + value2;
  // }
  // if ((operation = "-")) {
  //   result = value1 - value2;
  // }
  // if ((operation = "*")) {
  //   result = value1 * value2;
  // }
  // if ((operation = "/")) {
  //   result = value1 / value2;
  // }
  // return result

  return eval(value1 + operation + value2);
}

console.log(basicOp("/", 8, 2));
