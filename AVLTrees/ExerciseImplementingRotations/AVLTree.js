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
const rotateLeft = Symbol();
const rotateRight = Symbol();
const setHeight = Symbol();

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

        setHeight(root);

        return this[balance](root);
        }

    [balance](root){        
        if (this[isLeftHeavy](root)) {
            if (this[balanceFactorAlgorithm](root.rightChild) < 0)
            root.leftChild = rotateLeft(root.leftChild);
            return rotateRight(root);
        }

        if (this[isRightHeavy](root)) {
            if (this[balanceFactorAlgorithm](root.rightChild) > 0)
                root.rightChild = rotateLeft(root.rightChild);
            return rotateRight(root);
        }

        return root;
    }

    [rotateLeft](root){
        let newRoot = root.rightChild;

        root.rightChild = newRoot.leftChild;
        newRoot.leftChild = root;

        setHeight(root);
        setHeight(newRoot);

        return newRoot
    }

    [rotateRight](root){
        let newRoot = root.leftChild;

        root.leftChild = newRoot.rightChild;
        newRoot.rightChild = root;

        setHeight(root);
        setHeight(newRoot);

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

}

const tree = new AVLTree();

tree.insert(10);
tree.insert(30);
tree.insert(20);
console.log(tree.root)