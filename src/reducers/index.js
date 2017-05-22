import {START_NEW_GAME, MAKE_GUESS, DISPLAY_INFO} from '../actions'; 

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  correctAnswer: Math.round(Math.random() * 100),
  Modal: false
};

export const gameReducer = (state, action) => {
  state = state || initialState;
  if(action.type === START_NEW_GAME) {
    return Object.assign({}, initialState, {
      correctAnswer: action.correctAnswer
    });
  }
  else if (action.type === MAKE_GUESS) {
    const difference = Math.abs(action.guess - state.correctAnswer);

    let feedback;
    if (difference >= 50) {
      feedback = 'You\'re Ice Cold...';
    }
    else if (difference >= 30) {
      feedback = 'You\'re Cold...';
    }
    else if (difference >= 10) {
      feedback = 'You\'re Warm';
    }
    else if (difference >= 1) {
      feedback = 'You\'re Hot!';
    }
    else {
      feedback = 'You got it!';
    }
    return Object.assign({}, state, {
      feedback,
      guesses: [...state.guesses, action.guess]
    });
  }
  else if (action.type === DISPLAY_INFO) {
    return Object.assign({}, state, {
      Modal: !state.Modal
    });
  }
  
  
  return state;
};

