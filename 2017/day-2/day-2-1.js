const fs = require("fs");

const input = fs.readFileSync("./input-2.txt").toString();
const rows = input
  .split("\n")
  .map(row => row.trim())
  .map(row => row.split("\t").map(Number));

const result = rows.reduce(
  (totalDifference, currRow) => totalDifference + findRowDifference(currRow),
  0
);

console.log(result);

function findRowDifference(row) {
  return Math.max(...row) - Math.min(...row);
}
