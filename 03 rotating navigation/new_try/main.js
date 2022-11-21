const cross = document.querySelector(".cross")
const ham = document.querySelector(".ham")
const menu = document.querySelector(".menu")

ham.addEventListener("click",()=>{
   cross.classList.remove("hide")
   ham.classList.add("hide")
   menu.classList.add("open")

})

cross.addEventListener("click",()=>{
   ham.classList.remove("hide")
   cross.classList.add("hide")
   menu.classList.remove("open")
   
})
