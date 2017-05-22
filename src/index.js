import './reset.css';
import React from 'react';
import ReactDOM from 'react-dom';



import {startNewGame} from './actions';
import store from './store';

store.dispatch(startNewGame());
console.log(store.getState());


import './reset.css';
import './index.css';

import Game from './components/game';

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
