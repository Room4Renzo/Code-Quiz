const startScreen = document.querySelector(`#start-screen`);
const startBtn = document.querySelector(`#start`);
const questions = document.querySelector(`#questions`);
const questionTitle = document.querySelector(`#question-title`);
const choices = document.querySelector(`#choices`);
const gameOver = document.querySelector(`#end-screen`);
const nextBtn = document.createElement(`button`);
const listEl = document.createElement(`ol`);
const time = document.querySelector(`#time`);
const initials = document.querySelector(`#initials`).value;
const submit = document.querySelector(`#submit`);
const highScores = document.querySelector(`#highscores`);


choices.append(listEl);


//  Initialize globally used variables
let countdown = time.innerHTML;
let qIndex = 0;
let score = 0;
let highScore = score;
let highScoreStorage = [
    {
        initials: ``,
        highScore: highScore
    }
];
let x = 0;

const questionTimer = function () {
    setInterval(function () {
        if (countdown === 0) {
            endQuiz();
        } else {
            countdown--;
            time.innerHTML = countdown;
        }
    }, 1000)

}


const startQuiz = function () {
    startScreen.setAttribute(`class`, `hide`);
    questions.className = ``;
    countdown = 60
    questionTimer();
    changeQuestion();
};

const changeQuestion = function () {
    listEl.innerHTML = ``;

    for (let i = 0; i < 4; i++) {
        let radioBtn = document.createElement(`input`);
        let radioLabel = document.createElement(`label`);
        let radioDiv = document.createElement(`div`);

        questionTitle.textContent = questionPool[qIndex].question;
        radioLabel.textContent = questionPool[qIndex].answers[i];

        radioBtn.setAttribute(`type`, `radio`);
        radioBtn.setAttribute(`name`, questionPool[qIndex].answers[i]);
        radioBtn.setAttribute(`class`, `ansRadioBtn`);

        listEl.append(radioDiv);
        listEl.append(nextBtn);
        radioDiv.append(radioBtn);
        radioDiv.append(radioLabel);
    }
    qIndex++;
    return;
};

function endQuiz() {
    questions.setAttribute(`class`, `hide`);
    gameOver.className = ``;
    countdown = 0;
    highScore = score;
    localStorage.setItem(`highscoreStorage`, JSON.stringify(highScoreStorage));
    console.log(highScoreStorage);
}

startBtn.addEventListener(`click`, startQuiz);

nextBtn.textContent = `Next`;
nextBtn.setAttribute(`class`, `btn btn-primary`);
nextBtn.addEventListener(`click`, function (event) {
    event.preventDefault();
    let answer = document.querySelectorAll(`.ansRadioBtn`);
    for (let i = 0; i < answer.length; i++) {
        const choice = answer[i];
        if (choice.checked) {
            if (choice.name === questionPool[x].correct) {
                console.log(`Good Job!`);
                score += 10;
                countdown += 5;
            } else {
                console.log(`nope`);
                countdown -= 15;
                score -= 5;
            }
        }
    }
    if (qIndex === questionPool.length) {
        endQuiz();
    } else {
        changeQuestion();
    }
    x++;
});
