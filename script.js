var timer = document.querySelector('#timerelem');
var timercount = 60;

var randomNumber1 = ''

var hitNumber = document.querySelector('#guesselem')

var bottomnvgtn = document.querySelector('#bottomnvgtn')

var scoreelem = document.querySelector("#scoreelem")

setInterval(function(){
    if(timercount>0){
        timercount -= 1;
        timer.innerHTML = timercount
    }else{
        bottomnvgtn.innerHTML = ""
        var msg = `<h3 id="msg">Game Over</h3>`
        bottomnvgtn .innerHTML += msg
    }
},1000)

function guessNumber(){
    randomNumber1 = Math.floor(Math.random()*10)
    hitNumber.innerHTML = randomNumber1
}

function makeBubble(){
    for(i=0;i<60;i++){
        var randomNumber2 = Math.floor(Math.random()*10)
        var circleelem = `<div class="circle"><p>${randomNumber2}</p></div>`
        bottomnvgtn.innerHTML += circleelem;
    }
}

bottomnvgtn.addEventListener('click',function(details){
    if(randomNumber1 == details.target.textContent){
        scoreelem.textContent = Number(scoreelem.textContent)+10
        bottomnvgtn.innerHTML = ""
        makeBubble()
        guessNumber()
    }else{
        alert('You clicked Wrong Number ! Try again')
        bottomnvgtn.innerHTML = ""
        makeBubble()
        guessNumber()
    }
    
})

makeBubble()
guessNumber()