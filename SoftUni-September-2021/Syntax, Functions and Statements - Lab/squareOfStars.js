function squareOfStars(input){
    let string = '* ';
    if (input == undefined){
        for (let i = 0; i < 5; i++){
            console.log(string.repeat(5));
        }
    }
    for (let i = 0; i < input; i++){
        console.log(string.repeat(input));
    }
}

squareOfStars(2);