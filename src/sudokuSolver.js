const isValidSudoku = (board) => {
  const isValidBlock = (arr) => {
    const count = {};
    arr.forEach((number) => {
      count[number] ? count[number]++ : count[number] = 1;
    });
    for (const key in count) {
      if (count[key] > 1 && key !== '') {
        return false;
      }
    }
    return true;
  };
  for (let i = 0; i < 9; i++) {
    // check rows
    if (isValidBlock(board[i]) === false) {
      return false;
    }
    // check columns
    const column = [];
    for (let j = 0; j < 9; j++) {
      column.push(board[j][i]);
    }
    if (isValidBlock(column) === false) {
      return false;
    }
  }
  // check 3x3
  for (let x = 0; x < 9; x += 3) {
    for (let y = 0; y < 9; y += 3) {
      const block = [];
      for (let i = x; i < x + 3; i++) {
        for (let j = y; j < y + 3; j++) {
          block.push(board[i][j]);
        }
      }
      if (isValidBlock(block) === false) {
        return false;
      }
    }
  }
  return true;
};

export default isValidSudoku;
