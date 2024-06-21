/*
opposites attract:
write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't
*/

function lovefunc(flower1, flower2) {
  // if (
  //   (flower1 % 2 !== 0 && flower2 % 2 == 0) ||
  //   (flower2 % 2 !== 0 && flower1 % 2 == 0)
  // ) {
  //   return True;
  // } else {
  //   return False;
  // }
  return flower1 % 2 !== flower2 % 2;
}
console.log(lovefunc(2, 2));
