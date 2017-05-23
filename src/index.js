import './reset.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';


import {startNewGame, makeGuess, displayInfo} from './actions';
import store from './store';

store.dispatch(makeGuess(12));
console.log(store.getState());
store.dispatch(startNewGame());
console.log(store.getState());
store.dispatch(displayInfo());
console.log(store.getState());


import './reset.css';
import './index.css';

import Game from './components/game';

ReactDOM.render(
    <Provider store={store}>
      <Game />
    </Provider>,
    document.getElementById('root')
);
