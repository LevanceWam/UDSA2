class GraphNode{
    constructor(label){
        this.label = label
    }

    toString(){
        return this.label;
    }
}
class Edge{
    constructor(from, to, weight){
        this.from = from;
        this.to = to;
        this.weight = weight;
    }

    toString(){
        return this.to.label;
    }
}

class WeightGraph {
    constructor(){
        this.map = new Map();
        this.adjacencyList = new Map()
    }

    addNode(label){
        let newNode = new GraphNode(label);

        if(!this.map.has(label)) this.map.set(label, newNode);
        if(!this.adjacencyList.has(label)) this.adjacencyList.set(newNode, []);
    }

    addEdge(from, to, weight){
        let fromNode = this.map.get(from);
        let toNode = this.map.get(to);

        if (fromNode == null || toNode == null) throw new Error('This starting node does not exist.');

        // Making the connection on both nodes 
        this.adjacencyList.get(fromNode).push(new Edge(fromNode, toNode, weight));
        this.adjacencyList.get(toNode).push(new Edge(toNode, fromNode, weight));
    }

    print(){
        /**
         * We need a simple and clean way to show to the connected nodes 
         * so we are going to loop over the adjencylist keys and print out all of their connections
         */
        for(let source of this.adjacencyList.keys()){
            // this returns the array that is stored in the adjencylist
            let targets = this.adjacencyList.get(source);

            // next we check so see if the array length is 0 if it is not then we are going to 
            // print the key and the array with all of the nodes that it is connected too
            if(!targets.length == 0){
                console.log(source + ' is connected to '+ targets);
            }
        }
    }
}

let graph = new WeightGraph();

graph.addNode('a');
graph.addNode('b');
graph.addNode('c');

graph.addEdge('a', 'b', 1);
graph.addEdge('a', 'c', 2);

graph.print();
