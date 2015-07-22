// Create a function getWeekDay(date) which outputs current weekday short form: ‘Sun’, ‘Mon’, ‘Tue’…, ‘Sat’.

function getWeekDay(date) {
    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[date.getDay()];
}

var date = new Date(2011, 0, 1); // 1 Jan 2011
alert(getWeekDay(date)); // 'Sat'
