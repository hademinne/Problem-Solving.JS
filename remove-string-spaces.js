/*
remove string spaces: simple, remove the spaces from the string then return the resultant string

*/

function noSpace(str) {
  return str.split(" ").join("");
}

console.log(noSpace("hademinne Ab 123"));
