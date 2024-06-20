/*
find the position when provided with a letter, return its position in the alphabet
ex: 'a' => '1'
*/

function position(letter) {
  ENGLISH = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < ENGLISH.length; i++)
    if (ENGLISH[i] == letter) return `Position of alphabet: ${i + 1}`;

  // return ENGLISH.indexOf(letter) + 1;
}

console.log(position("c"));
