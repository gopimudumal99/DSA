const depthFirstPrint = (graph, source) => {
    //initialize the stack with starting node
    const stack = [source];

    while (stack.length > 0) { 
      let current =  stack.pop()
        console.log(current)
        for (let neighbour of graph[current]) { 
            stack.push(neighbour)
        }
    }
};

const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f:[]
}

depthFirstPrint(graph, 'a');

//expected output: abdfce


// +++++for || Recursive || Methode++++++ 
console.log("Recurcive methode")
const depthFirstPrintRecurrive = (graph1, source) => {
  //initialize the stack with starting node
  console.log(source);
    for (let neighbour of graph1[source]) {
      depthFirstPrintRecurrive(graph1,neighbour)
  }
};
const graph1 = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};
depthFirstPrintRecurrive(graph1, "a"); // ountput abdfce