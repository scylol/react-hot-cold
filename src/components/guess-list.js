import React from 'react';
import {connect} from 'react-redux';

import './guess-list.css';

export function GuessList(props) {

    return (
        <ul id="guessList" className="guessBox clearfix">
            {props.guesses}
        </ul>
    );
};

export const mapStateToProps = state => ({
    guesses: state.guesses
});

export default connect(mapStateToProps)(GuessList);
