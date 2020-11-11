class TreeNode {
    constructor(value){
        this.value = value;
        this.leftChild = null;
        this.rightChild = null;
    }
}

const _size = new WeakMap();
const insertAlgorithm = Symbol();

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

     return root;   
    }
}

const tree = new AVLTree();

tree.insert(5);
tree.insert(4);
tree.insert(7);
tree.insert(1);
console.log(tree.root)