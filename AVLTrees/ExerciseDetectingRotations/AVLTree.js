class TreeNode {
    constructor(value){
        this.value = value;
        this.leftChild = null;
        this.rightChild = null;
        this.height = 0;
    }
}

const _size = new WeakMap();
const insertAlgorithm = Symbol();
const heightAlgorithm = Symbol()
const isLeftHeavy = Symbol();
const isRightHeavy = Symbol();
const balanceFactorAlgorithm = Symbol();
const balance = Symbol();

class AVLTree {
    constructor(root=null){
        this.root = root;
        _size.set(this, 0);
    }

    insert(value){
        this.root = this[insertAlgorithm](this.root, value);
    }

    [insertAlgorithm](root, value){
        let newNode = new TreeNode(value);

        if (root == null) return newNode;

        if(value < root.value){
            root.leftChild = this[insertAlgorithm](root.leftChild, value);
        } else{
            root.rightChild = this[insertAlgorithm](root.rightChild, value);
        }

        root.height = Math.max(this[heightAlgorithm](root.leftChild)+1,
         this[heightAlgorithm](root.rightChild) +1);

        this[balance](root);
    
     return root;   
    }

    [balance](root){        
        if (this[isLeftHeavy](root)) {
            if (this[balanceFactorAlgorithm](root.rightChild) < 0)
                console.log('left rotate ' + root.leftChild.value)
            console.log('right rotate ' + root.value)
        }

        if (this[isRightHeavy](root)) {
            if (this[balanceFactorAlgorithm](root.rightChild) > 0)
                console.log('Right rotate ' + root.rightChild.value)
            console.log('left rotate ' + root.value)
        }
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

}

const tree = new AVLTree();

tree.insert(10);
tree.insert(30);
tree.insert(20);
console.log(tree.root)