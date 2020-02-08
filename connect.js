console.log('hello, you are connected');
let gameStarted = false;
let currentPlayer = 0;
let gameBoard = [];
// function to check if game has started 
function startGame(){
    if (gameStarted == true){
        return 0;
    }
    else{
        gameStarted === true;
    }
    // set all values of starting gameboard to 0
    for(let x=0; x <= 5; x++){
        gameBoard[x] = [];
        for (let y=0; y<=6; y++){
            gameBoard[x][y] = 0;
        }
    }
    // callback function to redraw board and set current player as player 1
    reDrawBoard();
    currentPlayer = 1;
}
// function to display updated board after a piece is dropped 
function reDrawBoard(){
    // loop through the entire gameBoard 
    for(let x=0; x <= 5; x++){
        for (let y=0; y<=6; y++){
            // if a player, 1 or 2, dropped their piece the value change will add class player 1 or 2.
            // this will change the color to reflect who owns the hole on the board.
            if(gameBoard[x][y] == 1){
                document.getElementById("hole-" + x + "-" + y).classList.add("player1");
            }
            else if( gameBoard[x][y] == 2){
                document.getElementById("hole-" + x + "-" + y).classList.add("player2");
            }
        }
    }
}
// function for current player dropping game piece in empty game hole
function dropGamePiece(y){
    // loop through each row starting at the last row
    for(let x=5; x >= 0, x--){
        // if no game piece is there, then place current player game piece
        if(gameBoard[x][y] == 0){
            gameBoard[x][y] = currentPlayer; 
            reDrawBoard();
            // check which player is currently playing and change it to the other player
            // if its player 1 then change to 2
            if (currentPlayer == 1){
                currentPlayer = 2;
            }
            // if its not player 1 then its player 2, so change to player 1.
            else{
                currentPlayer = 1;
            }
        }
        // return something to stop checking for empty spots once player drops piece
        return 0;
    }
}
