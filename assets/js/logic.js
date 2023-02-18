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

function scoreUpdate() {

    let radioAnswer =listEl.children[0].children[0];

    for (i = 0; i < 4; i++) {

        let checked = radioAnswer.checked;
        let correctAnswer = radioAnswer.nextSibling.textContent;

        if (checked === true) { 
            localStorage.setItem(`correctAnswer`, correctAnswer);
            console.log(correctAnswer);
        } else {
            console.log(`nope`)
        }

        
        
        
    } 
    let correctAnswer = localStorage.getItem(`correctAnswer`);
    if (questionPool[x].correct === correctAnswer) {
        
        console.log(`rightANSWER`)
    } else {
        console.log(`Wrong!!`)
    }
    x++;
    qIndex++
    // changeQuestion()
    };

function checkAnswer(event) {
        
}

// let chooseQuestion = function () {
//     for (i = 0; i < questionPool.length; i++)
//         return i;
// }

function startQuiz(event) {
    startScreen.setAttribute(`class`, `hide`);
    questions.className = ``;
    // display question seperately
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

startBtn.addEventListener(`click`, startQuiz);
nextBtn.textContent = `Next`;
nextBtn.addEventListener(`click`, changeQuestion);





// function mainQuiz() {

// }
