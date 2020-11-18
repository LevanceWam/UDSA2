const Heap = require('./heap');
const heap = new Heap();

let numbers = [5, 3, 10, 1, 4, 2]

for (let num of numbers){
   heap.insert(num)
}

// prints in descending order 
// while (!heap.isEmpty()){
//     console.log(heap.remove());
// }

// sorts the list in descending order 
// for (let i = 0; i < numbers.length; i++){
//     numbers[i] = heap.remove();
// }

// sorts the list in ascending order
for (let i = numbers.length - 1; i >=0; i--){
    numbers[i] = heap.remove();
}

console.log(numbers);