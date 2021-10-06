function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   let input = document.getElementById('searchField');
   let tableElements = Array.from(document.querySelectorAll('tbody tr'));
   
   function onClick() {
      
      let textInput = input.value.toLowerCase();

      for (let el of tableElements){
         let text = el.textContent.toLowerCase();
         if (text.includes(textInput) && textInput != ''){
            el.classList.add('select');
         } else {
            el.classList.remove('select');
         }
      }

      input.value = '';
      
   }

   
}



/*
function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   let input = document.getElementById('searchField');
   let tableElements = Array.from(document.querySelectorAll('tbody tr'));
   
   function onClick() {
      
      let textInput = input.value.toLowerCase();

      for (let el of tableElements){
         let demo = el.querySelector('tbody tr td').textContent.toLowerCase();
         
         if (demo.includes(textInput)){
            el.classList.add('select');
         } else {
            el.classList.remove('select');
         }
      }

      input.value = '';
      
   }

   
}
*/