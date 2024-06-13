/*
Do i get a bonus? its bonus time in the city! the fatcut are rubbing their paws in anticipation but who is going to make the most money?
build a function that takes in two arguments salary, bonus . salary will be an intiger and bonus a boolean.
if bonus is true the salary should be multiplied by 10. if bonus is false the fatcat did not make enought money and must receive only his stated salary.
*/

function bonusTime(salary, bonus) {
  // let value = salary * 10;

  // if (bonus == true) {
  //   return `$${value}`;
  // } else {
  //   return `$${salary}`;
  // }
  return bonus == true ? "$" + salary * 10 : "$" + salary;
}

console.log(bonusTime(150, false));
