//actions that modify the HOT COLDapp state

export const START_NEW_GAME = 'START_NEW_GAME'; 

export const startNewGame = () => ({
  type: START_NEW_GAME,
  correctAnswer: Math.round(Math.random() * 100)
});

export const MAKE_GUESS = 'MAKE_GUESS'; 

export const makeGuess = (guess) => ({
  type: MAKE_GUESS,
  guess
});


export const DISPLAY_INFO = 'DISPLAY_INFO';

export const displayInfo = () => ({
  type: DISPLAY_INFO
});

