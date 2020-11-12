class TreeNode {
    constructor(value){
        this.value = value;
        this.leftChild = null;
        this.rightChild = null;
        this.height = 0;
    }
}

const insertAlgorithm = Symbol();
const heightAlgorithm = Symbol()
const isLeftHeavy = Symbol();
const isRightHeavy = Symbol();
const balanceFactorAlgorithm = Symbol();
const balance = Symbol();
const rotateLeft = Symbol();
const rotateRight = Symbol();
const setHeight = Symbol();
const nodesOnLevel = Symbol();
const isBalancedAlgorithm = Symbol();
const PreOrderAlgorithm = Symbol();
const InOrderAlgorithm = Symbol();
const PostOrderAlgorithm = Symbol();
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

class AVLTree {
    constructor(root=null){
        this.root = root;
        this.size = 0;
    }

    insert(value){
        this.root = this[insertAlgorithm](this.root, value);
        this.size++;
    }

    isPerfect(){
        return this[nodesOnLevel](this.root) == this.size;
    }

    isBalanced(){
        return this[isBalancedAlgorithm](this.root);
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

    kDistance(distance){
       let list = [];
       this[kDistanceAlgorithm](this.root, distance, list);
       return list;
    }

    traverseLevelOrder(){
       for(let i = 0; i <= this.height(); i++){
           let list = this.kDistance(i);
           for(let value of list){
               console.log(value)
           }
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

    [insertAlgorithm](root, value){
        let newNode = new TreeNode(value);

        if (root == null) return newNode;

        if(value < root.value){
            root.leftChild = this[insertAlgorithm](root.leftChild, value);
        } else{
            root.rightChild = this[insertAlgorithm](root.rightChild, value);
        }

        this[setHeight](root);

        return this[balance](root);
    }

    [balance](root){        
        if (this[isLeftHeavy](root)) {
            if (this[balanceFactorAlgorithm](root.leftChild) < 0)
                root.leftChild = this[rotateLeft](root.leftChild);
            return this[rotateRight](root);
        }

        if (this[isRightHeavy](root)) {
            if (this[balanceFactorAlgorithm](root.rightChild) > 0)
                root.rightChild = this[rotateRight](root.rightChild);
            return this[rotateLeft](root);
        }

        return root;
    }

    [rotateLeft](root){
        let newRoot = root.rightChild;

        root.rightChild = newRoot.leftChild;
        newRoot.leftChild = root;

        this[setHeight](root);
        this[setHeight](newRoot);

        return newRoot
    }

    [rotateRight](root){
        let newRoot = root.leftChild;

        root.leftChild = newRoot.rightChild;
        newRoot.rightChild = root;

        this[setHeight](root);
        this[setHeight](newRoot);

        return newRoot
    }

    [setHeight](node){
        node.height = Math.max(this[heightAlgorithm](node.leftChild),
            this[heightAlgorithm](node.rightChild)) +1;
    }

    [heightAlgorithm](node){
        return (node == null) ? -1 : node.height;
    }

    [isLeftHeavy](node){
        return this[balanceFactorAlgorithm](node) > 1;
    }

    [isRightHeavy](node){
        return this[balanceFactorAlgorithm](node)< -1;
    }

    [balanceFactorAlgorithm](node){
        return (node == null) ? 0 : this[heightAlgorithm](node.leftChild) - this[heightAlgorithm](node.rightChild);
    }

    [nodesOnLevel](root){
       let count = 1; 
       let multiplier = 2;

       if (root.height == 0) return 1;

       for (let i = 0; i < root.height; i++){
           count += multiplier;
           multiplier*=2;
        }
        return count;
    }

    [isBalancedAlgorithm](root){
        if (root == null) return;

        if (this[balanceFactorAlgorithm](root) <= 1 && this[balanceFactorAlgorithm](root) >= -1) return true;
        this[isBalancedAlgorithm](root.leftChild);
        this[isBalancedAlgorithm](root.rightChild);

        return false;
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

     [kDistanceAlgorithm](root, distance,list){
        if (root == null) return;
        if (distance == 0) {
            list.push(root.value);
            return;
        }

        this[kDistanceAlgorithm](root.leftChild, distance-1,list);
        this[kDistanceAlgorithm](root.rightChild, distance-1,list);
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

const tree = new AVLTree();

tree.insert(10);
tree.insert(20);
tree.insert(30);

console.log(tree.maxBinSearch())

module.exports = AVLTree;