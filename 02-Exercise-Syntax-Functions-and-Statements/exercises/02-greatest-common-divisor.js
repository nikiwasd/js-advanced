function GCD(x, y) {
    while(y) {
        let t = y;
        y = x % y;
        x = t;
    }
    console.log(x);
}

GCD(2154, 458);
// GCD(2154, 458);