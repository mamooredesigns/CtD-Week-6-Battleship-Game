const battleship = () => {
//data needed: player names (get via prompt), 2-d array of game board per player, number of ships on the board per player, array of guesses made per player
  //step 1: create players
  //step 2: randomly add ships to each players board
  //step 3: start the game
  //3A: ask for x y, store in a variable(s)
  //3B: was 3a a hit/miss? (alert)
  //3C: check ship count
  //step 4: game end - return winner

  let winner;
  
  alert('Welcome to the game of battleship!...');
  
  //Step 1: create players
  var player1 = {
       name: '',
       board: [[0, 0, 0, 0],
               [0, 0, 0, 0],
               [0, 0, 0, 0],
               [0, 0, 0, 0]],
       shipCount: 4,
       positionsGuessed: []
  };
  
  var player2 = {
       name: '',
       board: [[0, 0, 0, 0],
               [0, 0, 0, 0],
               [0, 0, 0, 0],
               [0, 0, 0, 0]],
       shipCount: 4,
       positionsGuessed: []
  };
  
  player1.name = prompt('Player 1, please enter your name...');
  player2.name = prompt('Player 2, please enter your name...');
  
  console.log(`${player1.name}: `, player1);
  console.log(`${player2.name}: `, player2);

  //Step 2: randomly add ships to each players board
  placeShips = (playerBoard) => {
    for (i = 0; i < 4; i ++) {
      let posX = Math.floor(Math.random() * 4)
      let posY = Math.floor(Math.random() * 4)
  
      if (playerBoard[posX][posY] == 0) {
        playerBoard[posX][posY] = 1
      } else { 
        i--;
      }
    }
  }

  placeShips(player1.board);
  placeShips(player2.board);

  console.log(`${player1.name}'s board: `, player1.board[0], player1.board[1], player1.board[2], player1.board[3],);
  console.log(`${player2.name}'s board: `, player2.board[0], player2.board[1], player2.board[2], player2.board[3],);
  
  //Step 3: start the game...
  playGame = (currentPlayer, opponent) => {
    //3A: ask for x y, store in a variable(s)
    let strikeAtX;
    let strikeAtY;

    if (currentPlayer.positionsGuessed[0] == undefined) {
      strikeAtX = prompt(`${currentPlayer.name}'s turn. \nPlease enter an X (horizontal/row) position (0-3)...`)
      strikeAtY = prompt(`${currentPlayer.name}'s turn. \nPlease enter a Y (vertical/column) position (0-3)...`)
      currentPlayer.positionsGuessed.push(`X:${strikeAtX},Y:${strikeAtY} `);
      console.log(`${currentPlayer.name}'s guesses: `, currentPlayer.positionsGuessed);
    } else {
      strikeAtX = prompt(`${currentPlayer.name}'s turn. \n${opponent.name} has ${opponent.shipCount} ship(s) left. \nYou've already guessed these locations: \n${currentPlayer.positionsGuessed.join("  ")} \nPlease enter an X (horizontal/row) position (0-3)...`)
      strikeAtY = prompt(`${currentPlayer.name}'s turn. \n${opponent.name} has ${opponent.shipCount} ship(s) left. \nYou've already guessed these locations: \n${currentPlayer.positionsGuessed.join("  ")} \nPlease enter a Y (vertical/column) position (0-3)...`)
      currentPlayer.positionsGuessed.push(`X:${strikeAtX},Y:${strikeAtY} `);
      console.log(`${currentPlayer.name}'s guesses: `, currentPlayer.positionsGuessed);
    }
    
    //3B: was 3a a hit/miss? (alert)
    if (opponent.board[strikeAtX][strikeAtY] == 1) {
      alert('Hit!');
      opponent.board[strikeAtX][strikeAtY] = 0;
      opponent.shipCount--;
    } else {
      alert('Miss!');
    }
  
    //3C: check ship count
    if (opponent.shipCount == 0) {
      winner = currentPlayer.name;
    //step 4: game end - return winner
      return winner;
    } else {
      if (currentPlayer == player1) {
        playGame(player2, player1);
      } else {
        playGame(player1, player2);
      }
    }
  }
  
  playGame(player1, player2);
}

const gameResult = battleship()

const htmlTarget = document.getElementById('result')
htmlTarget.innerHTML = gameResult
