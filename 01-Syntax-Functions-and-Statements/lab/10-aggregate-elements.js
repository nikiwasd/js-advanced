function aggregateElements(arrayNumbers) {
    let sumArray = 0;
    let concatArray = "";
    let inverseValues = 0;

    arrayNumbers.forEach(element => {
        sumArray += element;
        inverseValues += 1 / element;
        concatArray = concatArray.concat(element);
    });

    console.log(sumArray);
    console.log(inverseValues);
    console.log(concatArray);
}

aggregateElements([1, 2, 3]);
// aggregateElements([2, 4, 8, 16]);