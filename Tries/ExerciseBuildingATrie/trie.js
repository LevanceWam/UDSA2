// this is the private class for us to create our nodes 
class Node {
    constructor(value){
        this.value = value;
        this.children =[];
        this.isEndOfWord;
    }
}

class Trie{
    constructor(){
        // the root node of a trie always has to be empty
        // this is because we have 26 letters and there are many possiblities for a string 
        // if we have a letter at the root it makes things default
        this.root = new Node(' ');
    }

    insert(word){
        /**
         * This method takes a string and inserts it in the trie
         */

         // we are going to keep track of were we are inserting the characters in the array
        let current = this.root;

        // we need to iterate through all of the characters in the string then insert them into the array
        for(let ch of word){
            // to calculate the index we are going to subtract the character code of each character by 'a'
           let index = ch.charCodeAt() - 'a'.charCodeAt();
            //  if the index is spot at the current index is null we insert here   
           if (current.children[index] == null) {
              current.children[index] = new Node(ch); 
           }
           // we set the root to the current child and iterate to the next one
           current = current.children[index];
        }
        // we are at the end of the insertion we are now going to set this to true so signal that this is the end of the word
        current.isEndOfWord = true;
    }
}

const trie = new Trie();
trie.insert('apple')
console.log(trie.root)

