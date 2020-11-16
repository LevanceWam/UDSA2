const _array = new WeakMap();
const bubbleUp = Symbol();
const bubbleDown = Symbol();
const getLength = Symbol();
const swap = Symbol();
const parentNode = Symbol();


class Heap {
    constructor(){
        // We don't want outside access to the array should not be accessible 
        _array.set(this, []);
        this.size = 0;
    }

    insert(value){
         // push the value into the heap
         _array.get(this)[this.size++] = value;

        // get returned value from here
        this[bubbleUp]();

    }

    [bubbleUp](){
        // we created a place holder to hold the value of the node if it need to be switched.

        /**
         * we need to traverse through the array and check the new value 
         * against the current values in the array
         * if the new value is larger than the value currently occupying the index
         * we are to store the old value in the placeholder and overwrite the index
         * to store the new value
         * finally we are going to set the value of node to whats being stored in the placeholder
         * we continue this process until we hit the end of array
         */ 

        let index = this.size - 1;

        while (index > 0 && _array.get(this)[index] > _array.get(this)[this[parentNode](index)]){
            this[swap](index, this[parentNode](index));
            index = this[parentNode](index);
        }

    }

    getHeap(){
        console.log(_array.get(this))
    }

    isEmpty(){
        // Check to see if the heap is empty.
        return (_array.get(this).length == 0);
    }

    [getLength](){
        // returns the length of the heap 
        return _array.get(this).length;
    }

    [parentNode](index){
        
        return Math.floor((index -1) / 2) ;
    }

    [swap](first, second){
        let temp = _array.get(this)[first];
        _array.get(this)[first] = _array.get(this)[second];
        _array.get(this)[second] = temp;

    }
}

const heap = new Heap();

heap.insert(10);
heap.insert(5);
heap.insert(17);
heap.insert(4);
heap.insert(22);
heap.getHeap();
