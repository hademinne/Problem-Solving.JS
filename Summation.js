/*
write a program that finds the summation of every number from 1 to num.the number will always be  a positive integer greater than 0

ex: 2 => 1+2 =3
    8 => 1+2+3+4+5+6+7+8 =36
*/
var summation = function (num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    count = i + count;
  }
  return count;
};

console.log(summation(8));
