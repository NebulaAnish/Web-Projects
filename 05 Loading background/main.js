const loadText = document.querySelector(".loading-text")
const bg = document.querySelector(".bg")

let load = 0
let int = setInterval(blurring,30)

function blurring(){
   if (load>98){
      clearInterval(int)
   }
   load++
loadText.innerText = `${load}%`
bg.style.opacity = load*0.01
loadText.style.opacity =(100-load)*0.01


}