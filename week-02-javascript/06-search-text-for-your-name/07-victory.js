/*jshint multistr:true */
var text = "Lorem ipsum dolor sit amet, consectetur James [Jamex] elit. Suspendisse James sapien ac tortor mollis, in aliquet lorem aliquet.";
var myName = "James";
var hits = [];

for (var i = 0; i < text.length; i++) {
    if (text[i] === myName[0]) {
        if (text.substring(i, i + myName.length) === myName) {
            for(var j = i; j < i + myName.length; j++) {
                hits.push(text[j]);
            }
        }
    }
}

if (hits.length === 0) {
    console.log("Your name wasn't found!");
} else {
    console.log(hits);
}
