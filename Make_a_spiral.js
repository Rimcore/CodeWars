//Задача "Make a spiral" https://www.codewars.com/kata/534e01fbbb17187c7e0000c6

var spiralize = function (s) {
  function rotate(arr) {
    let re = Array(s).fill().map(a => Array(s).fill(0));
    for (let i = 0; i < s; i++) {
      for (let j = 0; j < s; j++) {
        re[i][j] = arr[j][s-i-1];
      }
    }
    return re;
  }

  let result = Array(s).fill().map(a => Array(s).fill(0));
  let startCol = 0;
  let endCol = s;
  let row = 0;
  for (let i = -3; i < s-3; i++) {
    if (i % 4 == 0) { endCol -= 2; }
    if (((i + 3) % 4 == 0) && (i > 0)) { row += 2; }
    if (((i + 2) % 4 == 0) && (i > 0)) { startCol += 2; }
    result[row].fill(1, startCol, endCol);
    result = rotate(result);
  }

  while (result[1][0] != 0) {
    result = rotate(result);
  }

  return result;
}