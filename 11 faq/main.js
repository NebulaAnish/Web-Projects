// const chevron = document.querySelector(".fa-chevron-down")
// const cross = document.querySelector(".fa-times")
// const faq = document.querySelector(".faq")

// chevron.addEventListener("click",()=>{
//    faq.classList.toggle("active")
// })

const toggles = document.querySelectorAll(".faq-toggle")
const faq = document.querySelector(".faq")
toggles.forEach(toggle =>{
      toggle.addEventListener("click",()=>{
         toggle.parentNode.classList.toggle("active")
         
      })
   
})