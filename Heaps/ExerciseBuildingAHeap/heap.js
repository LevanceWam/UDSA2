const _array = new WeakMap();

class Heap {
    constructor(){
        _array.set(this, []);
    }

    insert(value){
        if(_array.get(this).length == 0) _array.get(this).push(value);
    }

    getHeap(){
        console.log(_array.get(this))
    }
}

const heap = new Heap();

heap.insert(5);
heap.getHeap();