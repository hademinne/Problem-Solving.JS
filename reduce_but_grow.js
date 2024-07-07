/*
given a non empty array of integers return the result of multiplying the values together in order 
ex: [1,2,3,4] => 1*2*3*4=24

*/

function grow(arr) {
  result = 1;
  for (let i = 0; i < arr.length; i++) {
    result *= arr[i];
  }
  return result;
}

console.log(grow([1, 2, 3, 4]));
