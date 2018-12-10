function isSolved(board) {
  let empty;
  for (let i = 0; i < board.length; i++) {
    for (let m = 0; m < board[i].length; m++) {
      if (board[i][m] === 0) {
        empty = true;
      }
    }
  }

  if (board[0][0] === 1 && board[1][1] === 1 && board[2][2] === 1) {
    return 1;
  } else if (board[0][1] === 1 && board[1][1] === 1 && board[2][1] === 1) {
    return 1;
  } else if (board[0][2] === 1 && board[1][1] === 1 && board[2][0] === 1) {
    return 1;
  } else if (board[0][0] === 1 && board[0][1] === 1 && board[0][2] === 1) {
    return 1;
  } else if (board[1][0] === 1 && board[1][1] === 1 && board[1][2] === 1) {
    return 1;
  } else if (board[2][0] === 1 && board[2][1] === 1 && board[2][2] === 1) {
    return 1;
  } else if (board[0][0] === 1 && board[1][0] === 1 && board[2][0] === 1) {
    return 1;
  } else if (board[0][1] === 1 && board[1][1] === 1 && board[2][1] === 1) {
    return 1;
  } else if (board[0][2] === 1 && board[1][2] === 1 && board[2][2] === 1) {
    return 1;
  } else if (board[0][0] === 2 && board[1][1] === 2 && board[2][2] === 2) {
    return 2;
  } else if (board[0][1] === 2 && board[1][1] === 2 && board[2][1] === 2) {
    return 2;
  } else if (board[0][2] === 2 && board[1][1] === 2 && board[2][0] === 2) {
    return 2;
  } else if (board[0][0] === 2 && board[0][1] === 2 && board[0][2] === 2) {
    return 2;
  } else if (board[1][0] === 2 && board[1][1] === 2 && board[1][2] === 2) {
    return 2;
  } else if (board[2][0] === 2 && board[2][1] === 2 && board[2][2] === 2) {
    return 2;
  } else if (board[0][0] === 2 && board[1][0] === 2 && board[2][0] === 2) {
    return 2;
  } else if (board[0][1] === 2 && board[1][1] === 2 && board[2][1] === 2) {
    return 2;
  } else if (board[0][2] === 2 && board[1][2] === 2 && board[2][2] === 2) {
    return 2;
  } else if (empty === true) {
    return -1;
  } else {
    return 0;
  }
}
