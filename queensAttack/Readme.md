You will be given a square chess board with one queen and a number of obstacles placed on it. Determine how many squares the queen can attack.

A queen is standing on an `n*n` chessboard. The chess board's rows are numbered from `1` to `n`, going from bottom to top. Its columns are numbered from `1` to `n`, going from left to right. Each square is referenced by a tuple,`(r, c)` , describing the row, `r`, and column, `c`, where the square is located.

The queen is standing at position `(rQ, cQ)`. In a single move, she can attack any square in any of the eight directions (left, right, up, down, and the four diagonals). In the diagram below, the green circles denote all the cells the queen can attack from `4 * 4`:

![](https://s3.amazonaws.com/hr-challenge-images/0/1485426500-a4039ebb00-chess1.png)

There are obstacles on the chessboard, each preventing the queen from attacking any square beyond it on that path. For example, an obstacle at location `(3, 5)` in the diagram above prevents the queen from attacking cells `(3, 5)`, `(2, 6)`, `(1, 7)`and :

![](https://s3.amazonaws.com/hr-challenge-images/0/1485459132-3fdc1f1ca3-chess_4_.png)

Given the queen's position and the locations of all the obstacles, find and print the number of squares the queen can attack from her position at `(rQ, cQ)`. In the board above, there are 24 such squares.