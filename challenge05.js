//Challenge 04
//Convert number to reversed array of digits: Given a random non negative number, you have to return the digits of this number within an array in reverse order.

//ex: 123456 => [6,5,4,3,2,1]

const number = 123456;
function digitize(number) {
  return number
    .toString()
    .split("")
    .reverse()
    .map((n) => Number(n));
}

console.log(digitize(number));
