// Name: Gary Vu
// Date: January 18, 2019
// Description:	This JavaScript Code is to go along with the luckySevens HTML
//				to create the Lucky Sevens Game.
//				The functions created are:
//						- A clearing Function (to clear errors coming from User)
//						- A rolling the die Function (to be called while the game is played)
//						- A play Function to launch the game sequence of Lucky Seven

function clearErrors() { // Function used as given in the previous Coding Exercise
    for (var loopCounter = 0; loopCounter < document.forms["betFun"].elements.length; loopCounter++) {
        if (document.forms["betFun"].elements[loopCounter]
            .parentElement.className.indexOf("has-") != -1) {

            document.forms["betFun"].elements[loopCounter]
                .parentElement.className = "form-group";
        }
    }
}


function rollDie() {	// Function used and defined from the Code Along
    return Math.floor(Math.random() * 6) + 1;
}

function play() {

    var bet = document.forms["betFun"]["bet"].value;			// Storing value from User Inputted 
																// from the Bet Input Box into "bet" variable
																
	if (bet == "" || isNaN(bet) || bet <= 0) {					// Checking if the User input is correct or not
        alert("You must place a Real bet.");					// Webpage Alerting the User from bad input
        document.forms["betFun"]["bet"]
            .parentElement.className = "form-group has-error";
        return false;
    }


    var currentPot = bet;							// Storing "bet" into variable currentPot						
    var die1 = 0;									// Defining First Die
    var die2 = 0;									// Defining Second Die
    var dice = 0;									// Defining Dice
    var mostWon = bet;								// Storing "bet" into mostWon 
    var turnsAtMostWon = 0;							// Roll count at Most Winning stored into TurnsAtMostWon variable
    var totalTurns = 0;								// Roll Counter

	if (bet == 1) {    								// If the starting bet is $1?
		totalTurns++								// Start Countint Rolls
        die1 = rollDie();							// Roll First Die
        die2 = rollDie();							// Roll Second Die
        dice = die1 + die2;							// Setting Dice Value
	
        if (dice == 7) {							// If a 7 is rolled
			//currentPot = bet;
            currentPot = currentPot + 4;			// Current Pot Increases by $4
        } 
		
		else {										// If no 7
			mostWon = 1;							// Most Held Money was currentPot ($1)
			turnsAtMostWon = 0;						// Roll Count at Most won set to 0 since
			totalRolls = totalTurns
			
        }
	}		
    while ( (currentPot >= 1) && (bet > 1) ) {      // If the currentPot is greater or equal to $1 AND bet is greater than $1
		totalTurns++								// Starting Counting Rolls
        die1 = rollDie();							// Rolling First Die
        die2 = rollDie();							// Rolling Second Die
        dice = die1 + die2;							// Setting Dice Value

        if (dice == 7) {							// If a 7 is rolled
            currentPot = currentPot + 4;			// Current Pot increases by $4
        } 	
		
		else {										// If no 7
            currentPot = currentPot - 1;			// Deduced $1 from the bet
        }

        if (mostWon <= currentPot) {				// If PREVIOUS BET is lower than CURRENT BET
            mostWon = currentPot;					// Store the CURRENT BET into PREVIOUS BET
            turnsAtMostWon = totalTurns;			// Soring the roll count at the highest Winning
        }
    }
											
	

    document.getElementById("results").style.display = "block";									// Show Results Table
	document.getElementById("submitButton").innerText = "Play Again?";							// Change the Play button to Play Again
    document.getElementById("startingBet").innerText = document.forms["betFun"]["bet"].value;	// Set Starting Bet table Value to bet variable
    document.getElementById("totalRolls").innerText = totalTurns;								// Set total Rolls to totalTurns Value
    document.getElementById("mostWon").innerText = mostWon;										// Set mostWon table value to mostWon variable
    document.getElementById("totalRollsToBest").innerText = turnsAtMostWon;						// Set totalRollsToBest table value to TurnsAtMostWon variable

    return false;

}