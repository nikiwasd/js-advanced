function greatestCommonDivisorGCD(a, b){
    while(b != 0){
        const temp = b;
        b = a % b;
        a = temp;
    }

    return a;
}

console.log(greatestCommonDivisorGCD(15, 5));

