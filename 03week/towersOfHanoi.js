'use strict';

// 1.  Figure how to pop() the last element into the chosen array in the movePiece().
// 2.  Create code to test legal and illegal moves.
// 3.  Need to validate moves for the chosen stacks (a, b, and c);
// 4. Add code to checkForWin() to determine if player has won.

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
     if(startStack === 'a' && (endStack === 'b' || endStack === 'c')) {
       return true;
     } else if (startStack === 'b' && (endStack === 'a' || endStack === 'c')) {
       return true;
     } else if (startStack === 'c' && (endStack === 'a' || endStack === 'b')) {
       return true;
     }
}

const isValid = (startStack, endStack) => {
  try {
    if(startStack === '' || endStack === '') {
      throw 'Please enter a, b, or c';
    }
    if((startStack !== 'a') && (endStack !== 'b' || endStack !== 'c')) {
      throw 'Please enter a valid letter.  Please don\'t enter the same letter.';
    }
    if((startStack !== 'b') && (endStack !== 'a' || endStack !== 'c')) {
      throw 'Please enter a valid letter.  Please don\'t enter the same letter.';
    }
    if((startStack !== 'c') && (endStack !== 'a' || endStack !== 'b')) {
      throw 'Please enter a valid letter.  Please don\'t enter the same letter.';
    }
  } catch(err) {
    console.log(err);
  }
}

function isLegal(startStack, endStack) {
  // Your code here
  try {
    if(stacks.b[stacks[startStack]] < stacks.c[stacks[endStack]] || stacks.b.length == 0 || stacks.c.length == 0) {
      throw 'Illegal move!  You can\'t place a bigger tile on top of a smaller tile.  Please choose another move.';
      return false;
    }
  } catch(err) {
    console.log(err);
  }
}

function checkForWin() {
  // Your code here
  if(stacks.b.length === 4 || stacks.c.length === 4) {
    return true;
  } else {
    return false;
  }
}

function towersOfHanoi(startStack, endStack) {
  // Your code here
    if(movePiece(startStack, endStack)) {
      return stacks[endStack].push(stacks[startStack].pop());
    }

    if(checkForWin()) {
      console.log('You win!!!');
    } else {
      isValid(startStack, endStack);
    }

}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
