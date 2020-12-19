const battleship = () => {
  //PSEUDOCODE:
  //## Step 1: Create Players
let player1 = {
  name: '',
  shipCount: 4,
  board: [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
  ],
  guesses: []
}

let player2 = {
  name: '',
  shipCount: 4,
  board: [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
  ],
  guesses: []
}

let winner;

player1.name = prompt('Player 1, please enter your name...');
player2.name = prompt('Player 2, please enter your name...');

console.log("Player 1 is ", player1.name);
console.log("Player 2 is ", player2.name);

  //## Step 2: Randomly Add Ships to each Board
for (i=0; i < 4; i++) {
  let posX = Math.floor(Math.random() * 4);
  // console.log("position x: ", posX);
  let posY = Math.floor(Math.random() * 4);
  // console.log("position y: ", posY);
  if (player1.board[posX][posY] == 1) {
    i--;
  } else {
    player1.board[posX][posY] = 1;
  }
}

for (i=0; i < 4; i++) {
  let posX = Math.floor(Math.random() * 4);
  // console.log("position x: ", posX);
  let posY = Math.floor(Math.random() * 4);
  // console.log("position y: ", posY);
  if (player2.board[posX][posY] == 1) {
    i--;
  } else {
    player2.board[posX][posY] = 1;
  }
}

console.log("Player 1 board: ", player1.board[0],player1.board[1], player1.board[2], player1.board[3]);
console.log("Player 2 board: ", player2.board[0],player2.board[1], player2.board[2], player2.board[3]);

  //## Step 3: Start the Game Play
gamePlay = (currentPlayer, opponent) => {
//### Step 3a: Ask the Player to Choose Strike Coordinates
let guessedX
let guessedY

guessedX = prompt(`Current player is: ${currentPlayer.name}. Please enter a whole number 0-3 as your x coordinate for where you want to strike. You have already guessed: ${currentPlayer.guesses}`)
guessedY = prompt(`Current player is: ${currentPlayer.name}. Please enter a whole number 0-3 as your x coordinate for where you want to strike.You have already guessed: ${currentPlayer.guesses}`)

console.log("Player guessing: ", guessedX, guessedY)
let turnGuess
turnGuess = `${guessedX}, ${guessedY};`
currentPlayer.guesses.push(turnGuess);
console.log(`${currentPlayer.name}:`, currentPlayer.guesses)




 //### Step 3b: Determine if the Player Sunk their Opponent's Ship
if (opponent.board[guessedX][guessedY] == 1) {
  opponent.board[guessedX][guessedY] = 0;
  opponent.shipCount--;
  alert("Hit!");
} else {
  alert("Miss!");
}
console.log(`${opponent.name}`, opponent.shipCount, opponent.board[0], opponent.board[1], opponent.board[2], opponent.board[3]);

 //### Step 3c: Check if the Opponent has Any Ships Left
if (opponent.shipCount == 0) {
  //## Step 4: End the Game Play
  winner = currentPlayer.name;
} else {
  if (currentPlayer == player1) {
    gamePlay(player2, player1);
  } else {
    gamePlay(player1, player2);
  }
}

}

gamePlay(player1, player2);

  
return `The winner is ${winner}! Congratulations!`
}
  
const gameResult = battleship()
  
const htmlTarget = document.getElementById('result')
htmlTarget.innerHTML = gameResult