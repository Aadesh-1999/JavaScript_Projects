//clock js
let clock = document.getElementById("clock");


function getDayofWeek(dateString) {
    let day = (new Date(dateString)).getDay();
    return isNaN(day) ? null : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][day];
}

function displayClock() {
    let date = new Date();

    let day = getDayofWeek(date);
    let month = date.toLocaleString('default', { month: 'short' });
    let year = date.getFullYear().toString();

    let dateDisplay = date.getDate() + '-' + month + '-' + year;
    let dayDisplay = '(' + day + ')';
    let hour = date.getHours().toString();
    let mins = date.getMinutes().toString();
    let sec = date.getSeconds().toString();
    let milliSec = date.getMilliseconds().toString();
    let amPm = "AM";

    if (hour >= 12) { hour = hour - 12; }
    // 
    if (hour < 10) { hour = '0' + hour; }
    
    if (hour >= 12)
        amPm = "PM";
    if (hour == 0 && amPm == "AM") { hour = 12;}
    if (sec < 10) { sec = '0' + sec }
    if (mins < 10) { mins = '0' + mins }
    if (milliSec < 10) { milliSec = '00' + milliSec }
    if (milliSec >= 10 && milliSec < 100) { milliSec = '0' + milliSec }
    let timeDiplay = hour + ' : ' + mins + ' : ' + sec + ' : ' + milliSec + ' ' + amPm;
    clock.innerHTML = `<div class="m-5 p-1 bg-info">
<h6 class='d-flex justify-content-center'>${dateDisplay}</h6>
<h6 class='d-flex justify-content-center'>${dayDisplay}</h6>
<h6 class='d-flex justify-content-center'>${timeDiplay}</h6>
</div>`;
}

setInterval(displayClock, 0);

//stopWatch
let startStopWatchBtn = document.getElementById("startStopWatch");
let pauseStopWatchBtn = document.getElementById("pauseStopWatch");
let resetStopWatchBtn = document.getElementById("resetStopWatch");
let stopWatchTimer = document.getElementById("stopWatchTimer");

let seconds = 0;
let minutes = 0;
let hours = 0;
let isPaused = true;
let isStarted = false;
let firstTime = true;
startStopWatchBtn.addEventListener('click', () => { startStopWatch() });
pauseStopWatchBtn.addEventListener('click', () => pauseStopWatch());
resetStopWatchBtn.addEventListener('click', () => resetStopWatch());
function stopWatch() {
    if (isPaused == false) {
        if (seconds == 60) { minutes++; seconds = 0; }
        if (minutes == 60 && seconds == 60) { hours++; minutes = 0; seconds = 0; }
        seconds++;
        if (hours.toString().length<2 && hours < 10)
            hours = '0' + hours;
        if (minutes.toString().length<2 && minutes < 10)
            minutes = '0' + minutes;
        if (seconds.toString().length<2 && seconds < 10)
            seconds = '0' + seconds;
        console.log(hours, minutes, seconds);
        let timeDiplay = hours + ' : ' + minutes + ' : ' + seconds;
        stopWatchTimer.innerHTML = timeDiplay;
    }
}

let startStopWatch = () => {
    console.log(firstTime);
    if (isStarted == false && isPaused == true) {
        console.log("Inside");
        seconds = 0;
        minutes = 0;
        hours = 0;
        isStarted = true;
        isPaused = false;
        if (firstTime) {
            setInterval(stopWatch, 1000);
            firstTime = false;
        }
    }
    else { alert("Already Running... Try Pause or Reset.."); }
}
function pauseStopWatch() {
    if (isStarted) {
        isPaused = !isPaused;
        isPaused ? pauseStopWatchBtn.innerHTML = 'Resume' : pauseStopWatchBtn.innerHTML = 'Pause';
    }
    else { alert("Start First") }
}
function resetStopWatch() {
    if (isStarted) {
        seconds = 0;
        minutes = 0;
        hours = 0;
        isStarted = false;
        isPaused = true;
        stopWatchTimer.innerHTML = `00 : 00 : 00`;
        alert("Reset Done! Start Again..");
    }
    else { alert("Already Reseted.. Try Start!"); }
}
//setInterval(stopWatchTimer, 1);




