class Graph {
    constructor() {
        this.adjacencyList = {}
    }
    addVertex(name) {
        if(!this.adjacencyList[name]) this.adjacencyList[name] = [];      
    }
    addEdge(v1, v2) {
        if(!v1 || !v2) return undefined;
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(v1,v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v=>v!==v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v=>v!==v1);
    }
    removeVertex(vertex) {
        while(this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex,adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }
    depthFirstRecursive(Vertex) {
        var returnArr = [];
        var visited = {};
        var thisAJ = this.adjacencyList;
        function getVisited(vertex) {
            if(thisAJ[vertex].length == 0) return;
            returnArr.push(vertex);
            visited[vertex] = true;
            for(var el of thisAJ[vertex]) {
                if(visited[el]!= true) getVisited(el);
            }
        }
        getVisited(Vertex);
        return returnArr;
    }
    depthFirstIterative(start) {
        let returnArr = [];
        let stack = [start];
        let visited = {};
        let vertex;

        visited[start] = true;
        while(stack.length) {
            vertex = stack.pop();
            returnArr.push(vertex);
            for(let el of this.adjacencyList[vertex]) {
                if(!visited[el]) {    
                    visited[el] = true;
                    stack.push(el);
                }
            }
        }
        return returnArr;
    }
    breathFirst(start) {
        let returnArr = [];
        let queue = [start];
        let visited = {};
        let vertex;

        visited[start] = true;
        while(queue.length) {
            vertex = queue.shift();
            returnArr.push(vertex);
            for(let el of this.adjacencyList[vertex]) {
                if(!visited[el]) {    
                    visited[el] = true;
                    queue.push(el);
                }
            }
        }
        return returnArr;
    }
}
var g = new Graph();
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")
console.log(g.breathFirst("A"));