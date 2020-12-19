var bob = "Bob"
var jim = "Jim"

switchingPlayers = (currentPlayer, opponent) => {
    if (currentPlayer == "Bob") {
        alert(`In the IF Current player is: ${currentPlayer}, Opponent: ${opponent}`)
        switchingPlayers(jim, bob);
    } else {
        alert(`In the ELSE Current player is: ${currentPlayer}, Opponent: ${opponent}`)
        gamePlay(bob, jim);
    }
}

switchingPlayers(bob,jim);