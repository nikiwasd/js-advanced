function create(words) {
   let content = document.getElementById("content");

   for (let word of words) {
      let div = document.createElement("div");
      let p = document.createElement("p");
      p.textContent = word;
      p.style.display = "none";
      div.append(p);

      div.addEventListener("click", show);
      function show(e) {
         e.target.children[0].style.display = "";
      }
      content
      .append(div);
   }

}