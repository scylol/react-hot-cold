import React from 'react';
import {connect} from 'react-redux'

import './guess-count.css';

export function GuessCount(props) {
    return (
        <p>
            Guess #<span id="count">{props.guessLength}</span>!
        </p>
    );
}
export const mapStateToProps = state => ({
    guessLength: state.guesses.length
});

export default connect(mapStateToProps)(GuessCount);
