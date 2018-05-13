'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = []; //array
let solution = 'abcd';
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

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
  let rightPlaceRightLetter= 0;
  let wrongPlaceRightLetter= 0;
  guessArr.forEach((letter, index)=> {
    //guess afcb 1
    //solution abcd
    if (solutionArr[index] == letter) {
         console.log(letter, '1')
        // rightPlaceRightLetter = rightPlaceRightLetter + 1
        // rightPlaceRightLetter +=
        rightPlaceRightLetter ++
    }else if(solutionArr.indexOf(letter) != -1){
        console.log(letter, '2')
        wrongPlaceRightLetter ++
    }
  });

  console.log(`${rightPlaceRightLetter} right place right letter,
    ${wrongPlaceRightLetter} wrong place right letter`)
  //2 right place, right letter, 1 right color wrong letter
}

const isValidGuess=(guess)=>{
  const guessArr = guess.split('');

  let allLettersAcceptable = true;
  guessArr.forEach((letter, index)=> {
    if (letters.indexOf(letter) == -1){
      allLettersAcceptable = false;
    }
  });

  return guess.length === 4 && allLettersAcceptable
}

function mastermind(guess) {
  // solution = 'abcd'; // uncomment this when developing
  // your code here;
  if (isValidGuess(guess)) {

    if(solution == guess){
      console.log('you won!');
      //reset the board
      board = [];
    }else{
      generateHint(guess);
      board.push(guess);
      if (board.length > 9 ){
        console.log('you lose')
        board = [];
      }
      console.log('not the solution, guess again')
    }
  }else {
    console.log('invalid guess')
  }
}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    console.log( mastermind(guess) );
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
