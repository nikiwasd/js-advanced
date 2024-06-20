function solve() {
  let input = document.getElementById("input").value;
  let output = document.getElementById("output");
  let result = "";

  let splittedInput = input.split(".");
  for (let i = 0; i < splittedInput.length; i++) {
    if (i % 3 == 0) {
      if(splittedInput[i] === "") {
        break;
      }
      result += `<p>${splittedInput[i]}.</p>`;
    }
  }

  output.innerHTML = result;
}