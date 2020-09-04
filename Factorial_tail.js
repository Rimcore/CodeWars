// Задача "Factorial tail" https://www.codewars.com/kata/55c4eb777e07c13528000021

function zeroes (base, number) {
  let div = [];
  let fac = {};
  for (let i = 2; i < base+1; i++) {
    if (!(base%i)) { div.push(i) }
  }
  for (let i = 1; i < number+1; i++) {
    let num = i;
    for (let j = 0; j < div.length; j++) {
      let d = div[j];
      while(!(num%d)) {
        num = num / d;
        fac[d] = fac[d]?(fac[d]+1):1;
      }
    }
  }
  let num = 1;
  let cou = 0;
  while(num == 1) {
    num = base;
    for (let j = 0; j < div.length; j++) {
      let d = div[j];
      while(!(num%d) && fac[d]>0) {
        num = num / d;
        fac[d] -= 1;
      }
    }
    if (num == 1) cou++;
  }
  return cou;
}