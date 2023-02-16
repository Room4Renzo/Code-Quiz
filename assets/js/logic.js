const startScreen = document.querySelector(`#start-screen`);
const startBtn = document.querySelector(`#start`);
const questions = document.querySelector(`#questions`);
const questionTitle = document.querySelector(`#question-title`);
const choices = document.querySelector(`#choices`);
const gameOver = document.querySelector(`#end-screen`);

const nextBtn = document.createElement(`button`);
const listEl = document.createElement(`ol`);

choices.append(listEl);

const questionTimer = function () {
    setInterval(function(){
        time--
        // queryselector time (line 15) = time variable
        // if time 0 endgame
    }, 1000)

}

var time = 60

var index = 0;
var highscore = 0

function scoreUpdate(event) {
    console.log(listEl);
    for (i = 0; i < 4; i++) {
        let checked = listEl.children[i].children[0].checked;
        console.log(checked);
        if (checked = true) {
        }
        // if checked true, save label textcontent. make variable
        // replace event.target with variable
    }
    if (questionPool[index].correct === event.target) {


    } index++
    changeQuestion()
};


let chooseQuestion = function () {
    for (i = 0; i < questionPool.length; i++)
        return i;
}

function startQuiz(event) {
    startScreen.setAttribute(`class`, `hide`);
    questions.className = ``;
    // display question seperately
    changeQuestion();
}


// change question populates the questions in the right place and title is also displayed correctly
// i need to make a function that clears the page so the questions do not stack

const changeQuestion = function () {

    listEl.innerHTML = ``

    for (let i = 0; i < 4; i++) {
        let radioBtn = document.createElement(`input`);
        let radioLabel = document.createElement(`label`);
        let radioDiv = document.createElement(`div`);
        questionTitle.textContent = questionPool[index].question;
        radioLabel.textContent = questionPool[index].answers[i];
        radioBtn.setAttribute(`type`, `radio`);
        radioBtn.setAttribute(`name`, `radio`);
        listEl.append(radioDiv);
        listEl.append(nextBtn);
        radioDiv.append(radioBtn);
        radioDiv.append(radioLabel);
    }
}

startBtn.addEventListener(`click`, startQuiz);
nextBtn.textContent = `Next`;
nextBtn.addEventListener(`click`, scoreUpdate);





// function mainQuiz() {




// }
