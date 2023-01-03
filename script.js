//Set query selectors
let randomWord = document.querySelector("#random-word");
let timer = document.querySelector("#timer");
let wins = document.querySelector("#wins");
let losses = document.querySelector("#losses");
let startButton = document.getElementById("startBtn")
let randomizedWord;

//Array of word selection
let wordsArray = ['blue', 'red', 'green', 'yellow', 'purple', 'orange', 'indigo', 'violet', 'charteuse']



//generate a random word
function randomSelector() {
    randomizedWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    console.log(randomizedWord);

    //generate an "_" for every character in random word
    let guessedLetters = [];
    for (let i = 0; i < randomizedWord; i++) {
        guessedLetters.push("_")
    }
    console.log(guessedLetters)
    randomWord.textContent = guessedLetters.join(" ")
}

//Countdown that starts after button has been pressed
var timeStart = 5;
function startGame() {
    timestart = 5;
    var timerInterval = setInterval(function () {
        timeStart--;
        timer.textContent = timeStart + "until the game begins!";

        if (timeStart === 0) {
            clearInterval(timerInterval);
            randomSelector();
        }
    }, 1000);
}
//listen for keystrokes
document.addEventListener("keyup", function (event) {
    console.log(event.key);
    console.log(randomizedWord);
    if (randomizedWord.includes(event.key)) {
        //if letter is in word, replace "_" with the letter
        for (let i = 0; i < randomizedWord.length; i++) {
            if (randomizedWord[i] === event.key) {
                guessedLetters[i] = event.key;
            }
        }
        randomWord.textContent = guessedLetters.join(" ")
        if (guessedLetters.join("") === randomizedword) {
            console.log("You win!")
            clearInterval(timerInterval);
        }
    }
})

//Button that begins the game
startButton.addEventListener("click", function (event) {
    event.preventDefault();
    startGame();
})