import {START_NEW_GAME} from '../actions'; 

const initialState = {
            guesses: [],
            feedback: 'Make your guess!',
            correctAnswer: Math.round(Math.random() * 100)
        };

        export const gameReducer = (state=initialState, action) => {
            if(action.type === START_NEW_GAME) {
                return state;
            }




            return state;
        };