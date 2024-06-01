// Challenge 02
// You get an array of numbers, return the sum of all of the positive ones.

arr = [2, 3, -4, 5];

function sumOfArr(arr) {
  let initValue = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      initValue = initValue + arr[i];
    }
  }
}
// console.log(arrLoop(arr));
sumOfArr(arr);
console.log(sumOfArr(arr[i]));
