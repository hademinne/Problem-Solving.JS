// count by x
// create a function with two arguments that will return an array of the first n multiply of x
//assume both the given number and numbers of times to count will be positive numbers greater than 0.
//return the results as an array.

//ex: (1,10) => [1,2,3,4,5,6,7,8,10]  (2,5)=>[2,4,6,8,10]

function countBy(x, n) {
  let z = [];
  // z.push(x, n);
  for (let i = 1; i <= n; i++) {
    z.push(x * i);
  }

  return z;
}

console.log(countBy(1, 10));
