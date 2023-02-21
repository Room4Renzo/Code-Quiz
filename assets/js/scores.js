const highScore = document.querySelector(`#highScores`);
let highScoreStorage = JSON.parse(localStorage.getItem(`highScoreStorage`));


let displayHighScore = function () {

    for (let i = 0; i < 4; i++) {

        if (highScoreStorage === null || highScoreStorage === undefined) {
            return
        } else {

            const highScoreList = document.createElement(`li`);
            highScore.className = ``;
            highScore.append(highScoreList);
            highScoreList.textContent = highScoreStorage[i].initials + `: ` + highScoreStorage[i].highScore;
        };
    }
};

displayHighScore();
