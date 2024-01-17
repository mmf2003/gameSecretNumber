//create numberOfPlayers function

let playersInGame = [];
confirm('Do you want ot play a game???');
let players = +prompt('How many players do you want???', '10');
let secret = +prompt('What secret number do you want to guess???', '10');
let range = +prompt('What range do you want to allow???', '100');
let attemps = +prompt('How many attempts for players???', '10');


function numberOfPlayers(players, attemps, range) {
    for (let i = 0; i < attemps; i++) {
        let attemptX = [];
        for (let i = 0; i < players; i++) {
            attemptX.push((Math.floor(Math.random() * (range + 1))));
        }
        playersInGame.push(attemptX);
    }
}

function game(players, attemps, range, secret) {
    numberOfPlayers(players,attemps, range); 

    for (let i = 0; i < playersInGame.length; i++) {
        let attemp;
        console.log(`Secret number is ${secret}\nAttempt ${i + 1}:`);
        for (let k = 0; k < playersInGame[i].length; k++) {
            
            attemp = playersInGame[i][k];
            if (secret == playersInGame[i][k]) {
                console.log(`Player${k+1} suggested that secret number is ${playersInGame[i][k]} and won on ${i+1} attempt`);
                alert(`Player${k+1} suggested that secret number is ${playersInGame[i][k]} and won on ${i+1} attempt`);
                break;
            }
            else {
                console.log(`player${k + 1} suggested that secret number is ${playersInGame[i][k]} and lost`);
            }
        }
        if (attemp == secret) break;
    }
}

game(players, attemps, range, secret); //tests
