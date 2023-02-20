const highScore = document.querySelector(`#highScores`);
let highScoreStorage = JSON.parse(localStorage.getItem(`highScoreStorage`));

console.log(highScoreStorage[0])

let displayHighScore = function () {

    for (let i = 0; i < highScoreStorage.length; i++) {

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
