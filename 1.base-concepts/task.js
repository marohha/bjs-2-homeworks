"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2 - 4 * a * c;
  
  if (d < 0) {
    arr = [];
  } else if (d === 0) {
    let root = (-b / (2 * a));
    arr.push(root);
  } else if (d > 0) {
    let root1 = ((-b + Math.sqrt(d)) / (2 * a));
    let root2 = ((-b - Math.sqrt(d)) / (2 * a));
    arr.push(root1, root2);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthPercent = percent / 100 / 12;
  let credit = amount - contribution;
  let payment = credit * (monthPercent + (monthPercent / (((1 + monthPercent)**countMonths) - 1)));

  let loanAmount = (payment * countMonths).toFixed(2);
  loanAmount = Number(loanAmount);

  return loanAmount;
}