$(function () {
	
var playerToken = prompt('Would you like to use x or o?').toLowerCase();
var tokenIsValid = true;
validate();
	
//make sure player has chosen either x or o
function validate() {
	if (playerToken!=='x' && playerToken!=='o'){
		tokenIsValid = false;
		while (!tokenIsValid){
			playerToken = prompt("Please choose valid token - enter either 'x' or 'o':");
			if (playerToken==='x' || playerToken==='o'){
				tokenIsValid = true;
			}
		}
	}
}
	
var computerToken = playerToken==='x' ? 'o' : 'x';
//	alert(computerToken);

	
//i use this array to push one element each time the computer or player makes a selection and when the array is equal to 9, I know the game board is full and the game is a tie --> tieGame()
var completeArray = [];
	
$('.tile').click(function(){
	if ($(this).text()===''){
		$(this).text(playerToken);
		completeArray.push(playerToken);
		checkForCompletion();
		
		computerChoice();
		checkForCompletion();
		checkForVictory();
		
	}
});
	
$('#reset').click(function() {
	resetBoard();
	playerToken = prompt('Would you like to use x or o?').toLowerCase();
	validate();
});


function computerChoice() {
	var validSquare = true;
	var squareChoice = Math.floor(Math.random() * 9) + 1;
	completeArray.push(computerToken);
	if ($('#square'+squareChoice).text() === ''){
		$('#square'+squareChoice).text(computerToken);
	} else {
		validSquare = false;
		while (!validSquare){
			squareChoice = Math.floor(Math.random() * 9) + 1;
			if ($('#square'+squareChoice).text() === ''){
				$('#square'+squareChoice).text(computerToken);
				validSquare = true;
			}
		}
	}
}
	
function checkForCompletion() {
	if (completeArray.length === 9){
		tieGame();
	}
}
	
function checkForVictory() {
	//check to see if rows match
		if($('#square1').text()===$('#square2').text()===$('#square3').text()){
			if ($('#square1').text()===playerToken){
				playerWins();
			} else {
				computerWins();
			}
		}
	//check to see if columns match
		$('#square'+squareChoice).text();
	//check to see if diagnal matches
		$('#square'+squareChoice).text();
}

function tieGame () {
	alert("It's a draw!");
	resetBoard();
}

function computerWins() {
	alert("Sorry, you lost...");
	resetBoard();
}

function playerWins () {
	alert("Congrats, you win!");
	resetBoard();
}

function resetBoard () {
	
	playerToken = prompt('Would you like to use x or o?').toLowerCase();
	validate();
	$('.tile').text('');
}

});