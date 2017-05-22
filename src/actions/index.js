//actions that modify the HOT COLDapp state

export const START_NEW_GAME = 'START_NEW_GAME'; 

export const startNewGame = (correctAnswer, guesses, feedback) => ({
  type: START_NEW_GAME,
  correctAnswer,
  guesses,
  feedback
});

export const MAKE_GUESS = 'MAKE_GUESS'; 

export const makeGuess = (guess) => ({
  type: MAKE_GUESS,
  guess
});


export const DISPLAY_GUESS_LIST = 'DISPLAY_GUESS_LIST';

