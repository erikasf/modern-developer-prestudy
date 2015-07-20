var user = prompt("Where do you want to go today?").toLowerCase();
var money = prompt("How much money do you have available for travel?");
var time = prompt("How much time do you have available for travel?");

switch (user) {
    case "london":
        if (money > 100 || time > 2) {
        } else {
        }
        break;
    case "paris":
        if (money > 200 && time > 4) {
        } else {
        }
        break;
    case "milan":
        if (money > 300 && time > 5) {
        } else {
        }
        break;
    default:
}
