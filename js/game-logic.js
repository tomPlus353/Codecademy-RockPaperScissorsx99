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

//takes in string and checks if it is rock/paper/scissors
function isValidMove(move) {
	if(move == 'rock' || move == 'scissors' || move == 'paper'){
		return true
	}
	else{
		return false
	}
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function setComputerMoves(){
	playerTwoMoveOneType = ['rock','scissors','paper'][getRandomInt(3)]
	playerTwoMoveTwoType = ['rock','scissors','paper'][getRandomInt(3)]
	playerTwoMoveThreeType = ['rock','scissors','paper'][getRandomInt(3)]
	max = 99
	playerTwoMoveOneValue = getRandomInt(max)
	playerTwoMoveTwoValue = getRandomInt(max - playerTwoMoveOneValue)
	playerTwoMoveThreeValue =  (max - playerTwoMoveOneValue) - playerTwoMoveTwoValue

}

function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue){
	if (moveOneValue + moveTwoValue + moveThreeValue == 99){
	if (isValidMove(moveOneType) && isValidMove(moveTwoType) && isValidMove(moveThreeType)) {

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

//setPlayerMoves('Player One', 'rock', 33, 'rock', 33, 'paper', 33)
//setPlayerMoves('Player Two', 'rock', 34, 'rock', 12, 'rock', 53)

function getRoundWinner(roundNo) {
	if (roundNo >= 1 && roundNo <= 3)
	{
	//round 1
	if (roundNo === 1){
		let p1v = playerOneMoveOneValue
		let p1t = playerOneMoveOneType
		let p2v = playerTwoMoveOneValue
		let p2t = playerTwoMoveOneType
	if (typeof(p1v) == 'undefined' || typeof(p1t) == 'undefined' || typeof(p2v) == 'undefined' || typeof(p2t) == 'undefined'){
		return null
	}
	if (p1t == p2t && p1v == p2v) {
		return 'Tie'
	}
	if ((p1t === 'rock' && p2t === 'scissors') || (p1t === 'paper' && p2t === 'rock')|| (p1t === 'scissors' && p2t === 'paper') || (p2t == p1t && p1v > p2v)){
		return 'Player One'
	}
	if (p2t === 'rock' && p1t === 'scissors' || p2t === 'paper' && p1t === 'rock'|| p2t === 'scissors' && p1t === 'paper'|| p1t === p2t && p2v > p1v) {
		return 'Player Two'
	}
	}
	// round 2
	else if (roundNo === 2){
		let p1v = playerOneMoveTwoValue
		let p1t = playerOneMoveTwoType
		let p2v = playerTwoMoveTwoValue
		let p2t = playerTwoMoveTwoType
	if (typeof(p1v) == 'undefined' || typeof(p1t) == 'undefined' || typeof(p2v) == 'undefined' || typeof(p2t) == 'undefined'){
		return null
	}
	if (p1t == p2t && p1v == p2v) {
		return 'Tie'
	}
	if ((p1t === 'rock' && p2t === 'scissors') || (p1t === 'paper' && p2t === 'rock')|| (p1t === 'scissors' && p2t === 'paper') || (p2t == p1t && p1v > p2v)){
		return 'Player One'
	}
	if (p2t === 'rock' && p1t === 'scissors' || p2t === 'paper' && p1t === 'rock'|| p2t === 'scissors' && p1t === 'paper'|| p1t === p2t && p2v > p1v) {
		return 'Player Two'
	}
	}
	//round 3
	else if (roundNo === 3){
		let p1v = playerOneMoveThreeValue
		let p1t = playerOneMoveThreeType
		let p2v = playerTwoMoveThreeValue
		let p2t = playerTwoMoveThreeType
	if (typeof(p1v) == 'undefined' || typeof(p1t) == 'undefined' || typeof(p2v) == 'undefined' || typeof(p2t) == 'undefined'){
		return null
	}
	if (p1t == p2t && p1v == p2v) {
		return 'Tie'
	}
	if ((p1t === 'rock' && p2t === 'scissors') || (p1t === 'paper' && p2t === 'rock')|| (p1t === 'scissors' && p2t === 'paper') || (p2t == p1t && p1v > p2v)){
		return 'Player One'
	}
	if (p2t === 'rock' && p1t === 'scissors' || p2t === 'paper' && p1t === 'rock'|| p2t === 'scissors' && p1t === 'paper'|| p1t === p2t && p2v > p1v) {
		return 'Player Two'
	}

	}
	
} 
else {
	return null
}
}

function getGameWinner(){
	let p1score = 0
	let p2score = 0
	if (typeof(playerOneMoveOneType) === 'undefined' || 
typeof(playerOneMoveOneValue) === 'undefined' ||
typeof(playerOneMoveTwoType) === 'undefined' ||
typeof(playerOneMoveTwoValue) === 'undefined' ||
typeof(playerOneMoveThreeType) === 'undefined' ||
typeof(playerOneMoveThreeValue) === 'undefined' ||
typeof(playerTwoMoveOneType) === 'undefined' ||
typeof(playerTwoMoveOneValue) === 'undefined' ||
typeof(playerTwoMoveTwoType) === 'undefined' ||
typeof(playerTwoMoveTwoValue) === 'undefined' ||
typeof(playerTwoMoveThreeType) === 'undefined' ||
typeof(playerTwoMoveThreeValue) === 'undefined'){
		return null
	}
	for (let i=1;i<4;i++){
		let winner = getRoundWinner(i)
		if (winner === 'Player One'){
			p1score = 1 + p1score;
			} else if (winner === 'Player Two') {
				p2score = 1 + p2score;
			}
			else if(winner === 'Tie'){
				//do nothing
			}
		
		//console.log(p1score, p2score, winner);
	}
	if (p1score > p2score){
		return 'Player One'
	}
	else if (p2score > p1score) {
		return 'Player Two'
		}
	else if (p2score === p1score) {
		return 'Tie'
	}
	}
//console.log(getGameWinner())

