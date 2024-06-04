// challenge 06
// Counting sheep : consider an array of sheep where some sheep may be missing from their place. we need a function that counts the number of sheep present in the array true means present.

function countSheeps(arrayOfSheep) {
  // return arrayOfSheep.reduce((acc, current) => acc + current, 0);
  let count = 0;
  arrayOfSheep.map((m) => {
    if (m === true) {
      count++;
    }
  });
  return count;
}

console.log(countSheeps([true, true, false, false, true]));
