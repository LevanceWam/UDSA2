const Heap = require('./heap');
const numbers = [5, 3, 8, 4, 1, 2];

const heapifyAlgorithm= Symbol();
const swap= Symbol();

class MaxHeap {
    constructor(){}

    heapify(array){
        let lastParentIndex = Math.floor(array.length / 2 - 1);
        for(let i = lastParentIndex; i >= 0; i--){
            this[heapifyAlgorithm](array,i);
        }
    }

    getKthLargest(array, k){
        if (array.length == 0) throw new Error('array is empty');
        if (k < 1 || k > array.length) throw new Error('Please insert a valid number');

        const heap = new Heap();

        while(array.length !== 0){
            heap.insert(array.pop());
        }

        while (!heap.isEmpty()){
            array.push(heap.remove());
        }

        let index = k-1;

        return array[index];

    }

    [heapifyAlgorithm](array, index){
        let largerIndex = index;

        let leftIndex = index * 2 + 1;
        if (leftIndex < array.length && 
            array[leftIndex] > array[largerIndex]) {
            largerIndex = leftIndex;
        }

        let rightIndex = index * 2 + 2;
        if (rightIndex < array.length && 
            array[rightIndex] > array[largerIndex]) {
                largerIndex = rightIndex;
        }

        if (index == largerIndex) return;

        this[swap](array, index, largerIndex);
        this[heapifyAlgorithm](array, largerIndex);
    } 
    
    [swap](array,first, second){
        // This swap function switches the value of the child node with the parent node if the parent node is less than child 
        let temp = array[first];
        array[first] = array[second];
        array[second] = temp;
    }
}


const maxHeap = new MaxHeap();
let value = maxHeap.getKthLargest(numbers, 1);

console.log(value);

