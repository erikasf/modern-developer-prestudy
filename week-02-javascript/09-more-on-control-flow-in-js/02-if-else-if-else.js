var isEven = function (number) {
    // Your code goes here!
    if (isNaN(number)) {
        return "Ooops! " + number + " is not a number";
    } else if (number % 2) {
        return false;
    } else {
        return true;
    }
};
