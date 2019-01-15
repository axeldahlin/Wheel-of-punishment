const wheel = document.querySelector('.wheel')





let deg = 100

let inc = 200


var interval = setInterval(()=> {

  wheel.style.transform = `rotate(${deg}deg)`



  deg+=inc
  inc-=1
  if(inc < 0) {

    clearInterval(interval)
  }

 
  console.log({inc})
}, 50)


