const fs = require("fs");

const input = fs.readFileSync("./input-5.txt").toString();
const offsets = input.split("\n").map(Number);

let currentPosition = 0;
let movesCount = 0;

while (currentPosition >= 0 && currentPosition < offsets.length) {
  movesCount++;
  let newPosition = currentPosition + offsets[currentPosition];
  offsets[currentPosition] += 1;
  currentPosition = newPosition;
}

console.log(movesCount);
