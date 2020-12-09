const PriorityQueue = require('./priorityQueue');
const Stack = require('./stack');
const buildPath = Symbol();

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
class NodeEntry {
    constructor(node, priority){
        this.node = node;
        this.priority = priority;
    }
}
class Path{
    constructor(){
        this.nodes =[];
    }

    add(node){
        this.nodes.push(node);
    }

    toString(){
        return this.nodes.toString();
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

        if (fromNode == null ) throw new Error('This starting node does not exist.');
        if (toNode == null) throw new Error('The node you are trying to connect to does not exist.');

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

            // this returns the array that is stored in the node class 
            let edges = node.getEdges();

            // next we check so see if the array length is 0 if it is not then we are going to 
            // print the key and the array with all of the nodes that it is connected too
            if(!edges.length == 0){
                console.log(node + ' is connected to '+ edges);
            }
        }
    }

    getShortestPath(from, to){
        let fromNode = this.map.get(from);
        let toNode = this.map.get(to);


        if (fromNode == null ) throw new Error('This starting node does not exist.');
        if (toNode == null) throw new Error('The node you are trying to connect to does not exist.');

        const distance = new Map();

        for (let node of this.map.values()){
            distance.set(node,Number.MAX_VALUE)
        }
        //setting the distance from the starting node to itself 
        distance.set(fromNode, 0);

        let previousNodes = new Map();

        //keeping track of visited node.
        const visited = new Set();
        const pq = new PriorityQueue();

        pq.add(new NodeEntry(fromNode), 0);

        while(!pq.isEmpty()){
            let current = pq.remove().node;
            visited.add(current);

            for (let edge of current.getEdges()){
                if(visited.has(edge.to)) continue;

                let newDistance = distance.get(current) + edge.weight;
                if (newDistance < distance.get(edge.to)) {
                    distance.set(edge.to, newDistance);
                    previousNodes.set(edge.to, current);
                    pq.add(new NodeEntry(edge.to, newDistance));
                }
            }
        }

        return this[buildPath](previousNodes, toNode);
    }

    [buildPath](previousNodes, toNode){
        const stack = new Stack();
        stack.push(toNode);
        let previous = previousNodes.get(toNode);

        while (previous != null){
            stack.push(previous);
            previous = previousNodes.get(previous);
        }

        let path = new Path();
        while(!stack.isEmpty()){
            path.add(stack.pop().label)
        }
        
        return path;
    }
}

let graph = new WeightGraph();

graph.addNode('a');
graph.addNode('b');
graph.addNode('c');

graph.addEdge('a', 'b', 1);
graph.addEdge('a', 'c', 10);
graph.addEdge('b', 'c', 2);

let result = graph.getShortestPath('a', 'k');
console.log(result);