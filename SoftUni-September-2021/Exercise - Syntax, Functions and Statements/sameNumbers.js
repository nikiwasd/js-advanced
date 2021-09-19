function sameNumbers(nums){
    let string = nums.toString();
    let result = 0;
    let trueOrFalse = true;

    for (let i = 0; i < string.length; i++){
        let num = Number(string[i]);
        result += num;
        for (let i = 0; i < string.length; i++){
            let num2 = Number(string[i]);
            if (num != num2){
                trueOrFalse = false;
            }
        }
    }
    console.log(trueOrFalse);
    console.log(result);
}

sameNumbers(1234);