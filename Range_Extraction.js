// Задача "Range Extraction" https://www.codewars.com/kata/51ba717bb08c1cd60f00002f

function solution(l){
  let out = [];
  let range = false;
  let r = [];
  for (let i = 0; i < l.length; i++) {
    if (Math.abs(l[i] - l[i+1]) == 1) {
      if (!range) { r = [];}
      range = true;
      r.push(l[i]);
    } else {
      if (range) {
        if (r.length>1) {
          out.push(`${r[0]}-${l[i]}`);
        } else {
          out.push(`${r[0]},${l[i]}`);
        }
        range = false;
      } else {
        out.push(l[i]);
      }
    }
  }
  return out.join(",");
}