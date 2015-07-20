var slaying = true;
var youHit = Math.floor(Math.random() * 2); // [0, 1]
var damageThisRound = Math.floor(Math.random() * 5 + 1); // [1, 2, 3, 4, 5]
var totalDamage = 0;

while(slaying) {
    if(youHit) {
        console.log("You hit the dragon…");
        totalDamage += damageThisRound;
        if (totalDamage >= 4) {
            console.log("You killed the dragon…");
            slaying = false;
        }
        youHit = Math.floor(Math.random() * 2); // [0, 1]
    } else {
        console.log("You missed the dragon and died…");
        slaying = false;
    }
}
