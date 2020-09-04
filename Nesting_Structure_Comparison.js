// Задача "Nesting Structure Comparison" https://www.codewars.com/kata/520446778469526ec0000001

Array.prototype.sameStructureAs = function (other) {
  re = true;
  if (this.length != other.length) {
    re = false;
  } else {
    for (let i = 0; i < this.length; i++) {
      let a = Array.isArray(this[i]);
      let b = Array.isArray(other[i]);
      if ( a&&b ) {
        re = re && this[i].sameStructureAs(other[i]);
      } else if (!a&&b || a&&!b) {
        re = false;
      }
    }
  }
  return re;
}