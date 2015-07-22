// Create a function to create a calendar table for given Year/Month.
// First weekday is Sunday, last day - Saturday.

function calendar(year, month) {
    var date = new Date(year, month - 1);
    var days = [" S", " M", " T", " W", " T", " F", " S"];
    var currentMonth = date.getMonth();

    // calendar title
    mm = date.getMonth() + 1;
    if (mm < 10) {
        mm = "0" + mm;
    }
    console.log(date.getFullYear() + "-" + mm);

    var table = [];

    // header row
    for (var i = 0; i < days.length; i++) {
        table.push(days[i]);
    }

    // first row
    for (var i = 0; i < date.getDay(); i++) {
        table.push("  "); // blank
    }

    // body
    while (date.getMonth() === currentMonth) {
        var day = date.getDate();
        if (day < 10) {
            day = " " + day;
        }
        table.push(day);
        date.setDate(date.getDate() + 1);
    }

    // final row
    for (var i = date.getDay(); i < 7; i++) {
        table.push("  "); // blank
    }

    // format output
    var line = "";
    for (var i = 0; i < table.length; i++) {
        line += table[i] + " ";
        if (i % 7 === 6) {
            console.log(line);
            line = '';
        }
    }
}

calendar(2011, 1);

// 2011-01
//  S  M  T  W  T  F  S
//                    1
//  2  3  4  5  6  7  8
//  9 10 11 12 13 14 15
// 16 17 18 19 20 21 22
// 23 24 25 26 27 28 29
// 30 31
// Correct. http://www.wolframalpha.com/input/?i=January+2011

calendar(2015, 2);

// 2015-02
//  S  M  T  W  T  F  S
//  1  2  3  4  5  6  7
//  8  9 10 11 12 13 14
// 15 16 17 18 19 20 21
// 22 23 24 25 26 27 28
// Correct. http://www.wolframalpha.com/input/?i=February+2015
