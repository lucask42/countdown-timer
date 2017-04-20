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
  let currentTime
  let startTime = millis()
  if(params.minute) {
  let mins = params.minute;
  timeLeft = mins * 60
  }
  let timer = select('#timer')

  let interval = setInterval(timeIt, 1000)


  function timeIt() {
    currentTime = floor((millis() - startTime)/1000)
    timer.html(formatTime(timeLeft - currentTime))
    if (currentTime == timeLeft){
      ding.play()
      currentTime = 0
    }
  }
}

var ding
function preload(){
  //ding = loadSound("ding.mp3")
}

function draw(){

}
