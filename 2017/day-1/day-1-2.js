const fs = require("fs");

const input = fs
  .readFileSync("./input-1.txt")
  .toString()
  .split("")
  .map(Number);

const result = input.reduce(
  (acc, curr, index, arr) =>
    isEqualToHalfwayAroundElement(arr, index) ? acc + curr : acc,
  0
);

console.log(result);

function isEqualToHalfwayAroundElement(arr, index) {
  return arr[index] === arr[(index + arr.length / 2) % arr.length];
}
