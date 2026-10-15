

console.log("testing")

// synchronous programming
let someVariable = 10;
console.log(someVariable)
someVariable = 20;
console.log(someVariable)


// asynchronous programming

setTimeout
setTimeout(() => {
  console.log("running this after 3 second") //3
}, 3000) // 3000 miliseconds => 3 second

setTimeout(() => {
  console.log("running this after 1 second") //2
}, 1000)

// // JS ALWAYS executes all the synchronous operations first, and then it runs all asynchronous operations
// console.log("after the setTimeouts") //1

// setInterval
let control = 0;

let intervalId = setInterval(() => {
  control++
  console.log("something is happening", control)

  if (control >= 10) {
    clearInterval(intervalId)
  }

}, 1000)

// clearTimeout and clearInterval

// setTimeout(() => {
//   console.log("stop the interval")
//   clearInterval(intervalId)
// }, 10000)
