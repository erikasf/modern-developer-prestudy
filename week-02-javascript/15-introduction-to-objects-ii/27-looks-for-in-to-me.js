var languages = {
    english: "Hello!",
    french: "Bonjour!",
    notALanguage: 4,
    spanish: "Hola!"
};

// print hello in the 3 different languages
for (var key in languages) {
    if (typeof languages[key] === "string") {
        console.log(languages[key]);
    }
};
