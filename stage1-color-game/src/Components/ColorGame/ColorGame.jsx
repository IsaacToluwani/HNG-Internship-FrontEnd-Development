import React, { useState } from 'react';

const colors = ['blue', 'red', 'pink', 'purple', 'black', 'green'];

function ColorGame() {
  /* State Management */
  const [chosenColor, setChosenColor] = useState('red');
  console.log('chosen:', chosenColor);
  const [shuffledColor, setShuffledColor] = useState('')
  

  /* Start Game */
  const startGame = () => {
    const chooseRandom = colors[Math.floor(Math.random() * colors.length)];
    setChosenColor(chooseRandom)

    const shuffleColor = [...colors].sort(() => Math.random() - 0.5);
    
   
 }

  return (
    <main>
      <h1>Isaac's Color Guessing Game</h1>
      <div className='game'>
        <div
          className='color-box'
          style={{ backgroundColor: chosenColor }}
          data-testid='colorBox'
        ></div>
        <p className='game-instructions' data-testid='gameInstructions'>
          Guess the correct color!
        </p>
        <div className='choose-color' data-testid='colorOption'></div>
        <p className='game-status' data-testid='gameStatus'>
          game status
        </p>
        <p className='score' data-testid='score'>
          score:
        </p>
        <button className='new-game-button' onClick data-testid='newGameButton'>
          New Game
        </button>
      </div>
    </main>
  );
}

export default ColorGame;
