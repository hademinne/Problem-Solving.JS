/*
get the mean of an array: its the academic year end. fateful moment of your school report . the averges must be calculated. all the students come to you and entreat you to calculate their averge of the given array rounded down to its nearest script.
Return the averge of the given array rounded down to its nearest integer.

the array will never be empty.
*/

function average(marks) {
  return marks.reduce((acc, current) => acc + current, 0) / marks.length;
  //   let count = 0;
  //   for (let i = 0; i < marks.length; i++) {
  //     count += marks[i];
  //   }
  //   return count / marks.length;
  //
}

console.log(average([2, 2, 2, 2]));
