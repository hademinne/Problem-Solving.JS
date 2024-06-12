/*
sentence smash:
write a function that takes an array of words and smashes them together to a sentence and returns the sentence. 

ex: ['hi', 'there'] => 'hi there'

*/

function smash(words) {
  return words.join(" ");
}

console.log(smash(["hi", "there"]));
