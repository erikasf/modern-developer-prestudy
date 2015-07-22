// Create function formatDate(d) which outputs date d in the format dd.mm.YY:
// P.S. Make sure that leading zeroes are at place, so 1 Jan 2011 would become 01.01.11, not 1.1.11.

function formatDate(d) {
    var dd = d.getDate();
    if (dd < 10) {
        dd = "0" + dd;
    }
    var mm = d.getMonth() + 1;
    if (mm < 10) {
        mm = "0" + mm;
    }
    var yy = d.getFullYear() % 100;
    if (yy < 10) {
        yy = "0" + yy;
    }
    return dd + "." + mm + "." + yy;
}

var d = new Date(2011, 0, 30) // 30 Jan 2011
alert(formatDate(d)) // '30.01.11'
