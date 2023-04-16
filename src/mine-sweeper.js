const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  function countNeighbours(x, y) {
    let mines = 0
    if (y > 0 && matrix[x][y - 1]) {
      mines += 1
    }
    if (y + 1 < matrix[0].length && matrix[x][y + 1]) {
      mines += 1
    }
    if (x > 0 && y > 0 && matrix[x - 1][y - 1]) {
      mines += 1
    }
    if (x > 0 && matrix[x - 1][y]) {
      mines += 1
    }
    if (x > 0 && y < matrix[0].length && matrix[x - 1][y + 1]) {
      mines += 1
    }
    if (x + 1 < matrix.length && y > 0 && matrix[x + 1][y - 1]) {
      mines += 1
    }
    if (x + 1 < matrix.length && matrix[x + 1][y ]) {
      mines += 1
    }
    if (x + 1 < matrix.length && y + 1 < matrix[0].length && matrix[x + 1][y + 1]) {
      mines += 1
    }
    return mines
  }

  const numbersMatrix = []
  for (let i = 0; i < matrix.length; i++) {
    const row = []
    for (let j = 0; j < matrix[i].length; j++) {
      const mines = countNeighbours(i, j)
      row.push(mines)
    }
    numbersMatrix.push(row)
  }
  
  return numbersMatrix
}

module.exports = {
  minesweeper
};
