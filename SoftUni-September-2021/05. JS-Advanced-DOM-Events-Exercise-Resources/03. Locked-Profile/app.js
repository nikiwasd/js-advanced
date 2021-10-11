function lockedProfile() {

    Array.from(document.querySelectorAll('div.profile button'))
    .forEach(button => button.addEventListener('click', onToggle))

    function onToggle(e){

        let profile = e.target.parentElement.querySelector('div');
        let lockOrUnlock = e.target.parentElement
        .querySelector('input[type="radio"][value="unlock"]').checked

        if (lockOrUnlock == true){
            if (e.target.textContent == 'Show more'){
                e.target.textContent = 'Hide it';
                profile.style.display = 'block';
            } else {
                e.target.textContent = 'Show more';
                profile.style.display = 'none';
            }
        }
    }

}


/*
function lockedProfile() {
    Array.from(document.querySelectorAll('div.profile button'))
    .forEach(b => b.addEventListener('click', onToggle));

    function onToggle(e){
        let profile = e.target.parentElement
        let isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked;
        if (isActive){
            let profileAll = e.target.parentElement.querySelector('div');
            if (e.target.textContent == 'Show more'){
                profileAll.style.display = 'block';
                e.target.textContent = 'Hide it';
            } else {
                profileAll.style.display = '';
                e.target.textContent = 'Show more';
            }
        }
    }

}

*/







/*
function lockedProfile() {
    Array.from(document.querySelectorAll('div.profile button'))
    .forEach(b => b.addEventListener('click', onTonggle));

    function onTonggle(e){
        const profile = e.target.parentElement;
        const isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked
        //const infoDiv = Array.from(e.target.parentElement.querySelectorAll('div'))
        //.find(div => div.id.includes('HiddenFields'));
        if (isActive){
            const infoDiv = profile.querySelector('div');
            if (e.target.textContent == 'Show more'){
                infoDiv.style.display = 'block';
                e.target.textContent = 'Hide it';
            } else {
                infoDiv.style.display = '';
                e.target.textContent = 'Show more';
            }
        }
    }
}

*/