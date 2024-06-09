//to square or not to square

// write a method that will get an integer array as parameter and will process every number from this array.
//return a new array with processing every number of the input array like this:
// if the number has an integer square root take this otherwise square the number

//ex: [4,3,9,7,2,1] => [2,9,3,49,4,1]

function squareOrSquareRoot(array) {
  for (let i = 0; i < array.length; i++) {
    const sqrt = Math.sqrt(array[i]);
    if (Number.isInteger(sqrt)) {
      array[i] = sqrt;
    } else {
      array[i] = array[i] * array[i];
    }
  }
  return array;
}

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));
