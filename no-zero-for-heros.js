/*
no zeros for heros : numbers ending with zeros are boring.
they might be fun in your world, but not here.
get rid of them. only the ending ones.

1450 => 145
96000 => 96
-1050 => -105
*/

function getRidOfZero(n) {
  let nStr = String(n);
  while (nStr.endsWith(0)) {
    nStr = nStr.slice(0, nStr.length - 1);
  }
  return Number(nStr);
}

console.log(getRidOfZero(12000));
