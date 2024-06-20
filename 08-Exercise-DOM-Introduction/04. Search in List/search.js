function search() {
   let input = document.getElementById("searchText");
   let result = document.getElementById("result");
   let towns = document.getElementById("towns");
   let townsList = towns.querySelectorAll("ul li");
   let matches = 0;

   for (let el of townsList) {
      if (el.textContent.includes(input.value)) {
         el.style.fontWeight = "bold";
         el.style.textDecoration = "underline";
         
         matches++;
      } else {
         el.style.fontWeight = "normal";
         el.style.textDecoration = "none";
      }
   }

   result.textContent = `${matches} matches found`;
   input.value = "";
}
