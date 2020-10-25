// Create an Array of words
var words = ["witch","ghost","pumpkin","monster"];
// Pick a random word
var word = words[Math.floor(Math.random() * words.length)];

// Set up the answer array
var answerArray = [];
for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}

var remainingLetters = word.length;

// Game Loop
while (remainingLetters > 0) {
  // Show the player their progress
  // ["_","_","_"] No guesses
  // ["_","a","_"] Guessed letter correctly
  // ["_","a","_"] Guessed letter incorrectly
  alert(answerArray.join(" "));
  // "_a_"

  // Get a guess from the player
  var guess = prompt("Guess a letter, or click Cancel to stop playing.")
  if (guess === null) {
    break; // Exit the game loop
  } else if (guess.length !== 1) {
    // Checks in player only gives 1 letter
    alert(" Please enter a single letter.");
  } else {
    // Update the state with the guess
    for (var i = 0; i < word.length; i++) {
      if (word[i] === guess) {
        answerArray[i] = guess;
        remainingLetters--;
      }
    }
  }
  // End the game loop
}
// Show the answer and congratulate the player
alert(answerArray.join(" "));
alert("Good job! The answer was " + word);
