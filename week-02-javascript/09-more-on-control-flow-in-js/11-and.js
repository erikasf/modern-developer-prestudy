// Declare your variables here!
var hungry = true;
var foodHere = true;

var eat = function () {
    if (hungry && foodHere) {
        return true;
    }
    return false;
};
