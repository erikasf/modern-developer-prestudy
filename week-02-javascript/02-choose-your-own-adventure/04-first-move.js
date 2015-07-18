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
