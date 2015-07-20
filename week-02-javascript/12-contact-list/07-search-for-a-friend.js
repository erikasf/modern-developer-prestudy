var friends = {};

friends.bill = {
    firstName: "Bill",
    lastName: "Lytton",
    number: "865-981-4807",
    address: [ "748 Arlington Avenue", "Maryville", "TN", "37801" ]
};
friends.steve = {
    firstName: "Steve",
    lastName: "Osuna",
    number: "512-491-2835",
    address: [ "2694 Ashton Lane", "Austin", "TX", "78753" ]
};

var list = function (friends) {
    for (var key in friends) {
        console.log(key);
    }
};

var search = function (name) {
    for (var key in friends) {
        if (friends[key].firstName === name) {
            console.log(friends[key]);
            return friends[key];
        }
    }
};
