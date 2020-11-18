const _array = new WeakMap();
const bubbleUp = Symbol();
const bubbleDown = Symbol();
const getLength = Symbol();
const swap = Symbol();
const parentNode = Symbol();
const leftChildIndex = Symbol();
const rightChildIndex = Symbol();
const leftChild = Symbol();
const rightChild = Symbol();
const largerChildIndex = Symbol();
const isValidParent = Symbol();



class Heap {
    constructor(){
        // We don't want outside access to the array should not be accessible 
        _array.set(this, []);
        // we are going to use size to keep track of the number of items in the heap
        this.size = 0;
    }

    insert(value){
        // We want to store the value in the next available spot 
        // so we will have size as a index counter and we are going to increment it everytime we insert a new value
        _array.get(this)[this.size++] = value;

        // get returned value from here
        this[bubbleUp]();

    }

    remove(){
        if(this.isEmpty()) throw new Error('Heap is empty')

        // we are setting the last node to the root of the heap and decrementing the size 
        _array.get(this)[0] = _array.get(this)[--this.size];

        this[bubbleDown]();
    }

    [bubbleUp](){
        /**
         * if the item is greater than the parent
         * that means we should bubble up this item until it is in the right position
         */ 

         // This gives us the exact index of an item
        let index = this.size - 1;

        /**
         * While the index is greater than 0 and if the item at the current index is greater than its 
         * parent item we are going to have to swap the items until they are at the right position
         */
        while (index > 0 && _array.get(this)[index] > _array.get(this)[this[parentNode](index)]){
            this[swap](index, this[parentNode](index));
            index = this[parentNode](index);
        }

    }

    [bubbleDown](){
        let index = 0;
        while(index <= this.size && !this[isValidParent](index)){
            let largerChild = this[largerChildIndex](index);
            this[swap](index, largerChild);
            index = largerChild;
        }   
    }

    [largerChildIndex](index){
        return (this[leftChild](index) > this[rightChild](index)) ?
        this[leftChildIndex](index):
        this[rightChildIndex](index);
    }

    [isValidParent](index){
        return _array.get(this)[index] >= this[leftChild](index) && 
        _array.get(this)[index] >= this[rightChild](index);
    }

    [rightChild](index){
        return  _array.get(this)[this[rightChildIndex](index)] 
    }

    [leftChild](index){
        return  _array.get(this)[this[leftChildIndex](index)] 
    }

    [leftChildIndex](index){
        return index * 2 + 1;
    }

    [rightChildIndex](index){
        return index * 2 + 2;
    }

    getHeap(){
        console.log(_array.get(this))
    }

    isEmpty(){
        return this.size == 0;
    }

    [parentNode](index){
        // this is the formula to find the parent node 
        // we are using math.floor here because some of the numbers return a float and arrays don't use floats as indexes
        return Math.floor((index -1) / 2) ;
    }

    [swap](first, second){
        // This swap function switches the value of the child node with the parent node if the parent node is less than child 
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
heap.remove();
heap.getHeap();
