window.addEventListener('load', solve);

function solve() {
    let nextBtn = document.getElementById("next-btn").addEventListener("click", onSubmit);
    let firstNameRef = document.getElementById("first-name");
    let lastNameRef = document.getElementById("last-name");
    let fromDateRef = document.getElementById("from-date");
    let toDateRef = document.getElementById("to-date");

    let status = document.getElementById("status");
    let infoList = document.getElementById("info-vacations").querySelector("div div ul");
    let confirmVacations = document.getElementById("confirm-vacations").querySelector("div div ul");
    function onSubmit(e) {
        e.preventDefault();

        let firstName = firstNameRef.value;
        let lastName = lastNameRef.value;
        let fromDate = fromDateRef.value;
        let toDate = toDateRef.value;

        

        if (!firstName || !lastName || !fromDate || !toDate || fromDate > toDate) {
            return;
        }

        let vacation = createArticle(firstName, lastName, fromDate, toDate);
        infoList.appendChild(vacation);

        firstNameRef.value = "";
        lastNameRef.value = "";
        fromDateRef.value = "";
        toDateRef.value = "";

        this.disabled = true;

        if (status.querySelector("h1")) {
            status.querySelector("h1").remove();
        }

    }

    function createArticle(firstName, lastName, fromDate, toDate) {

        function editBtn(e) {
            let nextButton = document.getElementById("next-btn");
            nextButton.disabled = false;
            
            firstNameRef.value = firstName;
            lastNameRef.value = lastName;
            fromDateRef.value = fromDate;
            toDateRef.value = toDate;

            let currentLi = e.target.parentElement;
            infoList.removeChild(currentLi);
        }

        let article = document.createElement("article");
        let h3 = document.createElement("h3");
        h3.textContent = `Name: ${firstName}`;
        let p = document.createElement("p");
        p.textContent = `From date: ${fromDate}`;
        let p2 = document.createElement("p");
        p2.textContent = `To date: ${toDate}`;

        let li = document.createElement("li");
        li.classList.add("vacation-content");

        let buttonEdit = createBtn("edit-btn", "Edit", editBtn);
       
        let buttonContinue = createBtn("continue-btn", "Continue", continueBtn);
        

        article.appendChild(h3);
        article.appendChild(p);
        article.appendChild(p2);
        li.appendChild(article);
        li.appendChild(buttonEdit);
        li.appendChild(buttonContinue);

        return li;
    }

    function createBtn(classes, text, handler) {
        let button = document.createElement("button");
        button.classList.add(classes);
        button.textContent = text;
        button.addEventListener("click", handler);

        return button;
    }

    function continueBtn(e) {
        let article = e.target.parentElement.querySelector("article");
        let confirmBtn = createBtn("confirm-btn", "Confirm", confirmFun);
        let cancelBtn = createBtn("cancel-btn", "Cancel", cancelFun);
        let li = document.createElement("li");
        li.classList.add("vacation-content");
        li.appendChild(article);
        li.appendChild(confirmBtn);
        li.appendChild(cancelBtn);
        confirmVacations.appendChild(li);
        document.querySelector(".vacation-content").remove();
        
        
    }

    function confirmFun(e) {
        let li = e.target.parentElement;
        li.querySelector("article").remove();
        let nextButton = document.getElementById("next-btn");
        nextButton.disabled = false;
        document.querySelector(".vacation-content").remove();

        let h1 = document.createElement("h1");
        h1.classList.add("vacation-confirmed");
        h1.textContent = "Vacation Requested";
        status.appendChild(h1);
        status.querySelector("h1").addEventListener("click", reloadh);
    }

    function cancelFun(e) {
        let li = e.target.parentElement;
        li.querySelector("article").remove();
        let nextButton = document.getElementById("next-btn");
        nextButton.disabled = false;
        document.querySelector(".vacation-content").remove();

        let h1 = document.createElement("h1");
        h1.classList.add("vacation-cancelled");
        h1.textContent = "Cancelled Vacation";
        status.appendChild(h1);
        status.querySelector("h1").addEventListener("click", reloadh);
    }


    function reloadh(e) {
        location.reload();
    }

}


    
    
