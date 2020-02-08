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

}
