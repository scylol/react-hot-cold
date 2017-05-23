import React from 'react';
import {connect} from 'react-redux';

import TopNav from './top-nav';
import InfoModal from './info-modal';
import {displayInfo,startNewGame} from '../actions'

import './header.css';

export class Header extends React.Component  {
    constructor(props) {
        super(props);
    }


    render() {
        
        let infoModal;
        if (this.props.infoModal) {
            infoModal = <InfoModal />;
        }
        
        return (
            <header>
                <TopNav />
                {infoModal}
                <h1>HOT or COLD</h1>
            </header>
        );
    }
};

export const mapStateToProps = state => ({
    infoModal: state.modal
});

export default connect(mapStateToProps)(Header);
