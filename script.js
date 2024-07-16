let timerInterval;
let startTime;
let elapsedTime = 0;
let isRunning = false;

const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const millisecondsDisplay = document.getElementById('milliseconds');

const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');
const resetButton = document.getElementById('resetButton');

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateTimeDisplay, 10);
    }
}

function pauseTimer() {
    if (isRunning) {
        isRunning = false;
        clearInterval(timerInterval);
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    elapsedTime = 0;
    startTime = Date.now();
    updateTimeDisplay(); // Make sure to update the display after reset
}

function updateTimeDisplay() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    const totalSeconds = Math.floor(elapsedTime / 1000);
    const totalMilliseconds = elapsedTime % 1000;

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    minutesDisplay.textContent = padTime(minutes);
    secondsDisplay.textContent = padTime(seconds);
    millisecondsDisplay.textContent = padTime(totalMilliseconds, 3);
}

function padTime(value, digits = 2) {
    return value.toString().padStart(digits, '0');
}
