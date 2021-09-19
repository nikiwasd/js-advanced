function mathOperations(firstNum, secondNum, string){
    if (string === '+'){
        console.log(firstNum + secondNum);
    } else if (string === '-'){
        console.log(firstNum - secondNum);
    } else if (string === '/'){
        console.log(firstNum / secondNum);
    } else if (string === '%'){
        console.log(firstNum % secondNum);
    } else if (string === '*'){
        console.log(firstNum * secondNum);
    } else if (string === '**'){
        console.log(firstNum ** secondNum);
    }
}

mathOperations(5, 6, '+');