// All code should be written in this file.
// Twelve global variables representing each player’s move types and values (3 move types and 3 move values for each player). These variable names should be in the form of playerOneMoveOneType, playerOneMoveOneValue, etc.

//A function called setPlayerMoves, which will take a string representing a player (in the form of 'Player One' or 'Player Two'), three move types, and three move values, and set the correct global move variables. The method signature for this function should be as follows: setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue).

//A function called getRoundWinner, which takes a round number (1, 2, or 3), compares both player’s move types and values for that round, and returns the appropriate winner ('Player One', 'Player Two', or 'Tie')

//A function called getGameWinner, which compares both player’s move types and values for the whole game and returns the appropriate winner ('Player One', 'Player Two', or 'Tie')



//Bonus: A function called setComputerMoves, which chooses three random moves for player two. The move type for each move should be completely random, and the move values should be random but add up to 99.

let playerOneMoveOneType
let playerOneMoveOneValue
let playerOneMoveTwoType
let playerOneMoveTwoValue
let playerOneMoveThreeType
let playerOneMoveThreeValue
let playerTwoMoveOneType
let playerTwoMoveOneValue
let playerTwoMoveTwoType
let playerTwoMoveTwoValue
let playerTwoMoveThreeType
let playerTwoMoveThreeValue

//function setComputerMoves(){
	////1. 3 random moves
//}

function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue){
	if (moveOneValue + moveTwoValue + moveThreeValue == 99){
	if (moveOneType == 'rock' || 'scissors' || 'paper'&& moveTwoType == 'rock' || 'scissors' || 'paper' && moveThreeType == 'rock' || 'scissors' || 'paper') {

		if (player == 'Player One'){
			playerOneMoveOneType = moveOneType
			playerOneMoveOneValue = moveOneValue
			playerOneMoveTwoType = moveTwoType
			playerOneMoveTwoValue = moveTwoValue
			playerOneMoveThreeType = moveThreeType
			playerOneMoveThreeValue = moveThreeValue
		}
			else if (player == 'Player Two'){
			playerTwoMoveOneType = moveOneType
			playerTwoMoveOneValue = moveOneValue
			playerTwoMoveTwoType = moveTwoType
			playerTwoMoveTwoValue = moveTwoValue
			playerTwoMoveThreeType = moveThreeType
			playerTwoMoveThreeValue = moveThreeValue
		}
	}
	}
}

function getRoundWinner(roundNo) {
	if (roundNo >= 1 && roundNo <= 3)
	{
	if (roundNo === 1){
		p1v = playerOneMoveOneValue.
		p1t = playerOneMoveOneType
		p2v = playerTwoMoveOneValue
		p2t = playerTwoMoveOneType
	}
	else if (roundNo === 2){
		p1v = playerOneMoveTwoValue
		p1t = playerOneMoveTwoType
		p2v = playerTwoMoveTwoValue
		p2t = playerTwoMoveTwoType
	}
	else if (roundNo === 3){
		p1v = playerOneMoveThreeValue
		p1t = playerOneMoveThreeType
		p2v = playerTwoMoveThreeValue
		p2t = playerTwoMoveThreeType
	}
	//const isTrue = (element) => element === true;
	p1win = []
	p2win = []
	if ((p2t === 'scissors' && p1t === 'rock') || (p2t === 'rock' && p1t === 'paper')|| (p2t === 'paper' && p1t === 'scissors')|| (p2t == p1t && p1v > p2v)){
		return 'Player One'
	}
	else if (p1t === 'rock' && p2t === 'scissors' || p1t === 'rock' && p2t === 'paper'|| p1t === 'paper' && p2t === 'scissors'|| p1t === p2t && p2v > p1v) {
		return 'Player Two'
	}
	else if (p1t == p2t && p1v == p2v) {
		return 'Tie'
	}
} 
else {
	return null
}
}

function getGameWinner(){
	let p1score
	let p2score
	for (let i=1;i<4;i++){
		switch(getRoundWinner(i)){
			case 'Player One':
			p1score += 1
			break
			case 'Player Two':
			p2score += 1
			break
			case 'Tie':
			break 
		}
	}
	if (p1score > p2score){
		return 'Player One'
	}
	else if (p2score > p1score) {
		return 'Player Two'
		}
	else {
		return 'Tie'
	}
	}


