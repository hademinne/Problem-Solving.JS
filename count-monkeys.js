/*
count th monkeys : you take your son to the forest to see the monkeys you know that there are a certain number there(n) but your son is too young to just appreciate the full number, he has to  start counting them from 1.
given the number (n ) populate an array with all numbers up to and including that number but excluding zero.

ex: monkeyCount(5) => [1,2,3,4,5]
*/

function monkeyCount(n) {
  let myArr = [];
  for (let i = 1; i <= n; i++) {
    myArr.push(i);
  }
  return myArr;
}
console.log(monkeyCount(10));
