//create numberOfPlayers function

let playersInGame = [];

function numberOfPlayers(players, attemps) {
    for (let i = 0; i < players; i++) {
        let playerX = [];
        for (let i = 0; i < attemps; i++) {
            playerX.push((Math.floor(Math.random() * 6)));
        }
        playersInGame.push(playerX);
    }
}

numberOfPlayers(5,5);