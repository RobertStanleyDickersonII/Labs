function sumOfOdd(aNum) {
    let theSum = 0;
    for (let i = 1; i <= aNum * 2; i +=2) {
        theSum += i;
        console.log(i);
    }
    console.log('Sum: ' + theSum);
}

sumOfOdd(5);

sumOfOdd(10);

//1
//3
//5
//7
//9
// sum 25
