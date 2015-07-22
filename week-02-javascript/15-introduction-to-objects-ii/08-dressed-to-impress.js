var suitcase = {
    shirt: "Hawaiian"
};

if (suitcase.hasOwnProperty("short")) {
    console.log(suitcase.shorts);
} else {
    suitcase.shorts = "Bermuda";
    console.log(suitcase.shorts);
}
