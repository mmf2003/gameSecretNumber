//create numberOfPlayers function

let playersInGame = [];

function numberOfPlayers(players, attemps, range) {
    for (let i = 0; i < attemps; i++) {
        let attemptX = [];
        for (let i = 0; i < players; i++) {
            attemptX.push((Math.floor(Math.random() * (range + 1))));
        }
        playersInGame.push(attemptX);
    }
}

//need to add range of secret numbers

function game(players, attemps, range, secret) {
    numberOfPlayers(players,attemps, range); 

    for (let i = 0; i < playersInGame.length; i++) {
        let attemp;
        for (let k = 0; k < playersInGame[i].length; k++) {
            attemp = playersInGame[i][k];
            if (secret == playersInGame[i][k]) {
                console.log(`Player${k+1} wins on ${i+1} attempt`);
                break;
            }
        }
        if (attemp == secret) break;
    }
}

