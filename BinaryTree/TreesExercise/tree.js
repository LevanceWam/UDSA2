class Node{
    constructor(value){
        this.value = value;
        this.leftChild = null;
        this.rightChild = null;
    }
}

const PreOrderAlgorithm = Symbol();
const InOrderAlgorithm = Symbol();
const PostOrderAlgorithm = Symbol();
const heightAlgorithm = Symbol();
const minimumAlgorithm = Symbol();
const maximumAlgorithm = Symbol();
const equalsAlgorithm = Symbol();
const isBinaryAlgorithm = Symbol();
const kDistanceAlgorithm = Symbol();
const countLeavesAlgorithm = Symbol();
const isLeaf = Symbol();
const containsAlgorithm = Symbol();
const areSiblingAlgorithm = Symbol();
const getAncestorsAlgorithm = Symbol();

class Tree {
     constructor(root=null){
         this.root = root;
         this.size = 0;
     }

     insert(value){
        let newNode = new Node(value);
        this.size++;
        

         if(this.root == null){
             this.root = newNode;
             return;
         }

         let current = this.root;
         
         while (true) {
             if (value < current.value){
                 if (current.leftChild == null){
                     current.leftChild = newNode;
                     break;
                 }
                 current = current.leftChild;
             } else{
                if (current.rightChild == null){
                    current.rightChild = newNode;
                    break;
                }
                 current = current.rightChild;
             }
         }
     }

     find(value){
         let current = this.root;

         while(current != null){
             if(value < current.value) current = current.leftChild;
             else if (value > current.value) current = current.rightChild;
             else return true;   
         }

         return false;
     }

     traversePreOrder(){
         this[PreOrderAlgorithm](this.root);
     }

     traverseInOrder(){
         this[InOrderAlgorithm](this.root);
     }

     traversePostOrder(){
         this[PostOrderAlgorithm](this.root);
     }

     height(){
         if (this.root == null) return -1;
         return this[heightAlgorithm](this.root);
     }

     min(){
         return this[minimumAlgorithm](this.root);
     }

     max(){
         return this[maximumAlgorithm](this.root);
     }

     minBinSearch(){
         if (this.root == null) throw new Error('The tree is empty');

         let current = this.root;
         let last = current ;
         while (current != null){
             last = current;
             current = current.leftChild;
         }
         return last.value;
     }

     maxBinSearch(){
         if (this.root == null) throw new Error('The tree is empty');

         let current = this.root;
         let last = current ;
         while (current != null){
             last = current;
             current = current.rightChild;
         }
         return last.value;
     }

     equals(other){
        if (other == null) return false;

        return this[equalsAlgorithm](this.root, other.root);
     }

     isBinary(){
        return this[isBinaryAlgorithm](this.root, Number.MIN_VALUE, Number.MAX_VALUE);
     }

     swapRoot(){
         let temp = this.root.leftChild;
         this.root.leftChild = this.root.rightChild;
         this.root.rightChild = temp;
     }

     kDistance(distance){
        let list = [];
        this[kDistanceAlgorithm](this.root, distance, list);
        return list;
     }

     traverseLevelOrder(){
         for(let i = 0; i <= this.height(); i++){
             this.kDistance(i);
         }
     }

     getSize(){
         return this.size;
     }

     countLeaves(){
         return this[countLeavesAlgorithm](this.root,0);
     }

     contains(value){
         return this[containsAlgorithm](this.root, value);
     }

     areSiblings(first, second){
         return this[areSiblingAlgorithm](this.root, first, second);
     }

     getAncestors(value){
        let array = [];
        this[getAncestorsAlgorithm](this.root,value,array);
        console.log(array)
     }

     [PreOrderAlgorithm](root){
        if (root == null) return;

         console.log(root.value);
         this[PreOrderAlgorithm](root.leftChild);
         this[PreOrderAlgorithm](root.rightChild);
     }

     [InOrderAlgorithm](root){
        if (root == null ) return;

        this[InOrderAlgorithm](root.leftChild);
        console.log(root.value);
        this[InOrderAlgorithm](root.rightChild);
     }

     [PostOrderAlgorithm](root){
        if (root == null ) return;

        this[PostOrderAlgorithm](root.leftChild);
        this[PostOrderAlgorithm](root.rightChild);
        console.log(root.value);
     }

     [heightAlgorithm](root){
         if (this[isLeaf](root)) return 0;
         return 1 + Math.max(this[heightAlgorithm](root.leftChild), this[heightAlgorithm](root.rightChild));
     }

     [minimumAlgorithm](root){
        if (this[isLeaf](root)) return root.value;

        let left = this[minimumAlgorithm](root.leftChild);
        let right = this[minimumAlgorithm](root.rightChild);

        return Math.min(Math.min(left, right), root.value);
     }

     [maximumAlgorithm](root){
        if (this[isLeaf](root)) return root.value;

        let left = this[maximumAlgorithm](root.leftChild);
        let right = this[maximumAlgorithm](root.rightChild);

        return Math.max(Math.max(left, right), root.value);
     }

     [equalsAlgorithm](first,second){
        if (first == null && second == null) return true;

        if(first != null && second != null) {
            return first.value == second.value
                && this[equalsAlgorithm](first.leftChild, second.leftChild)
                && this[equalsAlgorithm](first.rightChild, second.rightChild);
        }

        return false;
     }

     [countLeavesAlgorithm](root){
        if (root == null) return 0;
        if (root.leftChild == null && root.rightChild == null) return 1;
        
        return this[countLeavesAlgorithm](root.leftChild) + this[countLeavesAlgorithm](root.rightChild);
     }

     [containsAlgorithm](root, value){
         if (root == null) return false;
         
         if(root != null){
             return root.value == value
             || this[containsAlgorithm](root.leftChild,value)
             || this[containsAlgorithm](root.rightChild,value);
         }
     }

     [isBinaryAlgorithm](root, min, max){
        if (root == null) return true;

        if (root.value < min || root.value > max) return false;

        return this[isBinaryAlgorithm](root.leftChild, min, root.value - 1)
                && this[isBinaryAlgorithm](root.rightChild, root.value + 1, max);
     }

     [kDistanceAlgorithm](root, distance){
        if (root == null) return;
        if (distance == 0) {
            console.log(root.value);
            return;
        }

        this[kDistanceAlgorithm](root.leftChild, distance-1);
        this[kDistanceAlgorithm](root.rightChild, distance-1);
     }

     [areSiblingAlgorithm](root, first, second){
         if (root.leftChild == null && root.rightChild == null) return false;

         let left = root.leftChild.value;
         let right = root.rightChild.value;

         return first == left && second == right
         || this[areSiblingAlgorithm](root.leftChild, first, second)
         || this[areSiblingAlgorithm](root.rightChild, first, second);
     }

     [getAncestorsAlgorithm](root, value, array){
         if (root == null) return;
         if(!this.contains(value)) throw new Error('This number is not in the tree');

         while (root.value != null){
            if (value < root.value){
                array.push(root.value);
                this[getAncestorsAlgorithm](root.leftChild, value, array);
            }
            if (value > root.value){
                array.push(root.value);
                this[getAncestorsAlgorithm](root.rightChild, value, array);
            }
            return;
         }
     }

     [isLeaf](node){
         return (node.leftChild == null || node.rightChild == null);
     }
}   
const tree = new Tree();

tree.insert(7);
tree.insert(4);
tree.insert(9);
tree.insert(1);
tree.insert(6);
tree.insert(8);
tree.insert(10);

tree.getAncestors(0)