const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const hr = document.getElementById('hr');
const min = document.getElementById('min');
const sec = document.getElementById('sec');

var currSec;
var flag;

startButton.addEventListener('click', startTime);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', resetTime);

function resetTime() {
    stop();
    hr.innerHTML = '00';
    min.innerHTML = '00';
    sec.innerHTML = '00';

}

function incrementSec() {
    if(flag==false)
        return;
    currSec++;
    sec.innerHTML = `${currSec}`;
    if(currSec < 60) {
        setTimeout(incrementSec, 1000);
    }
    else {
        setTimeout(minute, 2000);
    }
}

function startTime() {
    currSec = parseInt(sec.textContent); // parseInt will stop at a decimal or any non-numeric character - parseFloat will incorporate decimal
    flag = true;
    incrementSec();
}

var currentMinute = parseInt(min.textContent);
function minute(){
    currentMinute++;
    currSec = 0;
    min.innerHTML = `${currentMinute}`;
    if (currentMinute > 59) {
        currentMinute = 0;
        hour();
    }
    incrementSec();
}

var currentHour = parseInt(hr.textContent);
function hour() {
    currentHour++;
    hr.innerHTML = `${currentHour}`;
}

function stop(){
    flag = false;
}