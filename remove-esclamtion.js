/*
rmove exclamation marks: write a function remove exclamation marks which removes all exclamation marks from a given string
*/

function removeExcMarks(str) {
  // let arr = [];
  // for (let i = 0; i < str.length; i++) {
  //   if (!str[i].endsWith("!")) {
  //     arr.push(str[i]);
  //   }
  // }

  // return arr.join("");

  return str
    .split("")
    .filter((e) => e !== "!")
    .join("");
}

console.log(removeExcMarks("hello there!!"));
