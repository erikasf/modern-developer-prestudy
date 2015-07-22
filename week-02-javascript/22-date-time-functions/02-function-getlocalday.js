// There are countries which use Monday as day 0, Tuesday as day 1 and so on, Sunday is last day 6.
// Create a function getLocalDay(date) which returns day number in this representation.

function getLocalDay(date) {
    var day = date.getDay();
    if (day === 0) {
        day = 7;
    }
    return day - 1;
}

var date = new Date(2011, 0, 1); // 1 Jan 2011
alert(getLocalDay(date)); // Saturday, day 5
