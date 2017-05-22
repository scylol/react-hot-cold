//actions that modify the HOT COLDapp state

export const START_NEW_GAME = 'START_NEW_GAME'; 

export const startNewGame = () => ({
    type: START_NEW_GAME,
});

export const MAKE_GUESS = 'MAKE_GUESS'; 
export const CHANGE_FEEDBACK = 'CHANGE_FEEDBACK';
export const DISPLAY_NUM_OF_GUESSES = 'DISPLAY_NUM_OF_GUESSES';
export const DISPLAY_GUESS_LIST = 'DISPLAY_GUESS_LIST';
