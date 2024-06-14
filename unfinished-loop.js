/*
unfinished loop: bug fixing. oh no tommy created an infinite loop .Help timmy find and fix the bug in his unfinished for loop.
*/

function createArray(number) {
  var newArr = [];
  for (let counter = 1; counter <= number; counter++) {
    newArr.push(counter);
  }
  return newArr;
}

console.log(createArray(3));
