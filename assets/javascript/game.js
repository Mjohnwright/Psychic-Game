
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// Variables for tracking our wins, losses and ties. They begin at 0.




//Computer guess letter and gets stored


var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
                        console.log(computerChoice);

document.onkeypress = function (event) {

    var wins = 1;
    var losses = 0;
    var guessesLeft = 9;
    var guessesSoFar = 0;

    var userGuess = event.key; // creates a value for user keystroke 
                    console.log(userGuess); //logs is so it is visible in CL
    
    if (userGuess === computerChoice) {
        wins++;
        guessesLeft = 9;
        guessesSoFar = 0;
        alert("You won!!!");
        // document.getElementById('wins').innerHTML = "Wins: " + x;
        
        // if userGuess and computerChoice are = then Wins go up by 1
                    // console.log(wins);
    } else {

        guessesLeft--; //if the letters do no match then guessesLeft lessen by 1
                    // console.log(guessesLeft);
        guessesSoFar++;
                        console.log(guessesSoFar);
    }
    if (guessesLeft = 0) {
        losses++; // if guessesLeft = 0 then Loss = 0
    }

    // else {
    //     alert("Only lowercase a-z allowed.");
    // }

    // var i = 10; i > guessesLeft; i--;
    // Logs the animal at index position i to the console. This code is executed each we go through the loop.
                        // console.log(i);

    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "Losses: " + losses;
    document.getElementById('guessesLeft').innerHTML = "Guesses Left: " + guessesLeft;
    document.getElementById('guessesSoFar').innerHTML = "Guesses So Far: " + guessesSoFar;

  

};

   




