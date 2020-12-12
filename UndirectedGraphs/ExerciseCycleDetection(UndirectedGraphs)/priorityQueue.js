const _items = new WeakMap();
const shiftItems = Symbol()

class PriorityQueue {
    constructor(){
        _items.set(this, []);
        this.count = 0;
    }

    add(item){
        // our private method to determine the index of the new item 
        let i = this[shiftItems](item);
    
        // storing the item at the index number we calculated from the private method
        _items.get(this)[i] = item;
        this.count++;
    }

    [shiftItems](item){
        // we created a variable outside of the loop to store the value of i because we lose the value of i when we are done with the for loop
        let i;
        
        for(i = this.count-1; i >= 0; i--){
            /**
             * if the current element at this index is greater than the new item we are going to increment the elements index by 1 and store the element at the new index
             * by shifting the element up we can now overwrite the old index with a new value 
             */
            if(_items.get(this)[i] > item) _items.get(this)[i + 1] = _items.get(this)[i];
            else break;
        }

        return i + 1;
    }

    remove(){
        this.count--;
        return  _items.get(this).shift();
    }

    getPQ(){
        return _items.get(this);
    }

    isEmpty(){
        return this.count == 0;
    }
}

module.exports = PriorityQueue;