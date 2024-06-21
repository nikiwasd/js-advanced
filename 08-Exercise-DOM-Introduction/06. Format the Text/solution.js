function solve() {
  let input = document.getElementById("input").value;
  let output = document.getElementById("output");

  let splittedInput = input.split(".");
  for (let i = 0; i < splittedInput.length; i++) {
    if (i % 3 == 0) {
      if(splittedInput[i] === "") {
        break;
      }

      let p = document.createElement("p");
      p.textContent = splittedInput[i] + ".";
      output.appendChild(p);
    }
  }

}