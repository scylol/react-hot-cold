import {START_NEW_GAME, MAKE_GUESS} from '../actions'; 

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  correctAnswer: Math.round(Math.random() * 100)
};

export const gameReducer = (state=initialState, action) => {
  if(action.type === START_NEW_GAME) {
    return Object.assign({}, state, {
      guesses: [],
      feedback: 'Make your guess!', 
      correctAnswer: Math.round(Math.random() * 100)
    });
  }
  else if (action.type === MAKE_GUESS) {
    return Object.assign({}, state, {
      guesses: [...state.guesses, action.guess]
    });
  }




  return state;
};

