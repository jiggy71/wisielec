var to_guess = "Ala ma kota";
to_guess = to_guess.toUpperCase();
var guessed = Mask(to_guess);
const LETTERS = "AĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUVWXYZŻŹ";
var gallows_lewel = 0;

var audioYes = new Audio('yes.wav');
var audioNo = new Audio('no.wav');

function Mask(text)	{
	var result = "";
	for (i=0; i<text.length; i++)	{
		if (text.charAt(i) == " ")	{
			result = result + " ";
		} else	{
			result = result + "-";
		}
	}
	return result;
}

function PrintTo_Guess(text)	{
	document.getElementById('board').innerHTML = text;
}

function CreateKeyboard()	{
	var index = 0;
	var content = "";
	
	for (i=1; i<=5; i++)	{
		for (j=1; j<=7; j++)	{
			content = content + '<div class="button" id="btn' + index + '" onclick="Check(' + index + ')">' + LETTERS.charAt(index++) + '</div>';
		}
		content = content + '<div style="clear: both;"></div>';
	}
	document.getElementById('keyboard').innerHTML = content;
}

function Check(number)	{
	var isCorrect = false;
	for (i=0; i<to_guess.length; i++)	{
		if (to_guess.charAt(i) == LETTERS.charAt(number))	{
			guessed = guessed.substring(0, i) + LETTERS.charAt(number) + guessed.substring(i+1);
			isCorrect = true;
		} 
	}
	PrintTo_Guess(guessed);
	
	var actual_div = "btn" + number;
	document.getElementById(actual_div).setAttribute("onclick", ";");
	
	if (isCorrect) {
		audioYes.play();
		document.getElementById(actual_div).className = "button green";
	} else {
		audioNo.play();
		document.getElementById(actual_div).className = "button red";
		SetGallowsLevel(++gallows_lewel);
	}
	
	if (guessed == to_guess) YouWin();
}

function SetGallowsLevel(level)	{
	document.getElementById('picture').innerHTML = '<img src="img/s' + level + '.jpg" />';
	if (level >= 9) YouLoose();
}

function YouWin()	{
	document.getElementById('keyboard').innerHTML = '<h2>Brawo!</h2><h3>Udało Ci się odgadnąć!</h3><p class="but1" onclick="location.reload();">Gram jeszcze raz</p>';
}

function YouLoose()	{
	document.getElementById('keyboard').innerHTML = '<h2>No niestety...</h2><h3>Nie udało Ci się odgadnąć.</h3><p class="but1" onclick="location.reload();">Gram jeszcze raz</p>';
	PrintTo_Guess(to_guess);
}


function Start()	{
	CreateKeyboard();
	PrintTo_Guess(guessed);
}

window.onload = Start;
