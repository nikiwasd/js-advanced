function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let input = document.getElementById("searchField");
      let container = document.getElementsByClassName("container");
      let rows = document.querySelectorAll("table tbody tr");

      for (let row of rows) {
         if (row.textContent.includes(input.value) && input.value !== "") {
            row.classList.add("select");
         } else {
            row.classList.remove("select");
         }
      }

      input.value = "";

   }
}