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

        root.height = Math.max(this[heightAlgorithm](root.leftChild),
         this[heightAlgorithm](root.rightChild) +1);

     return root;   
    }

    [heightAlgorithm](node){
        return (node == null) ? -1 : node.height;
    }
}

const tree = new AVLTree();

tree.insert(10);
tree.insert(20);
tree.insert(30);
console.log(tree.root)