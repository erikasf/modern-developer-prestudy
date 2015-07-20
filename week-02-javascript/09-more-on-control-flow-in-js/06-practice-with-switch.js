var candy = prompt("What's your favorite candy?", "Type your favorite candy here.");

switch (candy) {
    case "licorice":
        console.log("Gross!");
        break;
    case "gum":
        console.log("I like gum!");
        break;
    case "beets":
        console.log("…is that even a candy?");
        break;
    // Add your code here!
    default:
        console.log("You're not from 'round here, are you?")
}
