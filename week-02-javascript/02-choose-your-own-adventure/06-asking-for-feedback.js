// Check if the user is ready to play!
confirm("Are you ready to play?");

// Check if the user is old enough to play?
age = prompt("What is your age?");
if (age <= 13) {
    console.log("Underage! Continue only at your own risk.");
} else {
    console.log("Welcome and good luck!");
}

// Introduction
console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'");

// First move
console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'");
userAnswer = prompt("Do you want to race Bieber on stage?");

// The story heats up!
if (userAnswer === "yes") {
    console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!");
} else {
    console.log("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'");
}

// Feedback
feedback = prompt("On a scale of 1 to 10 (1=extremely dissatisfied, 10=extremely satisfied) please rate the game");

if (feedback > 8) {
    console.log("Thank you! We should race at the next concert!");
} else {
    console.log("I'll keep practicing coding and racing.");
}
