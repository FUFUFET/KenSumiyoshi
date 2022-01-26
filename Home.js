
const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-mobile');

hamburger.addEventListener('click',() =>{
  navUL.classList.toggle('show');

});


document.body.classList.toggle('js-enabled')
document.addEventListener('DOMContentLoaded', function(event){

let ken = document.getElementById('hamburger')  
ken.setAttribute('aria-expanded','false')
ken.onclick = function(){
  if(this.getAttribute('aria-expanded') == 'false')
  {
this.setAttribute('aria-expanded' ,'true');
  }else{
    this.setAttribute('aria-expanded' ,'false');
  }}});

  



  
