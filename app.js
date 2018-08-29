var score, activePlayer, roundScore;
score = [0, 0];
activePlayer = 0;
roundScore = 0;

document.querySelector("#score-0").textContent = "0";
document.querySelector("#score-1").textContent = "0";
document.querySelector("#current-0").textContent = "0";
document.querySelector("#current-1").textContent = "0";

document.querySelector("#dice-1").style.display = "none";

// roll dice for active player
document.querySelector(".btn-roll").addEventListener('click', function(){
	console.log("rolled")
	var dice = Math.floor(Math.random()*6) + 1 //Genrate random number b/w 1 to 6
	var diceDoc = document.querySelector("#dice-1");
	diceDoc.style.display = "block";
	diceDoc.src = 'dice-' + dice + '.png';
	if(dice != 1){
		roundScore += dice;
		document.querySelector("#current-"+activePlayer).textContent = roundScore;
	}else{
		roundScore = 0;
		diceDoc.style.display = "none";
		document.querySelector("#current-"+activePlayer).textContent = 0;
		activePlayer = activePlayer == 1 ? 0 : 1;
		console.log(activePlayer);
	}
})

//Hold the round value
document.querySelector(".btn-hold").addEventListener('click', function(){
	score[activePlayer] += roundScore;
	document.querySelector("#score-"+activePlayer).textContent = score[activePlayer];
	roundScore = 0;
	var diceDoc = document.querySelector("#dice-1");
	diceDoc.style.display = "none";
	document.querySelector("#current-"+activePlayer).textContent = 0;
	activePlayer = activePlayer == 1 ? 0 : 1;
})




