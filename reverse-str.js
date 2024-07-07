/*
reverse strings: complete the solution so that it reverses the string passed into it.
ex: 'hello' => 'olleh'
*/

function solution(str) {
  // return str.split("").reverse().join("");
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

console.log(solution("hello"));
