function SquareofStars(input) {
    if (input) {
        for (let i = 0; i < input; i++) {
            console.log("* ".repeat(input).trim());
        }
    } else {
        for (let i = 0; i < 5; i++) {
            console.log("* ".repeat(5).trim());
        }
    }
}

// SquareofStars(1);
// SquareofStars(2);
// SquareofStars(5);
SquareofStars(7);