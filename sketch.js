function formatTime(s) {
  let mins
  let sec
  mins = floor(s / 60)
  sec = s % 60
  return nf(mins,2) + ":" + nf(sec,2)
}

function setup(){
  noCanvas()
  let timeLeft = 300
  let params = getURLParams()
  if(params.minute) {
  let mins = params.minute;
  timeLeft = mins * 60
  }
  let counter = 0
  let timer = select('#timer')
  function timeIt() {
    counter++
    timer.html(formatTime(timeLeft - counter))
    if (counter == timeLeft){
      ding.play()
      counter = 0
    }
  }
  setInterval(timeIt, 1000)
}

var ding
function preload(){
  //ding = loadSound("ding.mp3")
}

function draw(){

}
