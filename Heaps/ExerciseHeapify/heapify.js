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
maxHeap.heapify(numbers);
console.log(numbers);

