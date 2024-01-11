//create numberOfPlayers function

let playersInGame = [];

function numberOfPlayers(players, attemps) {
    for (let i = 0; i < attemps; i++) {
        let attemptX = [];
        for (let i = 0; i < players; i++) {
            attemptX.push((Math.floor(Math.random() * 6)));
        }
        playersInGame.push(attemptX);
    }
}

//need to add range of secret numbers

numberOfPlayers(10,5);

for (let i = 0; i < playersInGame.length; i++) {

}
