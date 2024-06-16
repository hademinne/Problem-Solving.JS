/*
find the first non consecutive number:
Your task is to find the first element of an array that is not consecutive.
by not consecutive we mean not exactly 1 larger than the previos element of the array.
ex: [1,2,3,5,6,7] => from 1 to 3 are consecutive but 5 is not 
*/

function firstNonConsecutive(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - 1 !== arr[i - 1]) return arr[i];
  }
  return null;
}

console.log(firstNonConsecutive([1, 2, 3, 5, 6, 7]));
