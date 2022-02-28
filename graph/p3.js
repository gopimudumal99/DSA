//depth first 
const hasPath = (graph, src, dest) => { 
  if(src === dest) return true
    for (let neighbour of graph[src]) { 
        if (hasPath(graph, neighbour, dest) === true) {
            return true
        }
    }
    return false
}

const graph = {
    f: ["g", "i"],
    g: ["h"],
    h: [],
    i: ["g", "k"],
    j: ["i"],
    k:[]
}
console.log("depth-First-search: ",hasPath(graph, "f", "k"))

// ++++ || breadthFirst || ++++

const hasPath1 = (graph, src, dest) => { 
    let queue = [src]
    while (queue.length > 0) { 
        let current = queue.shift()
        if(current === dest) return true
        for (let neighbour of graph[current]) { 
            queue.push(neighbour)
        }
    }
    return false
}

console.log("Breadth-First-search: ",hasPath1(graph, "f", "k"));