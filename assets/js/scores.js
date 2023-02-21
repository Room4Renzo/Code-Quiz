const highScore = document.querySelector(`#highscores`);
let highScoreStorage = JSON.parse(localStorage.getItem(`highscoreStorage`));

let displayHighScore = function () {

    for (let i = 0; i < highScoreStorage.length; i++) {

        if (highScoreStorage === null || highScoreStorage === undefined) {
            return
        } else {

            const highScoreList = document.createElement(`li`);
            highScore.className = ``;
            highScoreList.textContent = highScoreStorage[i].initials + `: ` + highScoreStorage[i].highScore;
            highScore.append(highScoreList);
            console.log(highScoreStorage[i]);
            console.log(highScoreStorage[i].initials + `: ` + highScoreStorage[i].highScore);
        };
    }
};

displayHighScore();
