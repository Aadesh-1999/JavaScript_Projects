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
    if (hour < 10) { hour = '0' + hour; }
    if (hour >= 12)
        amPm = "PM";
    if (hour == 0 && amPm == "AM") { hour = 12; }
    if (sec < 10) { sec = '0' + sec }
    if (mins < 10) { mins = '0' + mins }
    if (milliSec < 10) { milliSec = '00' + milliSec }
    if (milliSec >= 10 && milliSec < 100) { milliSec = '0' + milliSec }
    let timeDiplay = hour + ' : ' + mins + ' : ' + sec + ' : ' + milliSec + ' ' + amPm;
    clock.innerHTML = `<div class="m-5 p-1 bg-info">
<h5 class='d-flex justify-content-center'>${dateDisplay}</h5>
<h5 class='d-flex justify-content-center'>${dayDisplay}</h5>
<h5 class='d-flex justify-content-center'>${timeDiplay}</h5>
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
        if (hours.toString().length < 2 && hours < 10)
            hours = '0' + hours;
        if (minutes.toString().length < 2 && minutes < 10)
            minutes = '0' + minutes;
        if (seconds.toString().length < 2 && seconds < 10)
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
        console.log("Reset Done! Start Again..");
    }
    else { alert("Already Reseted.. Try Start!"); }
}


//Calculator
let numInput = document.getElementById("numInput");

let numBtn1 = document.getElementById("numBtn1");
let numBtn2 = document.getElementById("numBtn2");
let numBtn3 = document.getElementById("numBtn3");
let numBtn4 = document.getElementById("numBtn4");
let numBtn5 = document.getElementById("numBtn5");
let numBtn6 = document.getElementById("numBtn6");
let numBtn7 = document.getElementById("numBtn7");
let numBtn8 = document.getElementById("numBtn8");
let numBtn9 = document.getElementById("numBtn9");
let numBtn0 = document.getElementById("numBtn0");
let btnAdd = document.getElementById("btnAdd");
let btnSub = document.getElementById("btnSub");
let btnMultiply = document.getElementById("btnMultiply");
let btnDivide = document.getElementById("btnDivide");
let btnEqual = document.getElementById("btnEqual");
let btnDel = document.getElementById("btnDel");
let btnClr = document.getElementById("btnClr");
let numInputLength = numInput.value.length;
let numBtns = [numBtn0, numBtn1, numBtn2, numBtn3, numBtn4, numBtn5, numBtn6, numBtn7, numBtn8, numBtn9, btnAdd, btnSub, btnMultiply, btnDivide];

numInput.readOnly = true;

btnClr.addEventListener('click', function () {
    numInput.value = "";
});

btnDel.addEventListener('click', function () {
    if (numInput.value == "" || numInput.value == undefined) {
        console.log("Empty String");
    }
    else
        numInput.value = numInput.value.substring(0, document.getElementById("numInput").value.length - 1);
});

btnEqual.addEventListener('click', function () {
    if (numInput.value.charAt(document.getElementById("numInput").value.length - 1) == '+' || numInput.value.charAt(document.getElementById("numInput").value.length - 1) == '/' || numInput.value.charAt(document.getElementById("numInput").value.length - 1) == '*' || numInput.value.charAt(document.getElementById("numInput").value.length - 1) == '-')
    {
        console.log("Invalid Expression!")
    }
    else if(eval(numInput.value)==Infinity){
        console.log("Divide by 0?")
        numInput.value="";
    }
    else{
        numInput.value = eval(numInput.value);  
    }
});

function addNumEvent(numBtn) {
    numBtn.addEventListener('click', function () {
        console.log(numInput.value.charAt(numInputLength - 1));
        if (numBtn.innerText == '+' || numBtn.innerText == '-' || numBtn.innerText == '*' || numBtn.innerText == '/') {
            if(numInput.value=="")
            {
                console.log("Operator can only be added in two numbers!");
            }
            else if (numInput.value.charAt(document.getElementById("numInput").value.length - 1) == '+' || numInput.value.charAt(document.getElementById("numInput").value.length - 1) == '/' || numInput.value.charAt(document.getElementById("numInput").value.length - 1) == '*' || numInput.value.charAt(document.getElementById("numInput").value.length - 1) == '-') {
                console.log("Not Possible");
            }
            else {
                numInput.value += numBtn.innerText;
            }
        }
        else {
            numInput.value += numBtn.innerText;
        }
    });
}

numBtns.map((numBtn) => addNumEvent(numBtn));
