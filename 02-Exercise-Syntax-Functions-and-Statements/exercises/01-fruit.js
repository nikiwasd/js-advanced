function fruit(type, weight, price) {
    let kilograms = weight / 1000;
    let money = kilograms * price;

    console.log(`I need $${money.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${type}.`);
}

fruit('orange', 2500, 1.80);
// fruit('apple', 1563, 2.35);