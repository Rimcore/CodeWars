// Задача "Determining if a graph has a solution" https://www.codewars.com/kata/53223653a191940f2b000877

function solve_graph(start, end, arcs) {
  if (start == end) return true;
  for (let i = 0; i < arcs.length; i++) {
    const el = arcs[i];
    if (el.start == start) {
      if (el.end == end) { return true; }
      let newArcs = arcs.slice();
      newArcs.splice(i, 1);
      let newStart = el.end;
      if (solve_graph(newStart, end, newArcs)) {
        return true;
      }
    }
  }
  return false;
}