function organizingContainers(container) {
  const n = container.length; // Number of containers

  // Calculate the sum of balls in each container and the sum of balls of each type
  const containerSums = Array(n).fill(0);
  const ballSums = Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      containerSums[i] += container[i][j];
      ballSums[j] += container[i][j];
    }
  }

  // Sort both sums arrays
  containerSums.sort((a, b) => a - b);
  ballSums.sort((a, b) => a - b);

  // If the sorted arrays are equal, it's possible to organize the containers
  if (JSON.stringify(containerSums) === JSON.stringify(ballSums)) {
    return "Possible";
  } else {
    return "Impossible";
  }
}

// Example usage:
const container = [
  [1, 1, 3],
  [2, 2, 2],
  [3, 3, 1],
];

const result = organizingContainers(container);
console.log(result); // Output: "Possible"


console.log(organizingContainers([
  [1, 1, 3],
  [2, 2, 2],
  [3, 3, 1],
  ]));

module.exports = organizingContainers;