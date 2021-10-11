function create(words) {

   for (let word of words){
      let content = document.getElementById('content');

      let div = document.createElement('div');
      let para = document.createElement('p');
      para.textContent = word;
      para.style.display = 'none';
      div.appendChild(para);

      div.addEventListener('click', reveal);

      content.appendChild(div);

      function reveal(e){
         e.currentTarget.children[0].style.display = '';
      
      }
   }
}


/*
function create(words) {

   let content = document.getElementById('content');
   content.addEventListener('click', reveal);

   for (let word of words){

      let div = document.createElement('div');
      let para = document.createElement('p');
      para.textContent = word;
      para.style.display = 'none';
      div.appendChild(para);

      content.appendChild(div);
   }
   

   function reveal(e){
      if (e.target.tagName == 'DIV' && e.target != content){
         e.target.children[0].style.display = '';
      }
   }
}
*/