function stringLength(first, second, third){
    let sum = first.length + second.length + third.length;
    let finalSum = sum / 3;
    console.log(sum);
    console.log(Math.floor(finalSum));
}

stringLength('chocolate', 'ice cream', 'cake');