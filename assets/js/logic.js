const startScreen = document.querySelector(`#start-screen`);
const startBtn = document.querySelector(`#start`);
const questions = document.querySelector(`#questions`);
const questionTitle = document.querySelector(`#question-title`);
const choices = document.querySelector(`#choices`);
const gameOver = document.querySelector(`#end-screen`);
const nextBtn = document.createElement(`button`);
const listEl = document.createElement(`ol`);
const time = document.querySelector(`#time`);
const submit = document.querySelector(`#submit`);
const highScores = document.querySelector(`#highscores`);


choices.append(listEl);


//  Initialize globally used variables
let countdown = time.innerHTML;
let qIndex = 0;
let score = 0;
let highScore = score;

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


// Function to create answer elements and populate with questions/answers from question pool
const changeQuestion = function () {
    
    listEl.innerHTML = ``;
    
    for (let i = 0; i < 4; i++) {
        let radioBtn = document.createElement(`input`);
        let radioLabel = document.createElement(`label`);
        let radioDiv = document.createElement(`div`);
        
        questionTitle.textContent = questionPool[qIndex].question;
        radioLabel.textContent = questionPool[qIndex].answers[i];
        
        radioBtn.setAttribute(`type`, `radio`);
        radioBtn.setAttribute(`name`, questionPool[qIndex]);
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
};
startBtn.addEventListener(`click`, startQuiz);

nextBtn.textContent = `Next`;
nextBtn.setAttribute(`class`, `btn btn-primary`);

// Function/Event Listener attached to the next button that checks chosen answer, and changes score and timer accordingly
nextBtn.addEventListener(`click`, function (event) {
    event.preventDefault();
    let answer = document.querySelectorAll(`.ansRadioBtn`);
    let choiceLabel = document.querySelectorAll(`label`);
    for (let i = 0; i < answer.length; i++) {
        const choice = answer[i];
        console.log(choiceLabel[i].textContent)
        if (choice.checked) {
            if (choiceLabel[i].textContent === questionPool[x].correct) {
                score += 10;
                countdown += 5;
            } else {
                countdown -= 10;
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

submit.addEventListener(`click`, function (event) {
    
    event.preventDefault();
    let initials = document.querySelector(`#initials`).value;

    let highScoreStorage = [
        {
            initials: ``,
            highScore: highScore
        }
    ];
    
    highScoreStorage.push({
        initials: initials,
        highScore: highScore
    });

    highScoreStorage.shift();
    console.log(highScoreStorage)
    
    localStorage.setItem(`highscoreStorage`,JSON.stringify(highScoreStorage));
    window.location.href = `highscores.html`;
});
