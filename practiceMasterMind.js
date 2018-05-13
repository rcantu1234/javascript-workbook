'use strict'

let solution = 'abcd';
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

const isValidGuess = (guess) => {
  const guessAr = guess.split('');
  const allLettersAcceptable = true;

  guessArr.forEach((letter, index) => {
    if(letters.indexOf(letter) == -1) {
      console.log(letter);
      allLettersAcceptable = false;
    }
  })
  return guess.length == 4 && allLettersAcceptable;
}
// const isValidGuess = (guess) => {
//   const guessArr = guess.split('');
//   const allLettersAcceptable = true;
//
//   guessArr.forEach((letter, index) => {
//     if(letters.indexOf(letter) == -1) {
//       console.log(letter);
//       allLettersAcceptable = false;
//     }
//   })
//   return guess.length == 4;
//   // return guess = guess == true ? false : allLettersAcceptable;
// }

const generateHint = (guess) => {
    const guessArr = guess.split('');
    const solutionArr = solution.split('');
    let rightPlaceRightLetter = 0;
    let wrongPlaceRightLetter = 0;

    guessArr.forEach((letter, index) => {
      if(solutionArr[index] == letter) {
        console.log(letter, '1');
        rightPlaceRightLetter++;
      } else if(solutionArr.indexOf(letter) != -1) {
        console.log(letter, '2');
        wrongPlaceRightLetter++;
      }
    })
    console.log(`${rightPlaceRightLetter} right place right letter,
      ${wrongPlaceRightLetter} wrong place right letter`);
}

generateHint('fcdd');


console.log(isValidGuess('efcd'));
