function solve() {
  let text = document.getElementById('input').value;
  let splittedText = text.split('.').filter((el) => el != '');
  let output = document.getElementById('output');
  let result = '';

  for (let i = 0; i < splittedText.length; i++){
    if (i % 3 == 0){
      result += `<p>${splittedText[i]}.</p>`;
    }
  }

  output.innerHTML = result;
}