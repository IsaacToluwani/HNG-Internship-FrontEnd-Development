import React from 'react';

function ColorGame() {
  // State Management

  return (
    <main>
      <h1>Issaac's Color Guessing Game</h1>
      <div className="game">
      <div
          className='color-box'
          // style={{ backgroundColor: targetColor }}
          data-testid='colorBox'
        ></div>
        <p className='game-instructions' data-testid='gameInstructions'>
          Guess the correct color!
        </p>
        <p className='game-status' data-testid='gameStatus'>
          game status
        </p>
        <p className='score' data-testid='score'>
          score:
        </p>
        <button
          className='new-game-button'
          onClick
          data-testid='newGameButton'
        >
          New Game
        </button>
      </div>
    </main>
  );
}

export default ColorGame;
