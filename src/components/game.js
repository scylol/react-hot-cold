import React from 'react';
import {connect} from 'react-redux'
import {startNewGame, makeGuess,displayInfo} from '../actions'
import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';


export class Game extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     guesses: [],
        //     feedback: 'Make your guess!',
        //     correctAnswer: Math.round(Math.random() * 100)
        // };
    }

    // newGame() {
    //     this.props.dispatch(startNewGame());
    //
    //
    // }

    // guess(guess) {
    //
    //     this.props.dispatch(makeGuess(guess));
    //
    // }

    render() {
        if(this.props.infoModal){
            //show modal
            console.log('yup')
        }else{
            return (
                <div>
                    <Header onNewGame={() => this.props.dispatch(startNewGame())}/>
                    <GuessSection />
                    <GuessCount count={1} />
                    <GuessList guesses={this.props.guesses} />
                </div>
            );
        }
    }
}

export const mapStateToProps = state => ({
    infoModal: state.modal
});

export default connect()(Game);
