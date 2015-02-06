
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
  return this;
};

Trie.prototype.getWords = function(words, currentWord){
  words = words || [];
  currentWord = currentWord || "";
  // This function will return all the words which are
  // contained in this Trie.
  // it will use currentWord as a prefix,
  // since a Trie doesn't know about its parents.

  // checking to see if `this` node is a word
  if (this.isWord) {
    // then push currentWord into list of words
    // where currentWord is built after each 
    // call to getWords
    words.push(currentWord);
  }


  // after we check if this a currentWord

  // loop through all the characters in this.characters
  for (var character in this.characters){
    // and we are calling getWords on the next node for 
    // each character passing in the previousWord + the new character
    console.log(new Array(50).join("-"))
    console.log("|" + new Array(currentWord.length).join("\t") + currentWord + "\t|")
    this.characters[character].getWords(words, currentWord + character);
    console.log(new Array(50).join("-"))
  }
  return words;
};

Trie.prototype.find = function(word, index){
  index = index || 0;
  // This function will return the node in the trie
  // which corresponds to the end of the passed in word.
  if (index === word.length) {
    return this;
  }

  if (this.characters[word[index]] !== undefined && index < word.length) {
      return this.characters[word[index]].find(word, index + 1);
  }
  // Be sure to consider what happens if the word is not in this Trie.
};

Trie.prototype.autoComplete = function(prefix){
  // This function will return all completions 
  // for a given prefix.
  // It should use find and getWords.
  var foundNode = this.find(prefix);
  var words = [];
  if(foundNode) {
    foundNode.getWords(words, prefix);
  }
  return words;
};


try{
  module.exports = Trie
} catch(e){

}