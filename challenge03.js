//challenge 03
//sum all the numbers of a given array(cq.list). except the highest and the lowest element(by value not by index) The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

//exp: {6,2,1,8,10} =>16  or {1,1,11,2,3} =>6

let myArr = [1, 2, 8, 3, 4, 5, 6];

function sumOfArr(myArr) {
  if (myArr == null) return 0;
  return myArr
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((acc, current) => acc + current, 0);
  // let maxN = Math.max(...myArr);
  // let minN = Math.min(...myArr);
  // let filteredArr = myArr.filter((x) => x !== maxN && x !== minN);
  // let newArr = filteredArr.reduce((acc, current) => acc + current, 0);

  // console.log(newArr);
}

console.log(sumOfArr(myArr));
