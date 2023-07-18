class Graph {
    constructor() {
      this.vertices = new Map();
    }
  
    addVertex(vertex) {
      this.vertices.set(vertex, []);
    }
  
    addEdge(vertex1, vertex2) {
      if (!this.vertices.has(vertex1) || !this.vertices.has(vertex2)) {
        throw new Error('Vertex does not exist in the graph');
      }
  
      this.vertices.get(vertex1).push(vertex2);
      this.vertices.get(vertex2).push(vertex1);
    }
  
    depthFirstSearch(startVertex) {
      if (!this.vertices.has(startVertex)) {
        throw new Error('Vertex does not exist in the graph');
      }
  
      const visited = new Set();
      this._dfs(startVertex, visited);
    }
  
    _dfs(vertex, visited) {
      visited.add(vertex);
      console.log(vertex);
  
      const neighbors = this.vertices.get(vertex);
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          this._dfs(neighbor, visited);
        }
      }
    }
  }
  
  const graph = new Graph();
  graph.addVertex('A');
  graph.addVertex('B');
  graph.addVertex('C');
  graph.addVertex('D');
  graph.addVertex('E');
  
  graph.addEdge('A', 'B');
  graph.addEdge('A', 'C');
  graph.addEdge('B', 'D');
  graph.addEdge('D', 'E');
  
  graph.depthFirstSearch('A');
  







  