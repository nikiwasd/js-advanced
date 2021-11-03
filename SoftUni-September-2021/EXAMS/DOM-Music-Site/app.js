window.addEventListener('load', solve);

function solve() {
    const genre = document.getElementById('genre');
    const name = document.getElementById('name');
    const author = document.getElementById('author');
    const date = document.getElementById('date');

    let divExist = document.querySelector(".all-hits-container");

    const addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', add);

    function add(event){
        event.preventDefault();

        if (genre.value == '' || name.value == '' || author.value == '' || date.value == ''){
            return;
        }

        
        const img = newEl('img');
        img.setAttribute('src', './static/img/img.png');
        const saveBtn = newEl('button', 'save-btn', 'Save song');
        saveBtn.addEventListener('click', saveSong);
        const likeBtn = newEl('button', 'like-btn', 'Like song');
        likeBtn.addEventListener('click', likeSong);
        const deleteBtn = newEl('button', 'delete-btn', 'Delete');
        deleteBtn.addEventListener('click', deleteSong);
        const div = newEl('div', 'hits-info', img, newEl('h2', undefined, `Genre: ${genre.value}`), newEl('h2', undefined, `Name: ${name.value}`), newEl('h2', undefined, `Author: ${author.value}`), newEl('h2', undefined, `Date: ${date.value}`), saveBtn, likeBtn, deleteBtn);
                        
        divExist.appendChild(div);
    }

    function saveSong(event){

    }

    function likeSong(event){

    }

    function deleteSong(event){

    }




    

    function newEl(type,className, ...content) {
        const el = document.createElement(type);
    
        if(className !== undefined) {
            el.classList.add(className);
        }
    
            content.forEach(c => {
                if(typeof c === 'string') {
                    el.appendChild(document.createTextNode(c));
                } else {
                    el.appendChild(c);
                }
            });
        return el;
    }

}
