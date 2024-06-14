/*
create a function which answers the question"are you playing banjo?' 
if your name starts with the letter "R" or lower case'r'.you are paling banjo!
the function takes a names as its only argument, and returns one of the following strings:
name +'pays banjo"
name +'does not play banjo'

*/
function playingBanjo(name) {
  // if (name[0] === "r" || name[0] === "R") {
  //   return `${name} plays banjo`;
  // } else {
  //   return `${name} does not play banjo`;
  // }

  return name[0] === "r" || name[0] === "R"
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
}

console.log(playingBanjo("anna"));
