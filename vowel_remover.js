/*
create a function called shortcut to remove the lovercase vowels(a,e,i,o,u) in a given string.

ex: "hello" => 'hll'

*/

function shortcut(str) {
  // return str.replace(/[aeiou]/g, "");

  const vowels = ["a", "e", "i", "o", "u"];
  let arr = [];

  for (let i = 0; i < str.length; i++)
    if (!vowels.includes(str[i])) {
      arr.push(str[i]);
    }
  return arr.join("");
}

console.log(shortcut("hello"));
