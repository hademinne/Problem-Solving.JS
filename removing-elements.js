/*
Removing elements:
take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
ex: ['keep', 'remove', 'keep', 'remove', 'keep']  => ['keep', 'keep','keep']
*/

function removeEveryOther(arr) {
  let newArr = [];
  for (let i = 1; i < arr.length; i++) {
    arr.splice(i, 1);
  }
  return arr;
}

console.log(
  removeEveryOther([
    "keep",
    "remove",
    "keep",
    "remove",
    "keep",
    "remove",
    "keep",
  ])
);
