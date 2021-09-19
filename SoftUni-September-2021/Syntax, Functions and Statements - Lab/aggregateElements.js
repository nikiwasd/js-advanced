function aggregateElements(arr){
    let result = 0;
    let result2 = 0;
    
    for (let num of arr){
        num = Number(num);
        result += num;
        result2 += 1/num;
    }

    console.log(result);
    console.log(result2);
    console.log(arr.join(''));
}

aggregateElements([1, 2, 3]);