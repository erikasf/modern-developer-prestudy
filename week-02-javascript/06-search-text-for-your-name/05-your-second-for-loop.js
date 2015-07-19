/*jshint multistr:true */
var text = "Lorem ipsum dolor sit amet, consectetur James elit. Suspendisse James sapien ac tortor mollis, in aliquet lorem aliquet.";
var myName = "James";
var hits = [];

for (var i = 0; i < text.length; i++) {
    if (text[i] === myName[0]) {
        for(var j = i; j < i + myName.length; j++) {
            hits.push(text[j]);
        }
    }
}
