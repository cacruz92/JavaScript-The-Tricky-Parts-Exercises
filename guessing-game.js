function guessingGame() {
    const target = Math.floor(Math.random() * 100);
    let count = 0;
    let gameOver = false;

    return function guess(guess) {
        if (gameOver){
            return "The game is over, you already won!"
        }

        count++;

        if(guess === target){
            gameOver = true;
            return`You win! You found ${guess} in ${count} guess${count === 1 ? '' : 'es'}.`;
        } else if (guess > target){
            return`${guess} is too high!`;
        } else{
            return`${guess} is too low!`;
        }
    }

}

module.exports = { guessingGame };
