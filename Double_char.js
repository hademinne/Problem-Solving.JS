//challenge 11
//Double_char : given a string you have to return a string in which each character case-sensitive is repeated once.

//ex: "String" =>"SSttrriinngg"

function doubleChar(str) {
  return str
    .split("")
    .map((x) => x + x)
    .join("");
}

console.log(doubleChar("hi"));
