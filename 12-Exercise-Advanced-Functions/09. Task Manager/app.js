function solve() {
    document.querySelector("form").addEventListener("submit", onSubmit);

    let taskRef = document.getElementById("task");
    let descriptionRef = document.getElementById("description");
    let dateRef = document.getElementById("date");

    let [add, open, inProgress, complete] = Array.from(document.querySelectorAll("section"));

    function onSubmit(event) {
        event.preventDefault();
        let task = taskRef.value;
        let desc = descriptionRef.value;
        let date = dateRef.value;

        if (!task || !desc || !date) {
            return;
        }

        const article = createArticle(task, desc, date);
        open.children[1].appendChild(article);

        taskRef.value = "";
        descriptionRef.value = "";
        dateRef.value = "";
    }

    function createArticle(task, desc, date) {
        let article = document.createElement("article");
        let h3 = document.createElement("h3");
        h3.textContent = task;
        let pDescription = document.createElement("p");
        pDescription.textContent = `Description: ${desc}`;
        let pDate = document.createElement("p");
        pDate.textContent = `Due Date: ${date}`;

        let container = document.createElement("div");
        container.classList.add("flex");

        let btn1 = createBtn("green", "Start", start);
        // let btn1 = document.createElement("button");
        // btn1.classList.add("green");
        // btn1.textContent = "Start";
        // btn1.addEventListener("click", start);

        let btn2 = createBtn("red", "Delete", del);
        // let btn2 = document.createElement("button");
        // btn2.classList.add("red");
        // btn2.textContent = "Delete";
        // btn2.addEventListener("click", del);

        container.appendChild(btn1);
        container.appendChild(btn2);
        article.appendChild(h3);
        article.appendChild(pDescription);
        article.appendChild(pDate);
        article.appendChild(container);

        return article;
    }

    function createBtn(classes, text, handler) {
        let btn = document.createElement("button");
        btn.classList.add(classes);
        btn.textContent = text;
        btn.addEventListener("click", handler);

        return btn;
    }

    function start(ev) {
        let container = ev.target.parentElement;
        let article = container.parentElement;

        container.textContent = "";
        let delBtn = createBtn("red", "Delete", del);
        let finishBtn = createBtn("orange", "Finish", finish);
        container.appendChild(delBtn);
        container.appendChild(finishBtn);

        inProgress.children[1].appendChild(article);
    }

    function del(ev) {
        let article = ev.target.parentElement.parentElement;
        let container = article.parentElement;
        container.removeChild(article);
    }

    function finish(ev) {
        let btnConteiner = ev.target.parentElement;
        let article = btnConteiner.parentElement;
        article.removeChild(btnConteiner);
        complete.children[1].appendChild(article);
    }
}