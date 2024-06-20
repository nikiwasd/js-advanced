function solve() {
  let input = document.getElementById("text").value;
  let namingConcention = document.getElementById("naming-convention").value;
  let result = document.getElementById("result");

  if (namingConcention === "Camel Case") {
    let inputSplitted = input.toLowerCase().split(" ");
    let camelCase = inputSplitted[0];

    for (let i = 1; i < inputSplitted.length; i++) {
      let letters = inputSplitted[i].split("");
      letters[0] = letters[0].toUpperCase();
      word = letters.join("");
      camelCase = camelCase.concat(word);
    }

    result.textContent = camelCase;

  } else if (namingConcention === "Pascal Case") {
    let inputSplitted = input.toLowerCase().split(" ");
    let pascalCase = "";

    for (let i = 0; i < inputSplitted.length; i++) {
      let letters = inputSplitted[i].split("");
      letters[0] = letters[0].toUpperCase();
      word = letters.join("");
      pascalCase = pascalCase.concat(word);
    }

    result.textContent = pascalCase;

  } else {
    result.textContent = "Error!";
  }
}