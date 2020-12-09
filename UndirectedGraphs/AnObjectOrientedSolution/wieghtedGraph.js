class GraphNode{
    constructor(label){
        this.label = label
        this.edges = [];
    }

    addEdge(to, weight){
        this.edges.push(new Edge(this,to,weight))
    }

    getEdges(){
        return this.edges;
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
        return this.from.label + ' -> ' + this.to.label;
    }
}

class WeightGraph {
    constructor(){
        this.map = new Map();
    }

    addNode(label){
        if(!this.map.has(label)) this.map.set(label, new GraphNode(label));
    }

    addEdge(from, to, weight){
        let fromNode = this.map.get(from);
        let toNode = this.map.get(to);

        if (fromNode == null || toNode == null) throw new Error('This starting node does not exist.');

        // Making the connection on both nodes 
        fromNode.addEdge(toNode, weight);
        toNode.addEdge(fromNode, weight);
    }

    print(){
        /**
         * We need a simple and clean way to show to the connected nodes 
         * so we are going to loop over the adjencylist keys and print out all of their connections
         */
        for(let node of this.map.values()){

            // console.log('node from for loop: ', node)
            // this returns the array that is stored in the adjencylist
            let edges = node.getEdges();

            // next we check so see if the array length is 0 if it is not then we are going to 
            // print the key and the array with all of the nodes that it is connected too
            if(!edges.length == 0){
                console.log(node + ' is connected to '+ edges);
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
