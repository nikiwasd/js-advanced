function largestNumber(arg1, arg2, arg3) {
    let BiggestNumber = arg1;

    if (BiggestNumber < arg2) {
        BiggestNumber = arg2;
    }
    if (BiggestNumber < arg3) {
        BiggestNumber = arg3;
    }

    console.log(`The largest number is ${BiggestNumber}.`);
}

largestNumber(5, -3, 16);
largestNumber(-3, -5, -22.5);