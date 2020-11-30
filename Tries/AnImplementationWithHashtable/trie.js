// this is the private class for us to create our nodes 
class Node {
    constructor(value){
        this.value = value;
        this.children = new Map();
        this.isEndOfWord;
    }
}

class Trie{
    constructor(){
        // the root node of a trie always has to be empty
        // this is because we have 26 letters and there are many possiblities for a string 
        // if we have a letter at the root it makes things difficult
        this.root = new Node(' ');
    }

    insert(word){
        /**
         * This method takes a string and inserts it in the trie
         */

         // we are going to keep track of were we are inserting the characters in the array
        let current = this.root;

        // we need to iterate through all of the characters in the string then insert them into the map
        for(let ch of word){
            // if the map does not have the character we insert it
           if (current.children.get(ch) == null) {
              current.children.set(ch, new Node(ch))
           }
           // we set the root to the current child and iterate to the next one
           current = current.children.get(ch);
        }
        // we are at the end of the insertion we are now going to set this to true so signal that this is the end of the word
        current.isEndOfWord = true;
    }
}

const trie = new Trie();


