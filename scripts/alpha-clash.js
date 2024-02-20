function handleKeyboardKeyPress (e) {
    const playerKeyPress = e.key;
    // End the game if player pressed 'ESC'
    if(playerKeyPress === 'Escape') {
        gameOver()
    }
    
    const currentAlphabetUppercase = document.getElementById('current-alphabet').innerText;
    const currentAlphabet = currentAlphabetUppercase.toLocaleLowerCase();

    // Checking is player press right kew
    if(playerKeyPress === currentAlphabet) {
        // Updating Score
        const currentScore = searchElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setInnerText('current-score', updatedScore);

        // Start a new Round
        removeBgColor(currentAlphabet);
        continueGame()
    }else{
        // Update Life
        const currentLife = searchElementValueById('current-life');
        const updateLife = currentLife - 1;
        setInnerText('current-life', updateLife);

        if (updateLife === 0) {
            console.log('game over');
            gameOver()
        }
    }
}

// Get the keyboard Key Press
document.addEventListener('keyup', handleKeyboardKeyPress)

// continue Game
function continueGame () {
    const alphabet = getARandomAlphabet();
    // Set alpha to screen
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;
    // Call the Set Bg Color func
    setBackgroundColor(alphabet);
}

function play () {
    // Hide Everything while you're on playground
    hideElementById('home-screen');
    hideElementById('final-score')
    showElementById('play-ground');
    
    // Reset Statics
    setInnerText('current-life', 5);
    setInnerText('current-score', 0);

    continueGame();
};

// Gave Over
function gameOver () {
    hideElementById('play-ground');
    showElementById('final-score')

    // Set the result of score
    const lastScore = document.getElementById('current-score').innerText;
    setInnerText('last-score', lastScore);
    
    // Clear the last key highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBgColor(currentAlphabet);

    
}