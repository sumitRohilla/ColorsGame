
let circles = document.querySelectorAll('#items');
let display = document.querySelector('.choice');
let timeout = document.querySelector('.timeout');
let score = document.getElementById('score');

// Function to reset color
function reset() {

    circles = document.querySelectorAll('#items');

    for (let i = 0; i < circles.length; i++) {
        let colors = randomColor();
        circles[i].style.background = colors;
    }
    function pickColor() {
        let random = Math.floor(Math.random() * circles.length);
        return circles[random];
    }
    display.style.background = pickColor().style.background;
}

let currScore = 0;

// Function to change color
function changeColor() {

    for (let i = 0; i < circles.length; i++) {

        circles[i].onclick =  function () {
            let clickedColor = this.style.background;

            if (clickedColor == display.style.background) {

                timeout.style.opacity = 1;
                setTimeout(() => {
                    timeout.style.opacity = 0;
                }, 350);

                timeout.innerHTML = '+' + displaySec + '!';
                timeout.style.color = 'green';

                currScore = currScore + Number(displaySec);
                score.innerHTML = currScore;
                timerReset();
            }
            else {
                timeout.style.opacity = 1;
                display.classList.add('wrong-choice');
                setTimeout(() => {
                    timeout.style.opacity = 0;
                    display.classList.remove('wrong-choice');
                }, 350);

                timeout.innerHTML = '-' + 10 + '!';
                timeout.style.color = 'red';
         
                currScore = currScore - 10;
                score.innerHTML = currScore;
            }
        }
    }
}

//  Function to generate random Colors
function randomColor() {

    let r = Math.floor(Math.random(256) * 256);
    let g = Math.floor(Math.random(256) * 256);
    let b = Math.floor(Math.random(256) * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

// The start of game
let flag;
function start() {
    let startBtn = document.getElementById('start-btn');

    clearInterval(flag);
    document.querySelector('.start-block').style.display = 'flex';
    startBtn.onclick = function() {

        appendName();
        document.querySelector('.span').style.display = 'block';
        document.querySelector('.start-block').style.display = 'none';
        displayRound = 0;
        timerReset();
        displayTimer();
        flag = setInterval(displayTimer, 1);
    }
}
start();