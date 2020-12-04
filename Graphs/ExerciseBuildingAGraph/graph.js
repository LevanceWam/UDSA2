// private class for the graph nodes not accessible through
class GraphNode {
    constructor(label){
        this.label = label
    }

    // Overriding the toString method to print only the label and not the graphNode object 
    toString(){
        return this.label;
    }
}


class Graph{
    constructor(){
        this.map = new Map();
        this.adjencyList = new Map();
    }

    addNode(label){
        let newNode = new GraphNode(label);

        // checking to see if the map has this label already if not we are going to create one
        // we are doing the same with the adjecency list but we are going to add an array for when we go to connect the nodes in the next method 
        if(!this.map.has(label)){
            this.map.set(label, newNode);
        }
        if(!this.adjencyList.has(label)){
            this.adjencyList.set(newNode, []);
        }

    }

    // Making the connection between 2 nodes
    addEdge(from, to){
        let fromNode = this.map.get(from);
        if (fromNode == null) throw new Error('This node does not exist.');

        let toNode = this.map.get(to);
        if (toNode == null) throw new Error('This node does not exist.');

        /**
         * Here we are getting the key that has access to the array
         * once we have the array we are going to push the node we want to connect the fromNode into the array
         */
        this.adjencyList.get(fromNode).push(toNode);
        // this.adjencyList.get(toNode).add(fromNode) this is for the undirected graph to link it from the other nodes side like facebook
    }

    print(){
        /**
         * We need a simple and clean way to show to the connected nodes 
         * so we are going to loop over the adjencylist keys and print out all of their connections
         */
        for(let source of this.adjencyList.keys()){
            // this returns the array that is stored in the adjencylist
            let targets = this.adjencyList.get(source);

            // next we check so see if the array length is 0 if it is not then we are going to 
            // print the key and the array with all of the nodes that it is connected too
            if(!targets.length == 0){
                console.log(source + ' is connected to '+ targets);
            }
        }
    }
}

let graph = new Graph();

graph.addNode('a');
graph.addNode('b');
graph.addNode('c');
graph.addNode('d');

graph.addEdge('a','b');
graph.addEdge('a','c');
graph.addEdge('a','d');
graph.addEdge('b','c');

graph.print();