let adNode = document.querySelector("#ad")

adNode.style.position = "fixed"
adNode.style.top = "0px"
adNode.style.left = "50px"
adNode.style.border = "solid 2px black"
adNode.style.textAlign = "center"
adNode.style.backgroundColor = "white"

let isAdShowing = false
adNode.style.display = "none"

setInterval(() => {
  if (isAdShowing) {
    isAdShowing = false
    adNode.style.display = "none"
  } else {
    isAdShowing = true
    adNode.style.display = "block"
  }
}, 1000)


const container = document.querySelector("#animation-container")
const ball = document.querySelector("#ball")

container.style.width = "400px"
container.style.height = "200px"
container.style.backgroundColor = "black"
container.style.position = "relative" // it allows us to position absolute elements inside relative to the container

ball.style.width = "50px"
ball.style.height = "50px"
ball.style.backgroundColor = "white"
ball.style.borderRadius = "25px"
ball.style.position = "absolute"
ball.style.top = "5px"

let posX = 5
ball.style.left = `${posX}px`

setInterval(() => {

  posX += 3
  console.log(posX)
  ball.style.left = `${posX}px`

}, 20)