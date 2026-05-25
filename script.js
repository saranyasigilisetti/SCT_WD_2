let seconds = 0;
let minutes = 0;
let hours = 0;
let timer = null;
let lapCount = 1;

function updateDisplay(){

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("display").innerText =
  `${h}:${m}:${s}`;
}

function stopwatch(){

  seconds++;

  if(seconds == 60){
    seconds = 0;
    minutes++;
  }

  if(minutes == 60){
    minutes = 0;
    hours++;
  }

  updateDisplay();
}

function startStopwatch(){

  if(timer !== null) return;

  timer = setInterval(stopwatch,1000);
}

function pauseStopwatch(){

  clearInterval(timer);
  timer = null;
}

function resetStopwatch(){

  clearInterval(timer);
  timer = null;

  seconds = 0;
  minutes = 0;
  hours = 0;
  lapCount = 1;

  updateDisplay();

  document.getElementById("laps").innerHTML = "";
}

function recordLap(){

  if(hours === 0 && minutes === 0 && seconds === 0) return;

  let lapTime =
  document.getElementById("display").innerText;

  let li = document.createElement("li");

  li.innerText =
  "Lap " + lapCount + " : " + lapTime;

  document.getElementById("laps").appendChild(li);

  lapCount++;
}