var possible = [];
var matchFound = false;
var question;

//--------------------Question Sets(female)--------------------
function question1() {
	question = confirm("Do you like tall men?\n(Ok for yes, Cancel for no)");
	if (question) {
		return true;
	} else {
		return false;
	}
}

function question2() {
	question = confirm("Do you like smart men?\n(Ok for yes, Cancel for no)");
	if (question) {
		return true;
	} else {
		return false;
	}
}

function question3() {
	question = confirm("Do you like transformers?\n(Ok for yes, Cancel for no)");
	if (question) {
		return true;
	} else {
		return false;
	}
}

function question4() {
	question = confirm("Do you like muscular men?\n(Ok for yes, Cancel for no)");
	if (question) {
		return true;
	} else {
		return false;
	}
}

function question5() {
	question = confirm("Do you like men with curly hair?\n(Ok for yes, Cancel for no)");
	if (question) {
		return true;
	} else {
		return false;
	}
}

function question6() {
	question = confirm("Do you like baseball players?\n(Ok for yes, Cancel for no)");
	if (question) {
		return true;
	} else {
		return false;
	}
}

//------------------------------------------------------


//--------------------Question Sets(male)--------------------


function fquestion1() {
	question = confirm("Do you like adventurous women?\n(Ok for yes, Cancel for no)");
	if (question) {
		return true;
	} else {
		return false;
	}
}

function fquestion2() {
	question = confirm("Do you enjoy killing the British?\n(Ok for yes, Cancel for no)");
	if (question) {
		return true;
	} else {
		return false;
	}
}

function fquestion3() {
	question = confirm("Do you like women who work desk jobs?\n(Ok for yes, Cancel for no)");
	if (question) {
		return true;
	} else {
		return false;
	}
}

function fquestion4() {
	question = confirm("Do you like transformers?\n(Ok for yes, Cancel for no)");
	if (question) {
		return true;
	} else {
		return false;
	}
}

function fquestion5() {
	question = confirm("Do you ACTUALLY love your wife Jackie?\n(Ok for yes, Cancel for no)");
	if (question) {
		return true;
	} else {
		return false;
	}
}

function fquestion6() {
	question = confirm("Given the choice, would you change your name to John or Bill?\n(Ok for John, Cancel for Bill)");
	if (question) {
		return true;
	} else {
		return false;
	}
}



//-----------------------------------------------------------


//---------------------BS Questions---------------------

var bsq = ["What is your favorite color", "How many hours a day do you use the internet", "What is your favorite sport", "What is your favorite movie?",
 "Do you like cats or dogs better", "What is your favorite TV show?", "What is your favorite number", "What language do you speak at home?", 
 "What is your favorite food?", "What is your favorite drink?"];

function getBsq() {
	var r = Math.floor(Math.random() * bsq.length)
	var j = bsq[r];
	//console.log("Removed: " + bsq[r]);
	bsq.splice(r, 1);
	return j;
}

function askBsq() {
	var r = Math.floor(Math.random() * bsq.length)
	var j = bsq[r];
	//console.log("Removed: " + bsq[r]);
	bsq.splice(r, 1);
	prompt(j);
}


//------------------------------------------------------

//var name = prompt("What is your name?");
//var age = prompt("What is your age?");
var gender = confirm("What is your gender?\n(Ok for male, cancel for female)");

if (!gender) {  //Female storyline (ADD STORY!!!!!!!!!!!!!)
possible = ["Andres", "Austen", "Austin", "Chase", "Jimmy", "Nate", "Nick" ];

//Do you like tall men?
if (question1()) {
	for (var i = 0; i < possible.length; i++) {
		if (possible[i].toLowerCase() === "jimmy") {
			possible.splice(i, 1);
			i = 0;
		}
	}
} else {
	possible = ["Jimmy"];
	matchFound = true;
}

//Insert 2 BS questions
askBsq();
askBsq();

//Do you like smart men?
if(question2()) {
	for (var i = 0; i < possible.length; i++) {
		if (possible[i].toLowerCase() === "nick" || possible[i].toLowerCase() === "andres") {
			possible.splice(i, 1);
			i = 0;
		}
	}
} else {
	if(!matchFound){
		possible = ["Nick", "Andres"];
		if (question3()) {
			possible = ["Nick"];
			matchFound = true;
		} else {
			possible = ["Andres"];
			matchFound = true;
		}
	}
}

//Insert BS Question
askBsq();


if(question4()) {
	for (var i = 0; i < possible.length; i++) {
		if (possible[i].toLowerCase() === "austen") {
			possible.splice(i, 1);
			i = 0;
		}
	}
} else {
	if(!matchFound) {
		possible = ["Austen"];
		matchFound = true;
	}
}

//Insert 2 BS Questions
askBsq();
askBsq();


if(question5()) {
	if (!matchFound) {
		possible = ["Chase"];
		matchFound = true;
	}
} else if(question6()) {
	if (!matchFound) {
		possible = ["Austin"];
		matchFound = true;
	}
} else if (!matchFound) {
	possible = ["Nate"];
	matchFound = true;
}




printPossible();
displayImage();


} else {   //Add male storyline
var match = "";
matchFound = false;
possible = ["joan", "saca", "monica", "trans", "marilyn"];


if (fquestion1()) {
	if (fquestion2()) {
		match = "joan"
		matchFound = true;
	} else {
		if (fquestion4()) {
			match = "trans";
			matchFound = true;
		} else {
			if(fquestion3()) {
				match = "monica";
				matchFound = true;
			} else {
				match = "saca";
				matchFound = true;
			}
		}
	}
} else {

if (fquestion5()) {
	alert("LIAR");
	if (fquestion6()) {
		if (!matchFound) {
			match="marilyn"
		}
	} else {
		if (!matchFound) {
			match = "monica"
		}
	}
} else {
	if (fquestion6()) {
		if (!matchFound) {
			match="marilyn"
		}
	} else {
		if (!matchFound) {
			match = "monica"
		}
	}
}

}


switch(match) {
	case "joan":
		document.getElementById("s1").innerHTML = "Joan of Arc";
		var image = document.getElementById("person");
		image.src = ("img/img_"+match+".JPG");
		break;
	case "trans":
		document.getElementById("s1").innerHTML = "Transformer Girl";
		var image = document.getElementById("person");
		image.src = ("img/img_"+match+".JPG");
		break;
	case "saca":
		document.getElementById("s1").innerHTML = "Sacagawea";
		var image = document.getElementById("person");
		image.src = ("img/img_"+match+".JPG");
		break;
	case "monica":
		document.getElementById("s1").innerHTML = "Monica Lewinsky";
		var image = document.getElementById("person");
		image.src = ("img/img_"+match+".JPG");
		break;
	case "marilyn":
		document.getElementById("s1").innerHTML = "Marilyn Monroe";
		var image = document.getElementById("person");
		image.src = ("img/img_"+match+".JPG");
		break;

}











printMatch();

}

function printMatch() {
	console.log(match);
}

function consolePossible() {
	for (var i = 0; i < possible.length; i++) {
		console.log(possible[i]);
	}
}

function printPossible() {
	for (var i = 0; i < possible.length; i++) {
		console.log(possible[i]);
		document.getElementById("s1").innerHTML = possible[i];
	}
}

function displayImage() {
	var image = document.getElementById("person");
	image.src = ("img/img_"+possible[0].toLowerCase()+".JPG");
}

