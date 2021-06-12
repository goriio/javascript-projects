const minutesElement = document.querySelector('.minutes');
const secondsElement = document.querySelector('.seconds');

const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');

let minutes = 0;
let seconds = 0;
let milliseconds = 0;

function startTimer() {
    milliseconds++;

    if (milliseconds > 99) {
        seconds++;
        milliseconds = 0;
    }

    if (seconds > 59) {
        minutes++;
        seconds = 0;
    }
    
    minutesElement.innerHTML = formatTime(minutes);

    secondsElement.innerHTML = formatTime(seconds) + '.' + formatTime(milliseconds);
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

startBtn.addEventListener('click', () => {
    interval = setInterval(startTimer, 1);
});

stopBtn.addEventListener('click', () => {
    clearInterval(interval);
});

resetBtn.addEventListener('click', () => {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    secondsElement.innerHTML = '00';
    secondsElement.innerHTML = '00.00';
});