'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const pigLatin = (word) => {
// Trim whitespace and conver to LowerCase
  word = word.trim();
  // console.log(word)
  word = word.toLowerCase();
  // console.log(word)
  let manyWords = word.split(',');
  // console.log(manyWords);

// Started building the ability to handle multiple words in a comma seperated list, but not necessary now

  // if(word[1] != null){
  //   const manyWordsArray = () =. {
  //     word.forEach(
  //   }
  // }
// Declare Vowels for proper behavior on comparison
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let wordArray = word.split('');
// Create Arrays for processing the steps
  let holding = [];
  let solution = [];

  for (let index=0; index < 2; index++){
    // console.log(index)
    if(vowels.includes(wordArray[index])) {
      if(index === 0){
        let ansyay = word + 'yay';
        solution.push(ansyay);
      } else {
        let ordway = word.slice(index, word.length) + word.slice(0, index) + 'ay';
        solution.push(ordway);
      }
    } else if(!vowels.includes(wordArray[index])){
      let bucket = wordArray[index]
      holding.push(bucket)
      if (holding.length === 2) {
        let otherArray = holding.join("")
        // console.log(otherArray)
        let onglay = word.slice(2, word.length)
          + word.slice(2, index)
          + otherArray
          + 'ay'
        solution.push(onglay)
      }
      }
    }
    const answer = solution.join()
    // console.log(solution)
    // console.log(answer)
    return answer
  }
  
  

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
