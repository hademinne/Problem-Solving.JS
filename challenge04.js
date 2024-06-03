//challenge 04
//Write a function called repeatStr which repeat the given string exactly n times.

let str = " Hi  ";

function repeatStr(str, number) {
  let myStr = "";
  // return str.repeat(r);
  for (let i = 0; i < number; i++) {
    myStr = myStr + str;
  }
  return myStr;
}

console.log(repeatStr(str, 5));
