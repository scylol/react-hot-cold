import {START_NEW_GAME, MAKE_GUESS, CHANGE_FEEDBACK} from '../actions'; 

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
   





  return state;
};

