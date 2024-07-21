function guessingGame() {
    const target = Math.floor(Math.random() * 100);
    let count = 0;
    let gameOver = false;

    return function guess(guess) {
        if (gameOver){
            return "The Game is over, you can't guess anymore. Refresh your browser to play again"
        }

        count++;

        if(guess === target){
            return`You Win! You found ${guess} in ${count} guess${count === 1 ? '' : 'es'}.`;
        } else if (guess > target){
            return`${guess} is too high.`;
        } else{
            return`${guess} is too low.`;
        }
    }

}

module.exports = { guessingGame };
