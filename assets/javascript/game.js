
//Values are set
lettersIndex = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

wins = 0;
losses = 0;
guessesLeft = 9;
guessesSoFar = []; // this is an array value



//Computer picks a letter and gets stored as computerChoice
var computerChoice = function () { // ELIMINATING THE FUNCTION HAD NO EFFECT ON PROGRAM WORKABILITY



    // when User presses key it launches a function that stores the letter value
    document.onkeypress = function (event) {

        var userGuess = event.key;
        console.log("userGuess      " + userGuess);
        
        // computer chooses a letter and it is assigned a variable name
        var computerCurrentChoice = lettersIndex[Math.floor(Math.random() * lettersIndex.length)];
        console.log(" 1 computerCurrentChoice " + computerCurrentChoice);


        // If the user and the computer choose the same letter: 
        // wins adds 1, 
        // guessesLeft is reset to 9, 
        //guessesSoFar logs the letter choice into array
        //alert is launched notifying user of win
        if (userGuess === computerCurrentChoice) {
            wins++;
            guessesLeft = 9;
            guessesSoFar = [];
            alert("You won!!!");

            // if userGuess and computerChoice are different: 
            // guessesLeft decreases 1, 
            //guessesSoFar logs the letter choice into array
        } 
        
        if (userGuess != computerCurrentChoice) {
            guessesLeft--;
            guessesSoFar.push(userGuess)

            // if guesses left reached 0:
            //alert is launched notifying user of loss
            // guessesLeft and guessesSoFar are reset to 10 and 0 respectively,
            // losses adds 1
        
        if (guessesLeft < 1) {
                alert("You lose!");
                guessesLeft = 9;
                guessesSoFar = [];
                losses++;
            }
        }

        // Rewrites the html with updated values
        document.getElementById('wins').innerHTML = "Wins: " + wins;
        document.getElementById('losses').innerHTML = "Losses: " + losses;
        document.getElementById('guessesLeft').innerHTML = "Guesses Left: " + guessesLeft;
        document.getElementById('guessesSoFar').innerHTML = "Guesses So Far: " + guessesSoFar;

        console.log(" 2 computerCurrentChoice " + computerCurrentChoice);
    }

};


 computerChoice(); // ELIMINATING THE FUNCTION HAD NO EFFECT ON PROGRAM WORKABILITY










