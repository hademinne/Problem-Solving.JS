/*
Example 1:

Input: nums = [13,25,83,77]
Output: [1,3,2,5,8,3,7,7]
*/
/*
convert arr to string 
separate each num
join them in a str
*/

function sperateDigit(nums) {
  // return nums.flatMap((num) => num.toString().split("").map(Number));
  // const first = nums.toString().split("");
  // const filtred = first.filter((item) => item !== ",");

  // return filtred;

  return nums
    .toString()
    .split("")
    .filter((num) => num !== ",")
    .map(Number);
}

console.log(sperateDigit([13, 25, 83, 77]));

// const separation = nums
// .toString()
// .split("")
// .filter((item) => item !== ",")
// .join();

// const arr = [];

// return separation;
