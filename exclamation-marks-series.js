/*
exclamation marks series: remove an exclamation mark from the end of string.
*/

function remove(str) {
  if (str.length === 0 || str[str.length - 1] !== "!") {
    return str;
  }

  return str.slice(0, -1);
}

console.log(remove("!hi!"));
