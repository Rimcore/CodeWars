// Задача "Objectify a URL Query String" https://www.codewars.com/kata/5286d92ec6b5a9045c000087

function convertQueryToMap(query) {
  if (query.length < 1) { return {};}
  let o = {}
  query.split("&").forEach(el => {
    let q = el.split("=");
    let nm = q[0].split(".");
    let vl = decodeURIComponent(q[1]);
    let fnm = o;
    for (let i = 0; i < nm.length-1; i++) {
      if (!fnm[nm[i]]) {
        fnm[nm[i]] = {};
      }
      fnm = fnm[nm[i]];
    }
    fnm[nm[nm.length-1]] = vl;
  });
  return o;
}