
//Values are set
letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
wins = 0;
losses = 0;
guessesLeft = 10;


//Computer picks a letter and gets stored as computerChoice
var computerChoice = function () {

    // guessesSoFar = 0;
    var computerCurrentChoice = letters[Math.floor(Math.random() * letters.length)]
    console.log("computerChoice " + computerCurrentChoice);
    document.onkeypress = function (event) {
        var userGuess = event.key;
        console.log("userGuess      " + userGuess);


        // if the user and the computer choose the same letter: wins adds 1, alert is launched
        if (userGuess === computerCurrentChoice) {
            wins++;
            computerChoice;
            // guessesLeft = 10;
            alert("You won!!!");
            // console.log("computerChoice " + computercurrentChoice);


            // if userGuess and computerChoice are different: guessesLeft decreases 1, guessesSoFar increases 1
        } else {
            guessesLeft--;
            console.log(computerChoice);
            console.log("computerChoice " + computerCurrentChoice);

            if (guessesLeft < 1) {
                alert("You lose!");
                losses++;
                guessesLeft = 10;

            }
        }

        
        // Rewrites the html with updated values
        document.getElementById('wins').innerHTML = "Wins: " + wins;
        document.getElementById('losses').innerHTML = "Losses: " + losses;
        document.getElementById('guessesLeft').innerHTML = "Guesses Left: " + guessesLeft;
        // document.getElementById('guessesSoFar').innerHTML = "Guesses So Far: " + guessesSoFar;
    }
};
computerChoice();









