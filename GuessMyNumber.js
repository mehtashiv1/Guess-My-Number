'use strict';
let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;


document.querySelector('.btn-check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value)
    document.querySelector('.guess').value = '?';
    //when there is no input
    if(!guess){
        document.querySelector('.Guessing').textContent = 'No guess!';
    }
    //when the guess is correct 
    else if(guess===secretNumber)
    {
        document.querySelector('.Guessing').textContent = 'Correct Guess!!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        if(score > highscore)
        {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore ;
        }
    }
    //when the guess is greater than the secret number
    else if(guess > secretNumber)
    {
        if(score > 0){
        document.querySelector('.Guessing').textContent = 'Too High!'
        score--;
        document.querySelector('.score').textContent = score;
        }else {
            document.querySelector('.Guessing').textContent = 'You lost!'
        }
    }
    //when the guess is less than the secret number
    else if(guess < secretNumber)
    {
        if(score > 0){
        document.querySelector('.Guessing').textContent = 'Too low!'
        score--;
        document.querySelector('.score').textContent = score;
        }else {
            document.querySelector('.Guessing').textContent = 'You lost!'
        }
    }
})
document.querySelector('.btn-again').addEventListener('click',function(){
    document.querySelector('.Guessing').textContent = 'Start Guessing...';
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.highscore').value = 0;
    document.querySelector('.guess').value = '?';
    document.querySelector('body').style.backgroundColor = '#222';
})