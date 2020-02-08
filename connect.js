console.log('hello, you are connected');
let gameStarted = false;
let currentPlayer = 0;
let gameBoard = [];
// check if game has started
function startGame(){
    if (gameStarted == true){
        return 0;
    }
    else{
        gameStarted === true;
    }
    for(let x=0; x <= 5; x++){
        gameBoard[x] = [];
        for (let y=0; y<=6; y++){
            gameBoard[x][y] = 0;
        }
    }
}