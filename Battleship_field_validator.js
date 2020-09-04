// Задача "Battleship field validator" https://www.codewars.com/kata/52bb6539a4cf1b12d90005b7

function validateBattlefield(f) {
  f.push([0,0,0,0,0,0,0,0,0,0]);
  f.unshift([0,0,0,0,0,0,0,0,0,0]);
  f.forEach(e => { e.push(0); e.unshift(0); })
  let ships = [4,3,2,1];
  const che = (a,i,j) => {
    return a[i][j]&&!a[i-1][j-1]&&!a[i-1][j+1]&&!a[i+1][j-1]&&!a[i+1][j+1];
  }
  for (let i = 1; i < f.length-1; i++) {
    for (let j = 1; j < f[i].length-1; j++) {
      if (che(f,i,j)) {
        if (che(f,i+1,j)&&che(f,i+2,j)&&che(f,i+3,j)) {
          ships[3] -= 1;
          f[i][j] = f[i+1][j] = f[i+2][j] = f[i+3][j] = 0;
        } else if (che(f,i,j+1)&&che(f,i,j+2)&&che(f,i,j+3)) {
          ships[3] -= 1;
          f[i][j] = f[i][j+1] = f[i][j+2] = f[i][j+3] = 0;
        } else if (che(f,i+1,j)&&che(f,i+2,j)) {
          ships[2] -= 1;
          f[i][j] = f[i+1][j] = f[i+2][j] = 0;
        } else if (che(f,i,j+1)&&che(f,i,j+2)){
          ships[2] -= 1;
          f[i][j] = f[i][j+1] = f[i][j+2] = 0;
        } else if (che(f,i+1,j)) {
          ships[1] -= 1;
          f[i][j] = f[i+1][j] = 0;
        } else if (che(f,i,j+1)){
          ships[1] -= 1;
          f[i][j] = f[i][j+1] = 0;
        }
        else {
          ships[0] -= 1;
          f[i][j] = 0;
        }
      }
    }
  }
  return !ships.some(v => v!=0);
}