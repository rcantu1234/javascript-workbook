'use strict';

// 1. User makes a guess => string.
// 2. Check for length of string.  Invalid
//    if string is less than 4 letters.
// 3. Each letter needs to be in letters array.
// 4. If valid, check if guess === solution.
// 5. If it matches, notify the player that they won!!!
// 6. Reset the board when player wins!!!
// 7. If it doesn't match, give the player hints.
// 8. Store guesses in array.
// 9.  User has 10 guesses.  Game over when maxed guesses.
// 10.  Reset game.

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(guess) {
  // your code here
  const guessArr = guess.split('');
  const solutionArr = solution.split('');
  let rightPlaceRightLetter = 0;
  let wrongPlaceRightLetter = 0;

  guessArr.forEach((letter, index) => {
    if(solutionArr[index] == letter) {
      console.log(letter, '1');
      rightPlaceRightLetter += 1;
    } else if(solutionArr.indexOf(letter) != -1) {
      console.log(letter, '2');
      wrongPlaceRightLetter += 1;
    }
  })
  console.log(`${rightPlaceRightLetter} right place right letter
     ${wrongPlaceRightLetter} wrong place right letter`);
}

const isValidGuess = (guess) => {
  let allLettersAcceptable = true;
  const guessArr = guess.split('');
  guessArr.forEach((letter, index) => {
    if(letters.indexOf(letter) == -1) {
      allLettersAcceptable = false;
    }
  })
  return guess.length === 4 && allLettersAcceptable;
}
function mastermind(guess) {
  solution = 'abcd'; // Comment this out to generate a random solution
  // your code here
  if(isValidGuess(guess)) {
    console.log('Keep going!!!');
    if(solution == guess) {
      console.log('You won!!!');
      // reset the board
      board = [];
    } else {
      generateHint(guess);
      board.push(guess);
      if(board.length < 10) {
          console.log('you lose');
          board = [];
      }
      console.log('Guess again');
    }
  } else {
    console.log('Invalid guess');
  }
}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
