const fs = require("fs");

const input = fs
  .readFileSync("./input-1.txt")
  .toString()
  .split("")
  .map(Number);

const result = input.reduce(
  (acc, curr, index, arr) =>
    isEqualToNextElement(arr, index) ? acc + curr : acc,
  0
);

console.log(result);

function isEqualToNextElement(arr, index) {
  return arr[index] === arr[(index + 1) % arr.length];
}
