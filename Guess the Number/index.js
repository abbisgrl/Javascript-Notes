var originalNum = Math.floor(Math.random() * (20 - 1)) + 1;
var guessValue = null;
var highscoreIntFinal = 0;

console.log(originalNum);

var input = document.querySelector("input");
var guess = document.getElementById("check");
var message = document.getElementsByClassName('message')[0];
var highscoreGuess = document.getElementsByClassName('label-highscore')[0];
var again = document.getElementById('again');
var number = document.getElementsByClassName('number')[0];


again.addEventListener('click', function () {
    originalNum = Math.floor(Math.random() * (20 - 1)) + 1;
    var highscore = document.getElementsByClassName('score')[0];
    highscore.innerHTML = 20;
    console.log(originalNum);
});

guess.addEventListener('click', function () {
    var highscore = document.getElementsByClassName('score')[0];
    var highscoreInt = parseInt(highscore.textContent);


    guessValue = input.value;

    if (guessValue == originalNum) {
        if (highscoreInt > highscoreIntFinal) {
            highscoreIntFinal = highscoreInt;
        }
        message.innerHTML = "You guessed correct";
        highscoreGuess.innerHTML = highscoreIntFinal;
        number.innerHTML = originalNum;

    } else{
        if(highscoreInt>1){
            highscoreInt--;
            highscore.innerHTML = highscoreInt;
            message.innerHTML = guessValue>originalNum?"Too high" :"Too low"
        }
    }
});

