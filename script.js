/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
var pattern = [];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var no_mistakes;
var myAudio;
var downloadTimer;

var clueHoldTime = 1000;
const cluePauseTime = 333;
const nextClueWaitTime = 1000;

function startGame(){
    //initialize game variables
    no_mistakes = 0;
    for(var i=0; i<7; i++){
      pattern[i] = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    }
    Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    progress = 0;
    clueHoldTime = 1000;
    gamePlaying = true;
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    playClueSequence();
    startCountdown();
}

function stopGame(){
    //initialize game variables
    gamePlaying = false;
    stopCountdown();
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function startCountdown(){
  var timeleft = 12;
  downloadTimer = setInterval(function(){
    document.getElementById("progressBar").value = 10 - timeleft;
    if(timeleft <= 0){
      clearInterval(downloadTimer);
      loseGame();
    }
    // document.getElementById("progressBar").value = 10 - timeleft;
    timeleft -= 1;
  }, 1000);
}

function stopCountdown(){
      clearInterval(downloadTimer);
      document.getElementById("progressBar").value = 0;

}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  clueHoldTime -= (progress*50);
  if(clueHoldTime < 50){
    clueHoldTime = 50;
  }
  stopCountdown()
}  

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You Won !!.");
}

function guess(btn){
  console.log("user guessed: " + btn);

  if(!gamePlaying){
    return;
  }
  if(pattern[guessCounter] == btn){
    //Guess was correct!
    if(guessCounter == progress){
      stopCountdown();
      if(progress == pattern.length - 1){
        //GAME OVER: WIN!
        winGame();
      }else{
        //Pattern correct. Add next segment
        progress++;
        playClueSequence()
        startCountdown();
      }
    }else{
      //so far so good... check the next guess
      guessCounter++;
    }
  }else{
    no_mistakes++;
    if(no_mistakes==3){
      loseGame();
      return;
    }
    alert("Wrong button selected !! You have "+ (3-no_mistakes) + " chances left.");
  }
}   




// below is the code for generating sound
const freqMap = {
  1: "https://cdn.glitch.com/4c767936-c0f0-4133-af71-9fc9b49ca5e0%2FAccordian%20F2%20Sample-4170-Free-Loops.com.mp3?v=1614764735609", // accordian
  2: "https://cdn.glitch.com/4c767936-c0f0-4133-af71-9fc9b49ca5e0%2FTRUMPET.wav?v=1614764735338", // trumpet
  3: "https://cdn.glitch.com/4c767936-c0f0-4133-af71-9fc9b49ca5e0%2Fclarinet.wav?v=1614764735447", // clarinet
  4: "https://cdn.glitch.com/4c767936-c0f0-4133-af71-9fc9b49ca5e0%2FFIDDLE.wav?v=1614764735385", // violin
  5: "https://cdn.glitch.com/4c767936-c0f0-4133-af71-9fc9b49ca5e0%2FAcoustic_Guitar_Chords%20-%20Emajup.wav?v=1614764735781", //guitar
  6: "https://cdn.glitch.com/4c767936-c0f0-4133-af71-9fc9b49ca5e0%2Fpiano5.wav?v=1614764735969" //piano
}
function playTone(btn,len){ 
  var temp = freqMap[btn];
  myAudio = new Audio(temp);
  myAudio.play();
}
function startTone(btn){
  if(!tonePlaying){
    var temp = freqMap[btn];
    myAudio = new Audio(temp);
    myAudio.play();
    tonePlaying = true
  }
}
function stopTone(){
    myAudio.pause()
    tonePlaying = false
}
