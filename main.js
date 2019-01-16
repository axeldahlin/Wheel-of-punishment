const wheel = document.querySelector('.wheel')
const h1 = document.querySelector('.h1')
const punishments = ["Coffee bringer", "Calling teacher master", "Go to UX and tell joke", "explain .reduce to class","reading a tounge twister for class","called shame upon","10 pushups",]
const button = document.querySelector('.button')





// variable that make sure that the wheel spins atleast two times.

// console.log("the randomnumber is: ",randomNumber) // expected between 720 - 1720

function getRandomNumber () {
  return 720 + Math.floor((Math.random() * 1000))
} 
  

function getPunishment() {
  let randomNumber = getRandomNumber()
  if (randomNumber > 719 && randomNumber < 863){
      console.log(punishments[0])
      return punishments[0]
  } else if (randomNumber > 862 && randomNumber < 1005){
      console.log(punishments[1])
      return punishments[1]
  } else if (randomNumber > 1004 && randomNumber < 1147){
      console.log(punishments[2])
      return punishments[2]
  } else if (randomNumber > 1146 && randomNumber < 1289) {
      console.log(punishments[3])
      return punishments[3]
  } else if (randomNumber > 1288 && randomNumber < 1431) {
      console.log(punishments[4])
      return punishments[4]
  } else if (randomNumber > 1430 && randomNumber < 1572) {
      console.log(punishments[5])
      return punishments[5]
  } else {
      console.log(punishments[6])
      return punishments[6]
  }

}




button.addEventListener('click', ()=> {
  
  let deg = 100

let inc = 200






let i = 0
var interval = setInterval(()=> {

  if (i > punishments.length-1) {
    i = 0
  } 
  h1.innerHTML = punishments[i]


  wheel.style.transform = `rotate(${deg}deg)`



  deg+=inc
  inc-=1
  i++
  if(inc < 0) {

    clearInterval(interval)
    h1.innerHTML = getPunishment()

  }

 
  console.log({inc})
}, 50)

})




