
let timer = document.getElementById('time');
let round = document.getElementById('round');

// Default values for Timer
let sec = 50;
let milli = 0;
let displaySec;
let displayRound = 0;

// Function to reset time when zero
function timerReset() {
    sec = 50;
    milli = 0;
}

// Function to display time in HTML
function displayTimer() {

    if(displayRound != 15) {
        milli--;
        if(milli < 0) {
            milli = 9;
            sec--;
        }
        if(sec < 0) {
            timerReset();
        }
        if(sec == 49 && milli == 9) {
            displayRound++;
            // increment circles after every interval
            if(displayRound % 4 == 1) {
                colorAddition();
            }
            reset();
        }
        if(displayRound == 15) 
            endBlock();

        // add extra '0' if num < 9
        displaySec = (sec > 9) ? sec : '0' + sec;

        timer.innerHTML = displaySec + ':' + milli;
        round.innerHTML = displayRound;
    }
}
