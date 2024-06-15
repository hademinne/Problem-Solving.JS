/*
transportation on vacation:every day you rent the car costs $40. if you rent the car for 7 or more days, you get $50 off your total.Alternatively if you rent the car for 3 or more days, you get $20 off your total.

Writ a function  that gives out the total amount for different days(d)
*/

function rentalCarCost(d) {
  let total = 40 * d;
  if (d < 3) return total;
  return d >= 7 ? total - 50 : total - 30;
}

console.log(rentalCarCost(2));
