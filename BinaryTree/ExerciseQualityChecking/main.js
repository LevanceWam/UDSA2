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
const equalsAlgorithm = Symbol();
const isLeaf= Symbol();

class Tree {
     constructor(root=null){
         this.root = root;
     }

     insert(value){
        let newNode = new Node(value)

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

     equals(other){
        if (other == null) return false;

        return this[equalsAlgorithm](this.root, other.root);
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

     [equalsAlgorithm](first,second){
        if (first == null && second == null) return true;

        if(first != null && second != null) {
            return first.value == second.value
                && this[equalsAlgorithm](first.leftChild, second.leftChild)
                && this[equalsAlgorithm](first.rightChild, second.rightChild);
        }

        return false;
     }

     [isLeaf](node){
         return (node.leftChild == null && node.rightChild == null);
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

const tree2 = new Tree();

tree2.insert(7);
tree2.insert(4);
tree2.insert(9);
tree2.insert(1);
tree2.insert(6);
tree2.insert(8);
tree2.insert(10);

console.log(tree.equals(tree2))
