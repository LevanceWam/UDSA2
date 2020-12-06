const _elements = new WeakMap();

class ArrayQueue{
    constructor(){
        _elements.set(this, []);
    }

    enqueue(item){
       return _elements.get(this).push(item)
    }

    dequeue(){
        if (_elements.get(this).length==0) throw new Error('Queue is empty');
        return _elements.get(this).shift();
    }

    peek(){
        if (_elements.get(this).length==0) throw new Error('Queue is empty');
        return _elements.get(this)[0];
    }

    isEmpty(){
        return (_elements.get(this).length==0);
    }

    getQueue(){
        return _elements.get(this);
    }

    length(){
        return _elements.get(this).length;
    }
}

module.exports = ArrayQueue;