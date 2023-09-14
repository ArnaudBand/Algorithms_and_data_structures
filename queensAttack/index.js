function queensAttack(n, k, r_q, c_q, obstacles) {
  // Initialize counts for available squares in each direction
  let up = n - r_q;
  let right = n - c_q;
  let down = r_q - 1;
  let left = c_q - 1;

  // Initialize counts for available squares in each diagonal direction
  let upLeftDiagonal = Math.min(up, left);
  let upRightDiagonal = n - Math.max(c_q, r_q);
  let downLeftDiagonal = Math.min(c_q, r_q) - 1;
  let downRightDiagonal = Math.min(r_q - 1, n - c_q);

  for (let i of Array.from({ length: k }, (value, index) => index)) {
      let { 0: r_o, 1: c_o } = obstacles[i];

      // Update counts based on the direction of movement
      r_o === r_q &&
          (c_o > c_q
              ? (up = Math.min(up, c_o - c_q - 1))
              : (down = Math.min(down, c_q - c_o - 1)));

      c_o === c_q &&
          (r_o > r_q
              ? (right = Math.min(right, r_o - r_q - 1))
              : (left = Math.min(left, r_q - r_o - 1)));

      Math.abs(c_o - c_q) === Math.abs(r_o - r_q) &&
          (c_o > c_q && r_o > r_q && (upRightDiagonal = Math.min(upRightDiagonal, c_o - c_q - 1)),
              c_o > c_q &&
              r_o < r_q &&
              (downRightDiagonal = Math.min(downRightDiagonal, c_o - c_q - 1)),
              c_o < c_q && r_o > r_q && (upLeftDiagonal = Math.min(upLeftDiagonal, c_q - c_o - 1)),
              c_o < c_q &&
              r_o < r_q &&
              (downLeftDiagonal = Math.min(downLeftDiagonal, c_q - c_o - 1)));
  }

  // Calculate and return the total count of attackable squares
  return right + left + up + down + downLeftDiagonal + upLeftDiagonal + downRightDiagonal + upRightDiagonal;
}


module.exports = queensAttack;