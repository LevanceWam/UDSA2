const MinHeap = require('./minHeap');
const minHeap = new MinHeap();

class MinPriorityHeap{
    constructor(){}

    add(key, value){
        minHeap.insert(key, value);
    }

    remove(){
        minHeap.remove()
    }

    isEmpty(){
        minHeap.remove();
    }
}