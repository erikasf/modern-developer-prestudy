// What day of week will be 1000 days after today?

var date = new Date();
date.setDate(date.getDate() + 1000);
alert(date.getDay());
