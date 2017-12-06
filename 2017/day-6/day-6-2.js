const fs = require("fs");

const input = fs.readFileSync("./input-6.txt").toString();
const memoryBanks = input.split("\t").map(Number);

console.log(cyclesBeforeRepeatedConfiguration(memoryBanks));

function cyclesBeforeRepeatedConfiguration(memoryBanks) {
  let cyclesCounter = 0;
  let uniqueConfigurations = new Set();

  while (true) {
    const configuration = blocksInBanksConfigurationToString(memoryBanks);
    if (uniqueConfigurations.has(configuration)) {
      const loopSize =
        uniqueConfigurations.size -
        [...uniqueConfigurations.values()].indexOf(configuration);
      return loopSize;
    } else {
      uniqueConfigurations.add(configuration);
      cyclesCounter++;
      redistributionCycle(memoryBanks);
    }
  }
}

function redistributionCycle(memoryBanks) {
  const bankWithMostBlocksIndex = memoryBanks.indexOf(Math.max(...memoryBanks));
  let blocksToRedistribute = memoryBanks[bankWithMostBlocksIndex];
  memoryBanks[bankWithMostBlocksIndex] = 0;

  let currentBankIndex = bankWithMostBlocksIndex;
  while (blocksToRedistribute-- > 0) {
    memoryBanks[++currentBankIndex % memoryBanks.length] += 1;
  }
}

function blocksInBanksConfigurationToString(configuration) {
  return configuration.join(" ");
}
