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
    // set all values of start gameboard to 0
    for(let x=0; x <= 5; x++){
        gameBoard[x] = [];
        for (let y=0; y<=6; y++){
            gameBoard[x][y] = 0;
        }
    }
}
// display updated board after a piece is dropped 
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
