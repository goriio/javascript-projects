const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

const christmasDay = '25 Dec';

function countdown() {
    let year = getChristmasYear();
    const christmasDate = new Date(christmasDay + String(year));
    const currentDate = new Date();

    const totalSeconds = Math.floor((christmasDate - currentDate) / 1000);

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600 % 24);
    const minutes = Math.floor((totalSeconds / 60) % 60);
    const seconds = Math.floor(totalSeconds % 60);

    daysElement.innerHTML = days;
    hoursElement.innerHTML = formatTime(hours);
    minutesElement.innerHTML = formatTime(minutes);
    secondsElement.innerHTML = formatTime(seconds);
}

function getChristmasYear() {
    let year = new Date().getFullYear();

    if (new Date(christmasDay + String(year)) <= new Date())
        year = parseInt(year) + 1;

    return year
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

setInterval(countdown, 1000);