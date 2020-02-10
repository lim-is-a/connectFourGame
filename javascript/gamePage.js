console.log('hello, you are connected');
let gameStarted = false;
let currentPlayer = 0;
let gameBoard = [];
// let p1TotalScoreDiv = document.getElementById('p1ScoreTotal').innerHTML;
// let p2TotalScoreDiv = document.getElementById('p2ScoreTotal').innerHTML;
let player1TotalScore = 0;
let player2TotalScore = 0;

// get start button to start game
let startGameButton = document.getElementsByClassName('start')[0];
startGameButton.addEventListener('click', startGame);

// let resetBoardButton = document.getElementsByClassName('reset')[0];
// resetBoardButton.addEventListener('click', resetBoard)


// function to check if game has started 
function startGame(){
    if (gameStarted === true){
        return 0;
    }
    else{
        gameStarted = true;
    }
    // clean board for new game
    resetBoard()
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
    if(gameStarted){
        console.log('dropped piece in column: ' + y)
    // loop through each row starting at the last row
        for(let x=5; x >= 0; x--){
            // if no game piece is there, then place current player game piece
            if(gameBoard[x][y] == 0){
                gameBoard[x][y] = currentPlayer; 
                reDrawBoard();
                checkHorizontal4();
                checkVertical4();
                checkDownDiagonal();
                checkUpDiagonal();
                // check which player is currently playing and change it to the other player
                // if its player 1 then change to 2
                if (currentPlayer == 1){
                    currentPlayer = 2;
                    console.log("player 2's turn");
                }
                // if its not player 1 then its player 2, so change to player 1.
                else{
                    currentPlayer = 1;
                    console.log("player 1's turn");
                }
                // return something to stop checking for empty spots once player drops piece
                return 0;
            }
        }
    }
    else{
        alert("You must start a new game!")
    }
    
}
// make a function to check if any player has won by 4 game pieces in a row horizontal
let player1Qty=0;
let player2Qty=0;

function checkHorizontal4(){
    for (let x = 5; x >= 0; x--){
        player1Qty = 0;
        player2Qty = 0;
        for (let y = 0; y <= 6; y++){
            if (player1Qty === 4){
                player1TotalScore ++;
                updateTotalScores()
                alert('player 1 wins!')
                gameStarted = false
                return 0;
            }else if(player2Qty === 4){
                player2TotalScore ++;
                updateTotalScores()
                alert('player 2 wins!')
                gameStarted = false
                return 0;
            }
            if(gameBoard[x][y] === 1){
                player2Qty = 0;
                player1Qty ++;
                // console.log('player2 qty: ' +player2Qty )
                // console.log('player1 qty: ' +player1Qty )
            } 
            else if (gameBoard[x][y] === 2){
                player1Qty = 0;
                player2Qty ++;
                // console.log('player2 qty: ' +player2Qty )
                // console.log('player1 qty: ' +player1Qty )
            }
        }
    }
}

// check for win vertical
function checkVertical4(){
    for (let y = 0; y <= 6; y++){
        player1Qty = 0;
        player2Qty = 0;
        for (let x = 5; x >= 0; x--){
            if (player1Qty === 4){
                player1TotalScore ++;
                updateTotalScores()
                alert('player 1 wins!')
                gameStarted = false
                return 0;
            }else if(player2Qty === 4){
                player2TotalScore ++;
                updateTotalScores()
                alert('player 2 wins!')
                gameStarted = false
                return 0;
            }
            if(gameBoard[x][y] === 1){
                player2Qty = 0;
                player1Qty ++;
                // console.log('player2 qty: ' +player2Qty )
                // console.log('player1 qty: ' +player1Qty )
            } 
            else if (gameBoard[x][y] === 2){
                player1Qty = 0;
                player2Qty ++;
                // console.log('player2 qty: ' +player2Qty )
                // console.log('player1 qty: ' +player1Qty )
            }
        }
    }
}

// check for down-facing diagonal
function checkDownDiagonal(){
    for(let x = 0; x <= 3; x++){
        for(let y = 0; y <= 2; y++){
            if (gameBoard[x][y] === 1){
                if((gameBoard[x+1][y+1] === 1) && (gameBoard[x+2][y+2] === 1) && (gameBoard[x+3][y+3] === 1)){
                    player1TotalScore ++;
                    updateTotalScores()
                    alert('player 1 wins!')
                    gameStarted = false
                    return 0;
                }
            }
            if (gameBoard[x][y] === 2){
                if((gameBoard[x+1][y+1] === 2) && (gameBoard[x+2][y+2] === 2) && (gameBoard[x+3][y+3] === 2)){
                    player2TotalScore ++;
                    updateTotalScores()
                    alert('player 2 wins!')
                    gameStarted = false
                    return 0;
                }
            }
        }
    }
}

// check for up-facing diagonal
function checkUpDiagonal(){
    for(let x = 0; x <= 3; x++){
        for(let y = 3; y <= 5; y++){
            if (gameBoard[x][y] === 1){
                if((gameBoard[x+1][y-1] === 1) && (gameBoard[x+2][y-2] === 1) && (gameBoard[x+3][y-3] === 1)){
                    player1TotalScore ++;
                    updateTotalScores()
                    alert('player 1 wins!')
                    gameStarted = false
                    return 0;
                }
            }
            if (gameBoard[x][y] === 2){
                if((gameBoard[x+1][y-1] === 2) && (gameBoard[x+2][y-2] === 2) && (gameBoard[x+3][y-3] === 2)){
                    player2TotalScore ++;
                    updateTotalScores()
                    alert('player 2 wins!')
                    gameStarted = false
                    return 0;
                }
            }
        }
    }
}

// add score totals
function updateTotalScores(){
    document.getElementById('p1ScoreTotal').innerHTML = "Player 1: " + player1TotalScore
    document.getElementById('p2ScoreTotal').innerHTML = "Player 2: " + player2TotalScore
}

// clear out board
function resetBoard(){
    // loop through the entire gameBoard 
    for(let x=0; x <= 5; x++){
        for (let y=0; y<=6; y++){
            // if a player, 1 or 2, dropped their piece the value change will add class player 1 or 2.
            // this will change the color to reflect who owns the hole on the board.
                document.getElementById("hole-" + x + "-" + y).classList.remove("player1");
                document.getElementById("hole-" + x + "-" + y).classList.remove("player2");
        }
    }
}

// commented out resetScore logic to now just refresh the page entirely.
// resets the score and redraws the board to start fresh
// function resetScore(){
//     player1TotalScore = 0;
//     player2TotalScore = 0;
//     gameStarted = false;
//     for(let x=0; x <= 5; x++){
//         gameBoard[x] = [];
//         for (let y=0; y<=6; y++){
//             gameBoard[x][y] = 0;
//         }
//     }
//     updateTotalScores();
//     resetBoard();
// }