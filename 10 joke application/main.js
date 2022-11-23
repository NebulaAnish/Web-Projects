const jokeElement = document.getElementById("joke")
const jokeBtn = document.getElementById("jokeBtn")
generateJoke()

jokeBtn.addEventListener("click",()=>{
   generateJoke()
})

// Async await implementation

async function generateJoke(){
   const config= {
      headers: {
         "Accept":"application/json"
      }
   }
   const response = await fetch("https://icanhazdadjoke.com",config)
   const data = await response.json()
   jokeElement.innerHTML = data.joke

   
   }  
   

// function generateJoke(){
//    const config= {
//       headers: {
//          "Accept":"application/json"
//       }
//    }
//    fetch("https://icanhazdadjoke.com",config)
//    .then((res) => res.json())
//    .then((data) => {
//       jokeElement.innerHTML = data.joke;
//    })  
   
// }
