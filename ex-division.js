function division(n) {
    let result = false;
    if (n % 10 == 0) {
        result = 10;
    } else if (n % 10 == 7) {
        result = 7;
    } else if (n % 6 == 0) {
        result = 6;
    } else if (n % 3 == 0) {
        result = 3;
    } else if (n % 2 == 0) {
        result =2;
    }

    if (result == false) {
        console.log('Not divisible');
    } else {
        console.log(`The number is divisible by ${result}`);
    }
}

division(30);
division(15);
division(12);
division(1643);
division(49);
division(2);

