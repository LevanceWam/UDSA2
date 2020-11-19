const _array = new WeakMap();
const bubbleUp = Symbol();
const bubbleDown = Symbol();
const swap = Symbol();
const parentNode = Symbol();
const leftChildIndex = Symbol();
const rightChildIndex = Symbol();
const leftChild = Symbol();
const rightChild = Symbol();
const hasLeftChild = Symbol();
const hasRightChild = Symbol();
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
        //if the heap is empty notify the user.
        if(this.isEmpty()) throw new Error('Heap is empty')

        // we are going to store the old root so we can return it later
        let root = _array.get(this)[0];

        // we are setting the last node to the root of the heap and decrementing the size 
        _array.get(this)[0] = _array.get(this)[--this.size];

        // will move the node from the last index to the correct spot in the heap
        this[bubbleDown]();

        // we have to remove the last node that was moved to the root node before we started bubbling 
        _array.get(this).pop();

        return root;
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
        /**
         * if the item is less than the children
         * that means we should bubble down this item until it is in the right position
         */

        // we created this variable to keep track of where we are in the array
        // after every iteration it will go up and we want to compare it to the size so it know when to stop
        let index = 0;

        // while index <= size and isValidParent is false we are going to swap the current 
        // index with the larger index and then copy the index of the larger child into the current index to continue from there 
        while(index <= this.size && !this[isValidParent](index)){
            let largerChild = this[largerChildIndex](index);
            this[swap](index, largerChild);
            index = largerChild;
        }   
    }

    [largerChildIndex](index){
        // Here we are going to see if there is a left child if not return the index
        if (!this[hasLeftChild](index)) return index;

        // check to see if there is a right child if not return the leftchild because it is the greater one.
        if (!this[hasRightChild](index)) return this[leftChildIndex](index);

        // if the left and right child are here we are going to return the larger value 
        return (this[leftChild](index) > this[rightChild](index)) ?
        this[leftChildIndex](index):
        this[rightChildIndex](index);
    }

    [hasLeftChild](index){
        // Helper method to check to see if we have a right child 
        return this[leftChildIndex](index) <= this.size;
    }

    [hasRightChild](index){
        // Helper method to check to see if we have a right child 
        return this[rightChildIndex](index) <= this.size;
    }

    [isValidParent](index){
        // if we do not have a left child this means the node is valid 
        if (!this[hasLeftChild](index)) return true;

        // this will store the value of the node that is greater the current node or the left child
        let isValid = _array.get(this)[index] >= this[leftChild](index);

        // we want to make sure that the value of the current node is greater than or equal to its right child 
        if (this[hasRightChild](index)) isValid &= _array.get(this)[index] >= this[rightChild](index);

        // return the value 
        return isValid;
    }

    [rightChild](index){
        // Helper method that returns true or false on whether this is the right child of a parent index
        return _array.get(this)[this[rightChildIndex](index)];
    }

    [leftChild](index){
        // Helper method that returns true or false on whether this is the left child of a parent index
        return _array.get(this)[this[leftChildIndex](index)];
    }

    [leftChildIndex](index){
        // formula for the calculating the parent index left child index
        return index * 2 + 1;
    }

    [rightChildIndex](index){
        // formula for the calculating the parent index right child index
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

module.exports = Heap;
