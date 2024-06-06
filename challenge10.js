//challenge 10

//Count of positives /sum of negatives
//Given an array of integers: return an array , where the first element is the count of positive numbers and the second element id sum of negative numbers. 0 is neither positive nor negative.
//

function count_sum_numbers(input) {
  // let myArr = [];
  // let myVari = 0;

  // for (let i = 0; i < input.length; i++) {
  //   if (input[i] > 0) {
  //     myArr.push(input[i]);
  //   } else if (input[i] < 0) {
  //     myVari += input[i];
  //   }
  // }

  let myArr = input.filter((x) => x > 0).length;
  let myVari = input
    .filter((x) => x < 0)
    .reduce((acc, current) => acc + current, 0);
  return [myArr, myVari];
}

console.log(count_sum_numbers([1, 2, 3, 4, -1, -2, -3]));
