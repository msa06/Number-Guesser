//Game Values
let min=1,
    max=10,
    winningNum=getRandomNum(min,max),
    guessesLeft=3;

//UI Elements
const game = document.getElementById('game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessbtn = document.querySelector('#guess-btn'),
      guessinput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');
      
//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//Play Again
game.addEventListener('mousedown',function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
})



//Listen for Guess
guessbtn.addEventListener('click',function(){
  let guess = parseInt(guessinput.value);
  //Validate
  if(isNaN(guess)|| guess < min || guess > max){
    setMessage(`Please Enter a number between ${min} and ${max}`,'red');
  }
  else{
  //Check if Won
  if(guess === winningNum){
    //Game Over Won 
   
      //SetMessage
    setMessage(`${winningNum} is Correct, You Win`,'green',true);
     gameOver();
    }
  else{
    guessesLeft-=1;
    if(guessesLeft === 0 ){
      //SetMessage
    setMessage(`Game Over, You Lost The Correct Number was ${winningNum}`,'red',true);
      gameOver();
    }
    else{
      //Game Continues - answer wrong
      //Clear the input
      guessinput.value = '';
      setMessage(`Guess is Not Correct,${guessesLeft} Guesses Left!!`,'red',false);
       
    }
  }
  }
});
    
//Set Message
function setMessage(msg,color,disable){
  guessinput.disabled = disable;
  guessinput.style.borderColor =color;
  message.style.color = color;
  message.textContent = msg;
}

//Game OVer
function gameOver(){
  guessbtn.value = 'Play Again';
  guessbtn.className = 'play-again';
}

//Get Winning Num
function getRandomNum(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}
      
      







