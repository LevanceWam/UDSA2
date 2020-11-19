const Heap = require('./heap');
const heap = new Heap();

class PriorityQueue{
    constructor(){
    }

    add(item){
        heap.insert(item);
    }

    remove(){
        return heap.remove();
    }

    isEmpty(){
        return heap.isEmpty();
    }
}
