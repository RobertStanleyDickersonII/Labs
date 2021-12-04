function rounding(numToRound, roundTo) {
    if (roundTo > 15) {
        roundTo = 15;
    }
    console.log(parseFloat(numToRound.toFixed(roundTo)));
}

rounding(3.14159265358979323846, 2);
rounding(10.5, 3);