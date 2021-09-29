function toggle() {
    let button = document.querySelector('.button');
    let textDiv = document.getElementById('extra');

    if (button.textContent == 'More'){
        button.textContent = 'Less';
    } else {
        button.textContent = 'More';
    }

    /*
    button.textContent = button.textContent == 'More' ? 'Less' : 'More';
    */

    if(textDiv.style.display == 'none' || textDiv.style.display == ''){
        textDiv.style.display = 'block';
    } else {
        textDiv.style.display = 'none';
        
    }
    
/*
    textDiv.style.display = textDiv.style.display == 'none' || textDiv.style.display == '' ?
    textDiv.style.display = 'block' : textDiv.style.display = 'none';
*/
}