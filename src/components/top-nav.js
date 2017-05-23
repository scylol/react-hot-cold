import React from 'react';

import {startNewGame, displayInfo} from '../actions';
import { connect } from 'react-redux';

import './top-nav.css';

export class TopNav extends React.Component {
    onNewGame(event) {
        event.preventDefault();
        this.props.dispatch(startNewGame())
    }

    onInfo(event) {
        console.log('inside oninfo')
        event.preventDefault();
        this.props.dispatch(displayInfo())
    }

 

    render() {
        return (
            <nav>
                <ul className="clearfix">
                    <li>
                        <a className="what" href="#" onClick={e => this.onInfo(e)}>
                            What?
                        </a>
                    </li>
                    <li>
                        <a className="new" href="#" onClick={e => this.onNewGame(e)}>
                            + New Game
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
};



export default connect()(TopNav);