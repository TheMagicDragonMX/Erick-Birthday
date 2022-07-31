
window.addEventListener("load", () => {
  // Adjust card height
  const card = document.getElementById("card") as HTMLDivElement
  const cardWidth = card?.getBoundingClientRect().width
  card.style.height = (cardWidth * 3 / 5) + "px";
  
  // // Make page fullscreen
  // document.body.requestFullscreen().then(res=>console.log(res)).catch(err=>console.log(err))
  // screen.orientation.lock('landscape').then(res=>console.log(res)).catch(err=>console.log(err))
  
  const PARTICLES_PER_LAUNCH = 20
  
  // Launch particles
  setInterval(() => { 
    for (let counter = 0; counter < PARTICLES_PER_LAUNCH; counter++)
      launchConfettiParticle() 
  }, 800 * 2)
})


function launchConfettiParticle () {

  // Get section where confetti will be launched
  const confettiArea = document.getElementById("confettiArea") as HTMLDivElement
  if (confettiArea === null) return

  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  // Create a new confetti particle
  const confettiParticle = new ConfettiParticle({
    end: { x: getRandomInt(- screenWidth / 2, screenWidth / 2), y: getRandomInt(- screenHeight / 2, -10) },
    color: colors[getRandomInt(0, colors.length - 1)],
    container: confettiArea
  })
  
  confettiParticle.toElement()
  confettiParticle.launch()

  setInterval(() => {
    if (confettiParticle.isNoLongerVisible())
      confettiParticle.clear()
  }, 100)
  
}






