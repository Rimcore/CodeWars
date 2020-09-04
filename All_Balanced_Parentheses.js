// Задача "All Balanced Parentheses" https://www.codewars.com/kata/5426d7a2c2c7784365000783

function balancedParens(n) {
  let matrix = [];

  function generate(str) {
    if (str.length >= 2 * n) {
      matrix.push(str);
      return;
    }

    const leftCount = str.replace(/\)/g, "").length;
    const rightCount = str.replace(/\(/g, "").length;
    if (leftCount < n) {
      generate(`${str}(`);
    }
    if ((rightCount < n) && (rightCount < leftCount)) {
      generate(`${str})`);
    }
  }

  generate("");
  return matrix;
}