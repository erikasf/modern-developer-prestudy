// Write a function pow(x,n) which returns x in the n-th power
// Or, in other words, x is multiplied by itself n times.

function pow(x, n) {
    var pow = x;
    for (i = 1; i < n; i++) {
        pow *= x;
    }
    return pow;
}

console.log(pow(3, 2)); // 9
console.log(pow(3, 3)); // 27
console.log(pow(1, 100)); // 1
