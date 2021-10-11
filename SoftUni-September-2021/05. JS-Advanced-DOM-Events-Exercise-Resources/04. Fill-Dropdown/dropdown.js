function addItem() {
    let text = document.getElementById('newItemText');
    let val = document.getElementById('newItemValue');
    let menu = document.getElementById('menu');
    let option = document.createElement('option');

    option.value = val.value;
    option.textContent = text.value;
    menu.appendChild(option);
    text.value = '';
    val.value = '';

}
 