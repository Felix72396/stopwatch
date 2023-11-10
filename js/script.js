const time = document.getElementById("time");
const playPauseBtn = document.getElementById("play-pause-btn");
const resetBtn = document.getElementById("reset-btn");
let seconds = 0;
let minutes = 0;
let hours = 0;
let isPlaying = false;
let timeObj;

playPauseBtn.onclick = () => {
    if(isPlaying)
    {
        playPauseBtn.src = "img/play.png";
        playPauseBtn.title = "Play";
        clearInterval(timeObj);

        isPlaying = false;
    }
    else
    {
        playPauseBtn.src = "img/pause.png";
        playPauseBtn.title = "Pause";

        timeObj = setInterval(startStopWatch, 1000);

        isPlaying = true;
    }
}

resetBtn.onclick = () => {
    time.textContent = "00:00:00";
    seconds = 0;
    minutes = 0;
    hours = 0;
    clearInterval(timeObj);
    playPauseBtn.src = "img/play.png";
    playPauseBtn.title = "Play";
    isPlaying = false;
}

function getDigits(digits)
{
    return digits < 10 ? '0' + digits : digits;
}

function startStopWatch()
{
    seconds++;

    if(seconds === 60) 
    {
        seconds = 0;
        minutes++;
    }

    if(minutes === 60){
        minutes = 0;
        hours++;
    }

    if(hours === 24){
        resetBtn.click();
    }

    time.textContent = `${getDigits(hours)}:${getDigits(minutes)}:${getDigits(seconds)}`;
}