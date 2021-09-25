function extractText() {
    const items = document.getElementById('items').children
    const result = [];

    for (let item of Array.from(items)){
        result.push(item.textContent);
    }

    document.getElementById('result').value = result.join('\n');
}

/*
function extractText() {
    const items = document.querySelectorAll('#items li');

    const result = [...items].map(el => el.textContent).join('\n');

    document.getElementById('result').value = result
}
*/