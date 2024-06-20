let text = "this is EXAMPLE";

let lower = text.toLocaleLowerCase().split(" ");
let camelCase = lower[0];

for (let i = 1; i < lower.length; i++) {
    let splitted = lower[i].split("");
    splitted[0] = splitted[0].toUpperCase();
    splitted = splitted.join("");
    camelCase = camelCase.concat(splitted)
    
}

console.log(camelCase);
