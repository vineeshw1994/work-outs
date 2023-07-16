class Graph {
    constructor(numVertices) {
      this.numVertices = numVertices;
      this.adjMatrix = [];
      
      // Initialize the adjacency matrix with all values set to 0
      for (let i = 0; i < numVertices; i++) {
        this.adjMatrix[i] = [];
        for (let j = 0; j < numVertices; j++) {
          this.adjMatrix[i][j] = 0;
        }
      }
    }
    
    addEdge(source, destination) {
      // Make sure the vertices are within the valid range
      if (source >= 0 && source < this.numVertices && destination >= 0 && destination < this.numVertices) {
        // Since it's an undirected graph, set both cells to 1
        this.adjMatrix[source][destination] = 1;
        this.adjMatrix[destination][source] = 1;
      }
    }
    
   
    
    printGraph() {
      for (let i = 0; i < this.numVertices; i++) {
        let row = "";
        for (let j = 0; j < this.numVertices; j++) {
          row += this.adjMatrix[i][j] + " ";
        }
        console.log(row);
      }
    }
  }
  
  const graph = new Graph(5);
  
  graph.addEdge(0, 1);
  graph.addEdge(0, 4);
  graph.addEdge(1, 2);
  graph.addEdge(1, 3);
  graph.addEdge(1, 4);
  graph.addEdge(2, 3);
  graph.addEdge(3, 4);
  
  graph.printGraph();
  