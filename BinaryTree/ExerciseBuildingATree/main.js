class Node{
    constructor(value){
        this.value = value;
        this.leftChild = null;
        this.rightChild = null;
    }
}

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
}

const tree = new Tree();

tree.insert(7);
tree.insert(4);
tree.insert(9);
tree.insert(1);
tree.insert(6);
tree.insert(8);
tree.insert(10);

console.log(tree.root)