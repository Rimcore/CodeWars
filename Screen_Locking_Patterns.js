// Задача "Screen Locking Patterns" https://www.codewars.com/kata/585894545a8a07255e0002f1

function countPatternsFrom(firstDot, length) {
  if (length < 1 ||
      length > 9) {
    return 0;
  }

  const dots = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
  const rules = {
    "AC" : "B",
    "AI" : "E",
    "AG" : "D",
    "BH" : "E",
    "CA" : "B",
    "CG" : "E",
    "CI" : "F",
    "DF" : "E",
    "FD" : "E",
    "GA" : "D",
    "GC" : "E",
    "GI" : "H",
    "HB" : "E",
    "IA" : "E",
    "IC" : "F",
    "IG" : "H"
  }
  let count = 0;

  function isLegalMove(arr, curDot) {
    let index = arr.slice(-1) + curDot;
    if (rules.hasOwnProperty(index) &&
        arr.indexOf(rules[index]) < 0) {
      return false;
    }
    return true;
  }

  function genPath(arr) {
    if (arr.length >= length) {
      count++;
      return;
    }
    for (let i = 0; i < dots.length; i++) {
      let temp = arr.slice();
      let curDot = dots[i];
      if (temp.indexOf(curDot) < 0 &&
          isLegalMove(temp, curDot)) {
        temp.push(curDot);
        genPath(temp);
      }
    }
  }

  genPath([firstDot]);
  return count;
}