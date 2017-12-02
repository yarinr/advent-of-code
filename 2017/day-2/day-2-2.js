const fs = require("fs");

const input = fs.readFileSync("./input-2.txt").toString();
const rows = input
  .split("\n")
  .map(row => row.trim())
  .map(row => row.split("\t").map(Number));

const result = rows.reduce(
  (divisionsSum, currRow) =>
    divisionsSum + findRowEvenlyDivisibleDivision(currRow),
  0
);

console.log(result);

function findRowEvenlyDivisibleDivision(row) {
  const sortedRow = row.sort((a, b) => a - b).reverse();

  for (let i = 0; i < sortedRow.length - 1; i++) {
    for (let j = i + 1; j < sortedRow.length; j++) {
      if (sortedRow[i] % sortedRow[j] === 0) {
        return sortedRow[i] / sortedRow[j];
      }
    }
  }

  throw "No evenly divisble pair found";
}
