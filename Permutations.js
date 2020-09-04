// Задача "Permutations" https://www.codewars.com/kata/5254ca2719453dcc0b00027d

function permutations(str) {
  const rotate = s => {
    let res = [];
    for (let i = 0; i < s.length; i++) {
      s = s.slice(1) + s[0];
      if (s.length>2) {
        res = res.concat((rotate(s.slice(1)).map(v => s[0]+v)));
      } else {
        res.push(s);
      }
    }
    return res;
  }
  return rotate(str).sort().filter((v,i,a) => v!=a[i+1]);
}