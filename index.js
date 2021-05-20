/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/


function greet(time){
    const hour = parseInt(time)
    if (hour < 12 ){
      return "Good Morning"
    } else if (hour >= 12 && hour < 17) {
      return "Good Afternoon"
    } else if (hour >= 17){
      return "Good Evening"
    }
}

function displayMessage(message){
  document.getElementById("greeting").innerText = message
}
