
//Values are set
letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

wins = 0;
losses = 0;
guessesLeft = 10;
let guessesSoFar = 0;

//function: when user preses computer key the value is logges as 'userGuess'
document.onkeypress = function(event) {
    // creates  and stores a value for user keystroke
    var userGuess = event.key;
    guessesSoFar++;
    guessesLeft--;

    console.log("computerChoice " + computerChoice);
    console.log("userGuess      " + userGuess);
    console.log("guessesSoFar   " + guessesSoFar);
    console.log("guessesLeft    " + guessesLeft);
    console.log("losses         " + losses);
    console.log("wins           " + wins);
    console.log("               USer declare letter- Stage 1");

    //Computer picks a letter and gets stored as computerChoice
    var computerChoice = letters[Math.floor(Math.random() * letters.length)];

    console.log("computerChoice " + computerChoice);
    console.log("userGuess      " + userGuess);
    console.log("guessesSoFar   " + guessesSoFar);
    console.log("guessesLeft    " + guessesLeft);
    console.log("losses         " + losses);
    console.log("wins           " + wins);
    console.log("               COMP declares letter - Stage 2");

    // if the user and the computer choose the same letter: wins adds 1, alert is launched
    if (userGuess === computerChoice) {
        wins++;
        guessesLeft = 9;
        guessesSoFar = 0;
        alert("You won!!!");

        console.log("computerChoice " + computerChoice);
        console.log("userGuess      " + userGuess);
        console.log("guessesSoFar   " + guessesSoFar);
        console.log("guessesLeft    " + guessesLeft);
        console.log("losses         " + losses);
        console.log("wins           " + wins);
        console.log("               LAST ENTRY WIN - Stage 3");


        // if userGuess and computerChoice are different: guessesLeft decreases 1, guessesSoFar increases 1
    // } else {
    //     guessesLeft = 10;

    //     console.log("computerChoice " + computerChoice);
    //     console.log("userGuess      " + userGuess);
    //     console.log("guessesLeft    " + guessesLeft);
    //     console.log("losses         " + losses);
    //     console.log("wins           " + wins);
    //     console.log("                Guesses left decreases and guesssofar increases - Stage 4");

        // if guessLeft = 0: losses goes up 1, alert is launched
    } if (guessesLeft = 0) {
        losses++;
        alert("You lose!");
        // guessesLeft = 10;
        // guessesSoFar = 0;
        
        console.log("computerChoice " + computerChoice);
        console.log("userGuess      " + userGuess);
        console.log("guessesSoFar   " + guessesSoFar);
        console.log("guessesLeft    " + guessesLeft);
        console.log("losses         " + losses);
        console.log("wins           " + wins);
        console.log("               LOSE - Stage 5");
    }
        // Rewrites the html with updated values
        document.getElementById('wins').innerHTML = "Wins: " + wins;
        document.getElementById('losses').innerHTML = "Losses: " + losses;
        document.getElementById('guessesLeft').innerHTML = "Guesses Left: " + guessesLeft;
        document.getElementById('guessesSoFar').innerHTML = "Guesses So Far: " + guessesSoFar;

        console.log("computerChoice " + computerChoice);
        console.log("userGuess      " + userGuess); 
        console.log("guessesSoFar   " + guessesSoFar);
        console.log("guessesLeft    " + guessesLeft);
        console.log("losses         " + losses);
        console.log("wins           " + wins);
        console.log("               INNER HTML - Last Stage 6");
    
    };







