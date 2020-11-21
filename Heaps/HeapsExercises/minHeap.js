class Node{
    constructor(key=null, value=null){
        this.key = key;
        this.value = value;
    }
}

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


class MinHeap{
    constructor(){
        this.array = [];
        this.size = 0;
    }

    insert(key, value){
        let item = new Node(key, value);

        this.array[this.size++] = item;

        this[bubbleUp]();
    }

    remove(){
        if(this.isEmpty()) throw new Error('The heap is empty');

        let root = this.array[0];

        this.array[0] = this.array[--this.size];

        this[bubbleDown]();

        this.array.pop();
        return root;
    }

    getHeap(){
        // This returns all of the items in the heap.
        console.log(this.array)
    }

    isEmpty(){
        return this.array.length == 0;
    }

    [bubbleUp](){
        let index = this.size - 1;

        while(index > 0 && this.array[index].key < this.array[this[parentNode](index)].key){
            this[swap](index,this[parentNode](index));
            index = this[parentNode](index);
        }
    }

    [parentNode](index){
        // this is the formula to find the parent node 
        // we are using math.floor here because some of the numbers return a float and arrays don't use floats as indexes
        return Math.floor((index -1) / 2) ;
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

    [isValidParent](index){
        // if we do not have a left child this means the node is valid 
        if (!this[hasLeftChild](index)) return true;

        // this will store the value of the node that is greater the current node or the left child
        let isValid = this.array[index].key >= this[leftChild](index).key;

        // we want to make sure that the value of the current node is greater than or equal to its right child 
        if (this[hasRightChild](index)) isValid &= this.array[index].key >= this[rightChild](index).key;

        // return the value 
        return isValid;
    }

    [largerChildIndex](index){
        // Here we are going to see if there is a left child if not return the index
        if (!this[hasLeftChild](index)) return index;

        // check to see if there is a right child if not return the leftchild because it is the greater one.
        if (!this[hasRightChild](index)) return this[leftChildIndex](index);

        // if the left and right child are here we are going to return the larger value 
        return (this[leftChild](index) < this[rightChild](index)) ?
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

    [leftChildIndex](index){
        // formula for the calculating the parent index left child index
        return index * 2 + 1;
    }

    [rightChildIndex](index){
        // formula for the calculating the parent index right child index
        return index * 2 + 2;
    }

    [rightChild](index){
        // Helper method that returns true or false on whether this is the right child of a parent index
        return this.array[this[rightChildIndex](index)].key;
    }

    [leftChild](index){
        // Helper method that returns true or false on whether this is the left child of a parent index
        return this.array[this[leftChildIndex](index)].key;
    }

    [swap](first, second){
        // This swap function switches the value of the child node with the parent node if the parent node is less than child 
        let temp = this.array[first];
        this.array[first] = this.array[second];
        this.array[second] = temp;

    }
}

module.exports = MinHeap;