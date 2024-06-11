/*
reversing words in a string: you need to write a function that reverses the words in a given string. a word can also fit an empty string . if this is not clear enought, here are some ex:
"hello world" => "wold hello"

*/

function reversing(str) {
  return str.split(" ").reverse().join(" ");
}
console.log(reversing("hi there."));
