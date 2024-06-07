let maxValue = 100;

// Step 2: Generate a random number
let randomNumber = Math.floor(Math.random() * maxValue) + 1;
console.log("Random Number:", randomNumber);

// Step 3: Track the guess status
let isCorrectGuess = false;

// Step 4: Simulate user guesses
let guesses = [18, 45, 76, 89, 95, 50];

// Step 5: Iterate over guesses
let i = 0;
while (!isCorrectGuess && i < guesses.length) {
    let guess = guesses[i];
    console.log("Guess: " + guess);
    if (guess === randomNumber) {
        isCorrectGuess = true;
        console.log("Correct Guess!");
    } else {
        if (guess < randomNumber) {
            console.log("Wrong Guess! Too Low.");
        } else {
            console.log("Wrong Guess! Too High.");
        }
    }
    i++;
}