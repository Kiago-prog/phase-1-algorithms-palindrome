function isPalindrome(word) {
  // Convert the word to lowercase and remove non-alphabetic characters
  const cleanedWord = word.toLowerCase().replace(/[^a-z]/g, '');

  // Compare characters from the start and end of the cleaned word
  for (let i = 0; i < cleanedWord.length / 2; i++) {
    if (cleanedWord[i] !== cleanedWord[cleanedWord.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
