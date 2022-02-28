//Undirected path ----> undirected graph as always cyclic graph and make a set for cyclic graph

const unDirectedGraphPath = (edges, nodeA, nodeB) => {
  const graph = bundle(edges);
  return hasPath(graph, nodeA, nodeB, new Set());
};

const hasPath = (graph, src, dest, visited) => {
  if (src === dest) return true;
  if (visited.has(src)) return false;
  visited.add(src);
  for (let neighbour of graph[src]) {
    if (hasPath(graph, neighbour, dest, visited) == true) return true;
  }
  return false;
};

const bundle = (edges) => {
  const graph = {};
  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};

const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

// console.log(bundle(edges));
// console.log(unDirectedPath(edges,'j','l'));
console.log(unDirectedGraphPath(edges, "j", "l"));
