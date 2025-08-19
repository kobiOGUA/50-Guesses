let nameInput = document.getElementById("nameInput");
let startButton = document.getElementById("startButton");
let welcomeMessage = document.getElementById("welcomeMessage");
let status = document.getElementById("status");
let randInt;
let guessInput = document.getElementById("guessInput");
let guessButton = document.getElementById("guessButton");
let guessMessage = document.getElementById("guessMessage");
let guessCounter = document.getElementById("guessCounter");
let guesses = 50;
let min = 0;
let max = 5;
let round = 1;
let name;

function startRound(){
    title.textContent = `Round ${round}`;
    document.getElementById("gameContent").style.setProperty("height", "15em");
    document.getElementById("status").style.setProperty("display", "block");
    document.getElementById("guessMessage").style.setProperty("display", "none");
    document.getElementById("guessCounter").style.setProperty("display", "none");
    if(round==1){
    randInt = Math.floor(Math.random()*(max-min+1))+min;
    }
    else{
    max = getMax(round);
    randInt = Math.floor(Math.random()*(max-min+1))+min;
    }
    status.textContent = `The number is between ${min} and ${max}`; 
}

function getMax(x){
    return max*2;
}

startButton.addEventListener("click", function(){
    document.getElementById("startSection").style.setProperty("display", "none");
    document.getElementById("guessSection").style.setProperty("display", "flex");
    document.getElementById("title").style.setProperty("font-size", "1.8em");
    
    name = nameInput.value;
    if(name === ""){
        name = "Guest";
    }
    startRound();
});

function displayGuesses(){
    guesses--;
    guessCounter.textContent = `Number of guesses remaining: ${guesses}`;
    document.getElementById("guessCounter").style.setProperty("display", "block");
}

guessButton.addEventListener("click", function(){
    if(guesses==1){
    document.getElementById("gameContent").style.setProperty("height", "15em");
    document.getElementById("guessSection").style.setProperty("display", "none");
    document.getElementById("title").textContent = `GAME OVER`;
    document.getElementById("gameOver").style.setProperty("display", "block");
    document.getElementById("gameOver").textContent = `${name}, you ran out of guesses at round ${round}`;
    document.getElementById("playAgain").style.setProperty("display", "block");
    }
    else{
    document.getElementById("gameContent").style.setProperty("height", "23em");
    document.getElementById("guessMessage").style.setProperty("display", "block");
    let guess = Number(guessInput.value);
    if(guess==randInt){
        guessMessage.textContent = `Correct! your guess was the exact number`;
        displayGuesses();
        round++;
        startRound();
    }
    else if(guess>randInt){
        guessMessage.textContent = `Sorry ${guess} is too high`;
        displayGuesses();
    }
    else{
        guessMessage.textContent = `Sorry ${guess} is too low`;
        displayGuesses();
    }
}
});

document.getElementById("playAgain").addEventListener("click", function(){
        window.location.href = "index.html";
})