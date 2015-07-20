var friends = {};

friends.bill = {
    firstName: "Bill",
    lastName: "Lytton",
    number: "865-981-4807",
    address: [ "748 Arlington Avenue", "Maryville", "TN", "37801" ],
    birthday: "1941-07-21",
    age: 73
};
friends.steve = {
    firstName: "Steve",
    lastName: "Osuna",
    number: "512-491-2835",
    address: [ "2694 Ashton Lane", "Austin", "TX", "78753" ],
    birthday: "1971-05-20",
    age: 44
};
friends.vernon = {
    firstName: "Vernon",
    lastName: "Bratcher",
    number: "251-638-4153",
    address: [ "3667 Lonely Oak Drive", "Mobile", "AL", "36609" ],
    birthday: "1931-03-18",
    age: 84
};

var list = function (friends) {
    for (var key in friends) {
        console.log(key);
    }
};

var search = function (name) {
    for (var key in friends) {
        if (friends[key].firstName === name) {
            format(friends[key]);
            return friends[key];
        }
    }
};

var format = function (friend) {
    console.log("First name: " + friend.firstName);
    console.log("Last name:  " + friend.lastName);
    console.log("Number:     " + friend.number);
    console.log("Address:    " + friend.address[0]);
    console.log("            " + friend.address[1] + ", " + friend.address[2] + " " + friend.address[3]);
}

list(friends);
search("Vernon");
