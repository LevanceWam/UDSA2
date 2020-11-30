// this is the private class for us to create our nodes 
class TrieNode {
    constructor(value){
        this.value = value;
        this.children = new Map();
        this.isEndOfWord = false;
    }

    hasChild(ch){
        return this.children.has(ch);
    }

    addChild(ch){
        this.children.set(ch, new TrieNode(ch));
    }

    getChild(ch){
        return this.children.get(ch);
    }

    getChildren(){
        return this.children.values();
    }
}

/** Private methods */
const preOrderTraverseAlgorithnm = Symbol();
const postOrderTraverseAlgorithnm = Symbol();

class Trie{
    constructor(){
        // the root node of a trie always has to be empty
        // this is because we have 26 letters and there are many possiblities for a string 
        // if we have a letter at the root it makes things difficult
        this.root = new TrieNode(' ');
    }

    /** Public methods */

    insert(word){
        /**
         * This method takes a string and inserts it in the trie
         */

         // we are going to keep track of were we are inserting the characters in the array
        let current = this.root;

        // we need to iterate through all of the characters in the string then insert them into the map
        for(let ch of word){
            // if the map does not have the character we insert it
           if (!current.hasChild(ch)) {
              current.addChild(ch);
           }
           // we set the root to the current child and iterate to the next one
           current = current.getChild(ch);
        }
        // we are at the end of the insertion we are now going to set this to true so signal that this is the end of the word
        current.isEndOfWord = true;
    }

    find(word){
        /**
         * This method takes a string and checks to see if it is in the trie
         */

        if (word == null) return false;

        let current = this.root;
        
        // we need to iterate through the new string 
        for(let ch of word){
            // if the current value doesn't have the character as a child then we return false 
            // if we do have the letter we move on to the next one until we are done with the string
            if (!current.hasChild(ch)) return false;
            current = current.getChild(ch);
        }

        // We check to see if the last letter in current is the final letter in the word and return a boolean
        return current.isEndOfWord;
    }

    preOrderTraverse(){
        // making a call to the private function
        this[preOrderTraverseAlgorithnm](this.root);
    }

    postOrderTraverse(){
        // making a call to the private function
        this[postOrderTraverseAlgorithnm](this.root);
    }

    /** Private Methods */

    [preOrderTraverseAlgorithnm](root){
       // pre-order travesal 
       // We are going to visit the node and print here 
        console.log(root.value);

        for (let child of root.getChildren()){
            this[preOrderTraverseAlgorithnm](child);
        }
    }

    [postOrderTraverseAlgorithnm](root){
       // pre-order travesal 
       // We are going to traverse all the way to the end and then print the node
       for (let child of root.getChildren()){
           this[postOrderTraverseAlgorithnm](child);
        }
        console.log(root.value);
    }
}

const trie = new Trie();
trie.insert('care');
trie.postOrderTraverse()


