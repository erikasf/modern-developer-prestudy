// Check if the user is ready to play!
confirm("Are you ready to play?");

// Check if the user is old enough to play?
age = prompt("What is your age?");
if (age <= 13) {
    console.log("Underage! Continue only at your own risk.");
} else {
    console.log("Welcome and good luck!");
}
