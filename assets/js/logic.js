const startScreen = document.querySelector(`#start-screen`);
const startBtn = document.querySelector(`#start`);
const questions = document.querySelector(`#questions`);
const questionTitle = document.querySelector(`#question-title`);
const choices = document.querySelector(`#choices`);
const gameOver = document.querySelector(`#end-screen`);
const nextBtn = document.createElement(`button`);
const listEl = document.createElement(`ol`);

choices.append(listEl);

// const questionTimer = function () {
//     setInterval(function(){
//         time--
//         // queryselector time (line 15) = time variable
//         // if time 0 endgame
//     }, 1000)

// }

// let time = 60


//  Initialize globally used variables
let qIndex = 0;
let highscore = 0
let x = 0

function scoreUpdate(event) {

    let radioAnswer = listEl.children[0].children[0];
    let inputEl = event.target;
    let userAnswer = inputEl.nextSibling.textContent;
    let correctAnswer = questionPool[x].correct;

    for (i = 0; i < 4; i++) {

        if (userAnswer === correctAnswer) { 
            console.log(`Good Job!`);
        } else {
            console.log(`nope`)
        } 
    }

    if (qIndex === questionPool.length - 1) {
        endQuiz();
    } else {
        changeQuestion();
    }

    x++;
    qIndex++
    // highscore += 10;
    };

function checkAnswer(event) {
        
}

const startQuiz = function(event) {
    startScreen.setAttribute(`class`, `hide`);
    questions.className = ``;
    changeQuestion();
}

const changeQuestion = function () {

    listEl.innerHTML = ``

    for (let i = 0; i < 4; i++) {

        let radioBtn = document.createElement(`input`);
        let radioLabel = document.createElement(`label`);
        let radioDiv = document.createElement(`div`);
        radioBtn.addEventListener(`click`, scoreUpdate);
        
        questionTitle.textContent = questionPool[qIndex].question;
        radioLabel.textContent = questionPool[qIndex].answers[i];

        radioBtn.setAttribute(`type`, `radio`);
        radioBtn.setAttribute(`name`, `radio`);

        listEl.append(radioDiv);
        listEl.append(nextBtn);
        radioDiv.append(radioBtn);
        radioDiv.append(radioLabel);
    };
    return;
};

function endQuiz() {
    questions.setAttribute(`class`, `hide`);
    gameOver.className = ``;
}

startBtn.addEventListener(`click`, startQuiz);
nextBtn.textContent = `Next`;
nextBtn.addEventListener(`click`, changeQuestion);