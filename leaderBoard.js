
let exitLeader = document.getElementById('exit-leader');
let exitEnd = document.getElementById('exit-end');
let nameList = document.querySelector('.leader-board #container');
let spanName, divRow, spanScore, divBG;
let newList = document.querySelectorAll('.row');
let max_score = 0;

// Funtion to store player in Leader Board
function appendName() {

    divRow = document.createElement('div');
    divBG = document.createElement('div');
    divRow.className = 'row';
    divBG.className = 'bg';

    spanName = document.createElement('span');
    spanScore = document.createElement('span');
    spanName.className = 'name';
    spanScore.className = 'score';

    spanName.innerHTML = document.getElementById('name').value;

    nameList.appendChild(divRow);
    divRow.appendChild(divBG);
    divRow.appendChild(spanName);
    divRow.appendChild(spanScore);
}

// Function to reset Leader Boader for new Game
function removeBoard() {

    let newList = document.querySelectorAll('.row');
    nameList = document.querySelector('.leader-board #container');

    let topRow = newList[0];
    nameList.removeChild(topRow);
}

// Listener to display Leader Board
exitEnd.onclick = function() {

    // Code to sort board according to score
    let $divs = $("div.row");
    let order = $divs.sort(function (a, b) {
        return $(b).find(".score").text() - $(a).find(".score").text();
    });
    $("#container").html(order);

    max_score = document.querySelector('.score').innerHTML;
    dynamicColor();


    document.querySelector('.end-block').style.display = 'none';
    document.querySelector('.leader-board').style.display = 'flex';
}

// Code for Dynamic Color
function dynamicColor() {

    let colorLen, bgColor;
    let colorList = document.querySelectorAll('.row');
    // console.log(colorList.length);
    for(i = 0; i < colorList.length; i++) {

        bgColor = colorList[i].querySelector('.bg');
        newScore = colorList[i].querySelector('.score').innerHTML;
        colorLen = (100 * newScore) / max_score;
        // console.log(colorLen);
        bgColor.style.width = colorLen + "%";
    }
}
 
// Listener to start new Game
exitLeader.onclick = function() {
    currScore = 0;
    score.innerHTML = 0;
    clearInterval(flag);
    newList = document.querySelectorAll('.row');
    for(let i = 0; i < newList.length; i++) {
        removeBoard();
    }

    document.querySelector('.span').style.display = 'none';
    document.querySelector('.leader-board').style.display = 'none';
    document.querySelector('.start-block').style.display = 'flex';
}