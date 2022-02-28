const connectComponentIsCount = (graph) => {
  let count = 0;
  const visited = new Set();
  for (let node in graph) {
    if (explore(graph, node, visited) === true) {
      count++;
    }
  }
  return count;
};


const explore = (graph, current, visited) => {
  if (visited.has(String(current))) return false;
  visited.add(String(current));

  for (let neibour of graph[current]) {
    explore(graph, neibour, visited);
  }

  return true;
};


const graph = {
  0: [0, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2],
};

const graph1 = {
  3: [],
  4: [6],
  6: [4, 5, 7, 8],
  8: [6],
  7: [6],
  5: [6],
  1: [2],
  2: [1],
};

console.log(connectComponentIsCount(graph)); //2
console.log(connectComponentIsCount(graph1)); //3
