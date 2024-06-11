/*
Calculate average:
Write a function which calculates the average of the numbers in a given list.
*/
function find_aver(arr) {
  // let count = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   count = count + arr[i];
  // }
  // if (arr.length === 0) {
  //   return 0;
  // } else {
  //   return count / arr.length;
  // }
  if (arr.length === 0) return 0;
  return arr.reduce((acc, current) => acc + current, 0) / arr.length;
}

console.log(find_aver([]));
