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
        return this[nodesOnLevel]() == this.size;
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

    [nodesOnLevel](){
       let count = 1; 
       let multiplier = 2;

       if (this.root.height == 0) return 1;

       for (let i = 0; i < this.root.height; i++){
           count += multiplier;
           multiplier*=2;
        }
        return count;
    }


}

const tree = new AVLTree();

tree.insert(10);
tree.insert(20);
tree.insert(30);

console.log(tree.isPerfect());