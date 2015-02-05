
Trie = function(){
  this.characters = {};
};

Trie.prototype.learn = function(word, index){
  // This function should add the given word,
  // starting from the given index,
  // to this Trie.
  index = index || 0;
  // It will be recursive.  It will tell
  // the correct child of this Trie to learn the word
  // starting from a later index.
  var char = word[index];
  if (index < word.length) {
    // recursive condition
    if (this.characters[char] === undefined) {
      this.characters[char] = new Trie();
    }
    // recursively learn at next char position
    this.characters[char].learn(word, index + 1);
  } else {
    // terminal condition
    this.isWord  = true;
  }
  // Consider what the learn function should do
  // when it reaches the end of the word?
  // A word does not necessarily end at a leaf.
  // You must mark nodes which are the ends of words,
  // so that the words can be reconstructed later.
};

Trie.prototype.getWords = function(words, currentWord){
  // This function will return all the words which are
  // contained in this Trie.
  // it will use currentWord as a prefix,
  // since a Trie doesn't know about its parents.
};

Trie.prototype.find = function(word, index){
  // This function will return the node in the trie
  // which corresponds to the end of the passed in word.

  // Be sure to consider what happens if the word is not in this Trie.
};

Trie.prototype.autoComplete = function(prefix){
  // This function will return all completions 
  // for a given prefix.
  // It should use find and getWords.
};

try{
  module.exports = Trie
} catch(e){

}