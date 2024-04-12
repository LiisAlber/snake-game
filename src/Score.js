class Score {
    score = 0;
    highScore = 0;

    constructor () {
        this.update();
        const highScore = localStorage.getItem('snake-high-score');
        if (highScore) {
            this.highScore = parseInt(highScore);
        }
        this.updateHighScore();
    }

    increment () {
        this.score++;
    }

    update () {
        const scoreDiv = document.getElementById('score');
        scoreDiv.innerText = this.score;
    }

    saveHighScore () {
        if (this.score > this.highScore) {
            this.highScore = this.score; // Update the highScore property
            localStorage.setItem('snake-high-score', this.score.toString());
        }
    }

    updateHighScore () {
        const highScoreDiv = document.getElementById('high-score');
        highScoreDiv.innerText = this.highScore;
    }
}

export { Score }
