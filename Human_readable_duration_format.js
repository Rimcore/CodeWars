// Задача "Human readable duration format" https://www.codewars.com/kata/52742f58faf5485cae000b9a

function formatDuration (time) {
  let date = [
    {nm : "second", val : time % 60},
    {nm : "minute", val : Math.floor(time/60) % 60 },
    {nm : "hour", val : Math.floor(time/3600) % 24},
    {nm : "day", val : Math.floor(time/3600/24) % 365},
    {nm : "year", val : Math.floor(time/3600/24/365)}
  ]
  let str = time>0?"":"now";
  let and = "";
  date.forEach( e => {
    if (e.val>1) {
      str = `${e.val} ${e.nm}s${and}${str}`;
      and = (and==" and "||and==", "?", ":" and ");
    }
    else if (e.val>0) {
      str = `${e.val} ${e.nm}${and}${str}`;
      and = (and==" and "||and==", "?", ":" and ");
    }
  })
  return str;
}