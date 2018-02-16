
//Values are set
letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
wins = 0;
losses = 0;
guessesLeft = 10;
guessesSoFar = 0;

//Computer picks a letter and gets stored as computerChoice
var computerChoice = function () {

    // computer chooses a letter and it is assigned a variable name
    var computerCurrentChoice = letters[Math.floor(Math.random() * letters.length)];
    console.log("current Choice " + computerCurrentChoice);

    // when User presses key it launches a function that stores the letter value
    document.onkeypress = function (event) {
        var userGuess = event.key;
        console.log("userGuess      " + userGuess);


        // If the user and the computer choose the same letter: 
        // wins adds 1, 
        // guessesLeft and guessesSoFar are reset to 10 and 0 respectively, 
        //alert is launched notifying user of win
        if (userGuess === computerCurrentChoice) {
            wins++;
            guessesLeft = 10;
            guessesSoFar = 0;
            alert("You won!!!");


            // if userGuess and computerChoice are different: 
            // guessesLeft decreases 1, 
            // guessesSoFar increases 1
        } else {
            guessesLeft--;
            guessesSoFar++;

            // if guesses left reached 0:
            //alert is launched notifying user of loss
            // guessesLeft and guessesSoFar are reset to 10 and 0 respectively,
            // losses adds 1
            if (guessesLeft < 1) {
                alert("You lose!");
                guessesLeft = 10;
                guessesSoFar = 0;
                losses++;
            }
        }

        // Rewrites the html with updated values
        document.getElementById('wins').innerHTML = "Wins: " + wins;
        document.getElementById('losses').innerHTML = "Losses: " + losses;
        document.getElementById('guessesLeft').innerHTML = "Guesses Left: " + guessesLeft;
        document.getElementById('guessesSoFar').innerHTML = "Guesses So Far: " + guessesSoFar;
    }
};
computerChoice();









