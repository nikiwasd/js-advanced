function solve() {
  let input = document.getElementById('text').value;
  let currentCase = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');

  let splitted = input.split(' ');
  let resultString = '';

  if (currentCase == 'Camel Case'){
    resultString += splitted[0].toLowerCase();
    for (let i = 1; i < splitted.length; i++){
      resultString += splitted[i][0].toUpperCase() + 
      splitted[i].slice(1, splitted[i].length).toLowerCase();
    }
    result.textContent = resultString;
  } else if (currentCase == 'Pascal Case') {
    for (let i = 0; i < splitted.length; i++){
      resultString += splitted[i][0].toUpperCase() + 
      splitted[i].slice(1, splitted[i].length).toLowerCase();
    }
    result.textContent = resultString;
  } else {
    result.textContent = 'Error!';
  }

  
}