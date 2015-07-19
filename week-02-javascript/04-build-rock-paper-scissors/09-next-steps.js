// Rock, paper, scissors

// User interaction handler
// Repeats until user enters valid input
var user = function() {
    do {
        var choice = prompt("Do you choose rock, paper or scissors?");
        choice = check(choice);
    } while(choice === false);
    return choice;
};

    // Check for user input errors
    var check = function(choice) {
        // Normalise user choice
        // (trim trailing spaces and convert to lowercase)
        var tmp = choice.trim();
        tmp = tmp.toLowerCase();
        // Validate user choice against
        // ["rock", "paper", "scissors"]
        if (tmp === "rock" || tmp === "paper" || tmp === "scissors") {
            console.log("Player: " + tmp);
            // Return normalised choice for compare function
            return tmp;
        }
        // Feedback to user including original choice
        console.log("Sorry, " + choice + " is an invalid choice.");
        return false;
    };

// Computer choice handler
// Using division for more accurate numbers
var computer = function() {
    var choice = Math.random();
    if (choice <= 1/3) {
        choice = "rock";
    } else if (choice <= 2/3) {
        choice = "paper";
    } else {
        choice = "scissors";
    }
    return choice;
};

// Result handler
var compare = function (choice1, choice2) {
    if (choice1 === choice2) {
        console.log("The result is a tie! Try again.");
        return false;
    } else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "Rock wins!";
        } else {
            return "Paper wins!";
        }
    } else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "Paper wins!";
        } else {
            return "Scissors wins!";
        }
    } else if (choice1 === "scissors") {
        if (choice2 === "paper") {
            return "Scissors wins!";
        } else {
            return "Rock wins!";
        }
    }
};

// Game flow
var game = function() {
    do {
        var userChoice = user();
        var computerChoice = computer();
        var winner = compare(userChoice, computerChoice);
    } while(winner === false);
    console.log("Computer: " + computerChoice);
    console.log(winner);
};

game();
