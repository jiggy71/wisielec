var to_guess = "Bez pracy nie ma kołaczy";
to_guess = to_guess.toUpperCase();
var guessed = Mask(to_guess);
const LETTERS = "AĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUVWXYZŻŹ";

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
	for (i=0; i<to_guess.length; i++)	{
		if (to_guess.charAt(i) == LETTERS.charAt(number))	{
			guessed = guessed.substring(0, i) + LETTERS.charAt(number) + guessed.substring(i+1);
		} 
	}
	PrintTo_Guess(guessed);
}

function Start()	{
	CreateKeyboard();
	PrintTo_Guess(guessed);
}

window.onload = Start;
