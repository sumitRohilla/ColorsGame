
let circleList = document.querySelectorAll('#mycolors');
let endBtn = document.getElementById('end-btn');

// Function to Increment selective circle's
function colorAddition() {
  
    for(let i = 0; i < circleList.length; i++) {

        let item = document.createElement('li');
        item.id = 'items';
        circleList[i].appendChild(item);
    }
    circles = document.querySelectorAll('#items');
    changeColor();
    // console.log(circles.length);
} 

// Function to reset circle's to normal
function removeColor() {

    for(let i = 0; i < circles.length/2 - 1; i++) {

        let list1 = document.querySelector('.c1');
        let child1 = list1.getElementsByTagName('li')[0];
        list1.removeChild(child1);

        let list2 = document.querySelector('.c2');
        let child2 = list2.getElementsByTagName('li')[0];
        list2.removeChild(child2);
    }
}

// Function for End Block
function endBlock() {
    document.querySelector('.end-block').style.display = 'flex';
    spanScore.innerHTML = score.innerHTML;

    document.querySelector('.scored').innerHTML = score.innerHTML;
    removeColor();
    reset();
    endBtn.onclick = function() {
        
        document.querySelector('.end-block').style.display = 'none';
        document.querySelector('.span').style.display = 'none';
        
        currScore = 0;
        score.innerHTML = 0;
        timerReset();
        start();
    }
}