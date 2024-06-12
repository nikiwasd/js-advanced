function sameNumbers(numbers) {
    let numbersToString = String(numbers).split("");
    let sum = 0;
    isSame = true;

    for (let i = 0; i < numbersToString.length; i++) {
        if (numbersToString[0] !== numbersToString[i]) {
            isSame = false;
        }

        sum += Number(numbersToString[i]);
    }

    console.log(isSame);
    console.log(sum);
    
}

sameNumbers(2222222);
sameNumbers(1234);