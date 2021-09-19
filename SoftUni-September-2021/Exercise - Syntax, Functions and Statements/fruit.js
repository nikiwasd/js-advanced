function fruit(fruitName, weight, price){
    let sum = price * (weight/1000)
    console.log(`I need $${sum.toFixed(2)} to buy ${(weight/1000).toFixed(2)} kilograms ${fruitName}.`)
}

fruit('orange', 2500, 1.80);