const panels =  document.querySelectorAll('.panel')

document.addEventListener('click',function expand(e){
   removeActiveClasses()
   e.target.classList.add('active');
});

function removeActiveClasses(){
   panels.forEach((panel)=> {
      panel.classList.remove("active")

   })
}