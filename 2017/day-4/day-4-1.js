const fs = require("fs");

const input = fs.readFileSync("./input-4.txt").toString();
const passphrases = input.split("\n").map(row => row.trim());

const validPassphrases = passphrases.filter(isValid);
const result = validPassphrases.length;

console.log(result);

function isValid(passphrase) {
  const words = passphrase.split(" ");
  let uniqueWords = new Set();

  for (word of words) {
    if (uniqueWords.has(word)) {
      return false;
    } else {
      uniqueWords.add(word);
    }
  }

  return true;
}
