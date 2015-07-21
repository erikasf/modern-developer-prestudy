// Our Person constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
};

// Now we can make an array of people
var family = [
    new Person("alice", 40),
    new Person("bob", 42),
    new Person("michelle", 8),
    new Person("timmy", 6)
];

// loop through our new array
for (i = 0; i < family.length; i++) {
    console.log(family[i].name);
};